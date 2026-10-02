(() => {
  'use strict';

  /* ================= AYARLAR (buradan değiştir) ================= */
  const CLUB_NAME = 'Veri Bilimi Topluluğu';
  const QUIZ_LENGTH = 5;          // kullanıcıya gösterilecek soru sayısı
  const IDLE_RESET_MS = 90000;    // etkileşim yoksa başa dön (sonraki kişi için)

  const LEVELS = [
    { emoji: '🧭', title: "Excel'e Bile Güvenemeyen Kaşif",
      desc: 'Veriyle ilk karşılaşma. Merak var, rehber henüz yok. Standa gel, birlikte başlayalım.',
      caption: 'R² = 0.00 · motivasyon: yüksek' },
    { emoji: '🐣', title: 'Veriyi Koklayan Çırak',
      desc: 'Bir şeyler sezmeye başladın. Hâlâ Google’a bakıyorsun ama artık doğru kelimeleri arıyorsun.',
      caption: 'model: yaklaşık ama cesur' },
    { emoji: '🐼', title: "Pandas'ı Hâlâ Hayvanat Bahçesinde Arayan",
      desc: 'Yarı yoldasın. Doğruların tesadüf değil, yanlışların da değerli eğitim verisi.',
      caption: 'korelasyon var, nedensellik tartışmalı' },
    { emoji: '🕵️', title: 'Ortalama Üstü Veri Dedektifi',
      desc: 'Aykırı değerleri yakalıyor, kırpılmış eksenli grafiğe şüpheyle bakıyorsun.',
      caption: 'güven aralığı dar, özgüven geniş' },
    { emoji: '☕', title: 'Junior Data Scientist (Kahveli Sürüm)',
      desc: 'Neredeyse tam. LinkedIn’de unvanını güncellemene ramak kaldı.',
      caption: 'R² = 0.94 · hiperparametre: kahve' },
    { emoji: '👑', title: 'Veri Biliminin Seçilmiş Kişisi',
      desc: 'Ya çok iyisin ya da test setini sızdırdın. İkisini de seviyoruz.',
      caption: 'overfit yok, sadece yetenek' }
  ];

  const OK_MSGS = ['Doğru! 🎯', 'Tam isabet!', 'p < 0.05 ile haklısın.', 'Bu veriyi çözdün.', 'Temiz iş! ✨'];
  const NO_MSGS = [
    'Yanlış, ama modeller de ilk denemede şaşırır.',
    'Bu soru outlier’dı, sayma.',
    'Overfit oldun galiba 😅',
    'Hata payı içinde sayılır.',
    'Bir sonraki iterasyonda düzelir.'
  ];
  const EGG_MSG = '🥚 Easter egg: Bu sayfayı 7 kez tıkladıysan medyanın üstündesin.';

  /* ================= YARDIMCILAR ================= */
  const INK = '#14213D', PINK = '#D81B72', TEAL = '#0E9F8E', SUN = '#FFD93D', GRID = '#C9DAE6';
  const SVGNS = 'http://www.w3.org/2000/svg';
  const $ = (id) => document.getElementById(id);

  // Tüm metinler textContent ile yazılır; innerHTML hiç kullanılmaz (XSS yüzeyi yok).
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function svg(tag, attrs) {
    const e = document.createElementNS(SVGNS, tag);
    for (const k in attrs) e.setAttribute(k, String(attrs[k]));
    return e;
  }
  function randInt(n) {
    const c = window.crypto;
    if (c && c.getRandomValues) {
      const a = new Uint32Array(1);
      const lim = Math.floor(0x100000000 / n) * n;
      let x;
      do { c.getRandomValues(a); x = a[0]; } while (x >= lim);
      return x % n;
    }
    return Math.floor(Math.random() * n);
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = randInt(i + 1);
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  const pick = (arr) => arr[randInt(arr.length)];

  /* ================= SORU HAVUZU DOĞRULAMA ================= */
  const POOL = (Array.isArray(window.QUESTIONS) ? window.QUESTIONS : []).filter((q) =>
    q && typeof q.q === 'string' && Array.isArray(q.o) && q.o.length === 4 &&
    new Set(q.o).size === 4
  );
  if (POOL.length < QUIZ_LENGTH) {
    console.error('Soru havuzu yetersiz veya hatalı biçimde.');
  }
  const N = Math.min(QUIZ_LENGTH, POOL.length);

  /* ================= DURUM ================= */
  const st = { qs: [], i: 0, score: 0, results: [], locked: false };
  let idleTimer = null;

  /* ================= EKRAN YÖNETİMİ ================= */
  function show(id) {
    ['s-welcome', 's-quiz', 's-result'].forEach((s) => { $(s).hidden = (s !== id); });
    window.scrollTo(0, 0);
  }

  /* ================= GRAFİK ÇİZİMİ ================= */
  const NOISE = [0.8, -0.6, 0.3, -0.9, 0.5, 0.9, -0.4, 0.2, -0.7, 0.6, -0.2, 0.4];
  const TREND = [0, 0.3, 0.55, 0.75, 0.92, 1];
  const AMP = [1, 0.85, 0.6, 0.4, 0.18, 0];

  function makeChart(level) {
    const W = 300, H = 150, L = 26, R = 288, T = 14, B = 128;
    const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart', role: 'img', 'aria-label': 'Örnek veri grafiği' });
    s.appendChild(svg('line', { x1: L, y1: B, x2: R, y2: B, stroke: INK, 'stroke-width': 2.5, 'stroke-linecap': 'round' }));
    s.appendChild(svg('line', { x1: L, y1: T, x2: L, y2: B, stroke: INK, 'stroke-width': 2.5, 'stroke-linecap': 'round' }));
    const tr = TREND[level], amp = AMP[level];
    const val = (t) => 0.5 + tr * (t - 0.5) * 0.8;
    const py = (v) => B - Math.max(0.05, Math.min(0.95, v)) * (B - T);
    s.appendChild(svg('line', {
      x1: L + 8, y1: py(val(0)), x2: R - 8, y2: py(val(1)),
      stroke: PINK, 'stroke-width': 3.5, 'stroke-linecap': 'round', class: 'fitline'
    }));
    for (let k = 0; k < 12; k++) {
      const t = k / 11;
      const x = L + 14 + t * (R - L - 28);
      const y = py(val(t) + NOISE[k] * amp * 0.3);
      const c = svg('circle', { cx: x, cy: y, r: 6, fill: level >= 3 ? TEAL : SUN, stroke: INK, 'stroke-width': 2.5, class: 'pt' });
      c.style.setProperty('--d', String(k * 55));
      s.appendChild(c);
    }
    return s;
  }

  function levelIndex(score) {
    return Math.max(0, Math.min(LEVELS.length - 1, Math.round((score / N) * (LEVELS.length - 1))));
  }

  /* ================= KARŞILAMA ================= */
  function goWelcome() {
    clearTimeout(idleTimer);
    $('hero').textContent = '';
    $('hero').appendChild(makeChart(3));
    show('s-welcome');
  }

  /* ================= QUIZ ================= */
  function startQuiz() {
    const picked = shuffle(POOL).slice(0, N);
    st.qs = picked.map((q) => ({
      q: q.q,
      e: typeof q.e === 'string' ? q.e : '',
      opts: shuffle(q.o.map((text, idx) => ({ text, correct: idx === 0 })))
    }));
    st.i = 0; st.score = 0; st.results = []; st.locked = false;
    show('s-quiz');
    renderQuestion();
  }

  function drawProgress() {
    const box = $('progress');
    box.textContent = '';
    const s = svg('svg', { viewBox: '0 0 300 48', role: 'img', 'aria-label': `Soru ${st.i + 1} / ${N}` });
    const xs = (i) => 30 + i * (240 / Math.max(1, N - 1));
    const ys = (r) => (r === true ? 12 : r === false ? 36 : 24);
    s.appendChild(svg('line', { x1: 14, y1: 24, x2: 286, y2: 24, stroke: GRID, 'stroke-width': 2, 'stroke-dasharray': '4 5' }));
    if (st.results.length > 1) {
      s.appendChild(svg('polyline', {
        points: st.results.map((r, i) => `${xs(i)},${ys(r)}`).join(' '),
        fill: 'none', stroke: INK, 'stroke-width': 3, 'stroke-linejoin': 'round', 'stroke-linecap': 'round'
      }));
    }
    for (let i = 0; i < N; i++) {
      const done = i < st.results.length;
      const r = st.results[i];
      s.appendChild(svg('circle', {
        cx: xs(i), cy: done ? ys(r) : 24, r: i === st.i ? 9 : 7,
        fill: done ? (r ? TEAL : PINK) : (i === st.i ? SUN : '#fff'),
        stroke: INK, 'stroke-width': 3
      }));
    }
    box.appendChild(s);
  }

  function renderQuestion() {
    const q = st.qs[st.i];
    st.locked = false;
    drawProgress();
    $('qtext').textContent = q.q;
    const opts = $('opts');
    opts.textContent = '';
    q.opts.forEach((o, idx) => {
      const b = el('button', 'opt');
      b.type = 'button';
      b.appendChild(el('span', 'chip', String.fromCharCode(65 + idx)));
      b.appendChild(el('span', 'txt', o.text));
      b.addEventListener('click', () => answer(idx, b));
      opts.appendChild(b);
    });
    const fb = $('fb');
    fb.textContent = '';
    fb.className = 'fb';
    $('next').hidden = true;
    $('next').textContent = (st.i === N - 1) ? 'Sonucu gör' : 'Sonraki';
    $('qtext').focus({ preventScroll: true });
  }

  function answer(idx, btn) {
    if (st.locked) return;     // çift dokunmayı engelle
    st.locked = true;
    const q = st.qs[st.i];
    const ok = q.opts[idx].correct === true;
    st.results.push(ok);
    if (ok) st.score++;

    const buttons = Array.from($('opts').children);
    buttons.forEach((b, k) => {
      b.disabled = true;
      if (q.opts[k].correct) b.classList.add('correct');
      else if (b === btn) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    if (!ok) btn.classList.remove('dim');

    const fb = $('fb');
    fb.textContent = '';
    fb.className = 'fb ' + (ok ? 'ok' : 'no');
    fb.appendChild(el('p', 'msg', pick(ok ? OK_MSGS : NO_MSGS)));
    if (q.e) fb.appendChild(el('p', 'exp', q.e));

    drawProgress();
    const next = $('next');
    next.hidden = false;
    next.focus({ preventScroll: true });
  }

  function nextStep() {
    if (!st.locked) return;
    if (st.i < N - 1) { st.i++; renderQuestion(); }
    else renderResult();
  }

  /* ================= SONUÇ ================= */
  function renderResult() {
    const lv = LEVELS[levelIndex(st.score)];
    const pct = Math.round((st.score / N) * 100);
    const card = $('card');
    card.textContent = '';

    const sticker = el('div', 'sticker');
    sticker.appendChild(el('span', 'big', `${st.score}/${N}`));
    sticker.appendChild(el('span', 'small', `%${pct} doğruluk`));
    card.appendChild(sticker);

    card.appendChild(el('p', 'tag', `${CLUB_NAME} · Seviye kartı`));
    card.appendChild(el('div', 'emoji', lv.emoji));
    card.appendChild(el('h2', '', lv.title));
    card.appendChild(el('p', 'desc', lv.desc));

    const cb = el('div', 'chartbox');
    cb.appendChild(makeChart(levelIndex(st.score)));
    cb.appendChild(el('p', 'caption', lv.caption));
    card.appendChild(cb);

    card.appendChild(el('p', 'meta', `Benim veri bilimi seviyem: ${lv.title}`));

    show('s-result');
    card.focus({ preventScroll: true });
    st.lastShare = `Veri bilimi mini testinde ${st.score}/${N} yaptım: ${lv.title} ${lv.emoji}`;
  }


  /* ================= EASTER EGG ================= */
  let taps = 0, tapTimer = null;
  function brandTap() {
    taps++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => { taps = 0; }, 2500);
    if (taps >= 7) { taps = 0; toast(EGG_MSG); }
  }
  let toastTimer = null;
  function toast(msg) {
    const t = $('toast');
    t.textContent = msg;
    t.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('on'), 3500);
  }

  /* ================= BOŞTA KALMA ================= */
  function bumpIdle() {
    clearTimeout(idleTimer);
    if ($('s-welcome').hidden) idleTimer = setTimeout(goWelcome, IDLE_RESET_MS);
  }

  /* ================= BAŞLAT ================= */
  function init() {
    $('clubName').textContent = CLUB_NAME;
    $('start').addEventListener('click', () => { startQuiz(); bumpIdle(); });
    $('next').addEventListener('click', nextStep);
    $('again').addEventListener('click', goWelcome);
    $('brand').addEventListener('click', brandTap);
    ['pointerdown', 'keydown'].forEach((ev) => document.addEventListener(ev, bumpIdle, { passive: true }));
    if (POOL.length < QUIZ_LENGTH) $('start').disabled = true;
    goWelcome();
  }

  init();
})();

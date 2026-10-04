// Soru havuzu: 5 zorluk seviyesi x 10 soru = 50 soru.
// Her testte HER SEVİYEDEN 1 soru gelir (sıra: 1 → 5).
//
// l : zorluk seviyesi  (1 Kolay, 2 Kolay+, 3 Orta, 4 Orta üstü, 5 Zor)
// q : soru metni
// o : 4 seçenek. KURAL: DOĞRU CEVAP HER ZAMAN o[0]. Uygulama seçenekleri karıştırır.
// e : cevaptan sonra gösterilen kısa açıklama
window.QUESTIONS = [

/* ============ SEVİYE 1 · KOLAY ============ */
  {
    l: 1,
    q: "3, 4, 4, 6, 9, 9, 9 verisinin modu kaçtır?",
    o: ["9", "6", "4", "3"],
    e: "Mod en sık tekrar eden değerdir; 9 üç kez geçiyor."
  },
  {
    l: 1,
    q: "Aylara göre satışların değişimini en iyi hangi grafik gösterir?",
    o: ["Çizgi grafik", "Pasta grafik", "Kutu grafiği", "Dağılım grafiği"],
    e: "Zaman içindeki değişim için çizgi grafik standart seçimdir."
  },
  {
    l: 1,
    q: "Excel'deki tabloya benzer satır-sütunlu veriyi Python'da en çok hangi kütüphane işler?",
    o: ["Pandas", "Flask", "Pygame", "Tkinter"],
    e: "Pandas, tablo verisi (DataFrame) için veri analizinin temel aracıdır."
  },
  {
    l: 1,
    q: "Ev fiyatı tahmin eden bir modelde, tahmin etmeye çalıştığımız 'fiyat' sütununa ne denir?",
    o: ["Hedef (target)", "Özellik (feature)", "İndeks", "Gürültü"],
    e: "Hedef, modelin tahmin etmeye çalıştığı değerdir."
  },
  {
    l: 1,
    q: "Bir tabloda bazı öğrencilerin yaş bilgisi boş. Bu duruma ne denir?",
    o: ["Eksik veri", "Aykırı değer", "Tekrarlı veri", "Hedef değişken"],
    e: "Boş kalan değerler eksik veridir ve analizden önce ele alınmalıdır."
  },
  {
    l: 1,
    q: "Bir e-postanın 'spam' mı yoksa 'spam değil' mi olduğunu tahmin etmek hangi problemdir?",
    o: ["Sınıflandırma", "Regresyon", "Kümeleme", "Görselleştirme"],
    e: "Çıktı bir kategori olduğu için sınıflandırma problemidir."
  },
  {
    l: 1,
    q: "Göz rengi (mavi, yeşil, kahverengi) hangi tür veridir?",
    o: ["Kategorik veri", "Sürekli sayısal veri", "Zaman serisi", "Eksik veri"],
    e: "Kategorik veri, sayı değil gruplardan oluşur."
  },
  {
    l: 1,
    q: "Bir model eğitim verisini ezberleyip yeni verilerde kötü sonuç veriyorsa buna ne denir?",
    o: ["Overfitting (aşırı öğrenme)", "Underfitting", "Normalizasyon", "Clustering"],
    e: "Overfitting: model gürültüyü bile ezberler, genelleme yapamaz."
  },
  {
    l: 1,
    q: "Makine öğrenmesinde modeli 'eğitmek' ne demektir?",
    o: ["Örneklerden kalıpları öğrenmesini sağlamak", "Kuralları tek tek elle yazmak", "Veri setindeki satırları silmek", "Sonuçları grafiğe dökmek"],
    e: "Eğitim sırasında model, verideki örneklerden kalıpları kendisi çıkarır."
  },
  {
    l: 1,
    q: "Bir sınıfta herkes 60–80 arası alırken bir öğrenci 5 aldı. Bu değer için ne denir?",
    o: ["Aykırı değer (outlier)", "Mod", "Etiket", "Normal dağılım"],
    e: "Aykırı değerler ortalamayı ciddi şekilde çarpıtabilir."
  },

  /* ============ SEVİYE 2 · KOLAY+ ============ */
  {
    l: 2,
    q: "Bir veride birkaç aşırı yüksek değer var. 'Tipik' değeri hangisi daha iyi gösterir?",
    o: ["Medyan", "Ortalama", "Toplam", "En büyük değer"],
    e: "Uç değerler ortalamayı çeker; medyan buna karşı daha dirençlidir."
  },
  {
    l: 2,
    q: "Yarınki hava sıcaklığını (°C) tahmin eden model hangi türdür?",
    o: ["Regresyon", "Sınıflandırma", "Kümeleme", "Boyut indirgeme"],
    e: "Sürekli bir sayıyı tahmin etmek regresyondur."
  },
  {
    l: 2,
    q: "Test verisini eğitimde de kullanırsak sonuç neden yanıltıcı olur?",
    o: ["Model, daha önce gördüğü veriyle ölçülür", "Model gereksiz yere yavaşlar", "Eğitim verisi azalır", "Test sonucu hep düşük çıkar"],
    e: "Sınav sorularını önceden görmek gibi: skor gerçek başarıyı yansıtmaz."
  },
  {
    l: 2,
    q: "Çalışma saati arttıkça sınav notu da artıyor. Bu ilişki nedir?",
    o: ["Pozitif korelasyon", "Negatif korelasyon", "Korelasyon yok", "Kesin nedensellik"],
    e: "İkisi birlikte artıyor: pozitif korelasyon."
  },
  {
    l: 2,
    q: "Veri bilimcilerin zamanının büyük kısmı genellikle neye gider?",
    o: ["Veriyi temizlemeye ve hazırlamaya", "Model mimarisi tasarlamaya", "Modeli yayına almaya", "Sunum hazırlamaya"],
    e: "Gerçek hayatta emeğin çoğu veri temizliğidir; model kısmı işin küçük dilimi."
  },
  {
    l: 2,
    q: "Aynı müşteri tabloya iki kez girilmiş. Bu en çok neyi bozar?",
    o: ["Sayımları ve ortalamaları", "Sütun adlarının yazımını", "Dosyanın kaydedildiği biçimi", "Grafiklerin renk paletini"],
    e: "Tekrarlı kayıtlar bazı gözlemleri gereğinden fazla saydırır."
  },
  {
    l: 2,
    q: "Model, test ettiğimiz 3 örneğin 3'ünü doğru bildi. Buradan ne çıkar?",
    o: ["Güvenilir sonuç için örnek çok az", "Model mükemmel çalışıyor demektir", "Model aşırı öğrenmiştir", "Model hemen yayına hazırdır"],
    e: "Küçük örneklem tesadüfen iyi görünebilir; daha fazla test gerekir."
  },
  {
    l: 2,
    q: "Etiketi olmayan müşterileri benzerliklerine göre gruplamak hangi yöntemdir?",
    o: ["Kümeleme", "Regresyon", "Sınıflandırma", "Doğrulama"],
    e: "Kümeleme, etiket olmadan benzer örnekleri bir araya getirir."
  },
  {
    l: 2,
    q: "Hem eğitim hem test verisinde kötü performans gösteren model için ne söylenebilir?",
    o: ["Underfitting (eksik öğrenme)", "Overfitting (aşırı öğrenme)", "Mükemmel genelleme yapmıştır", "Veride hiç gürültü yoktur"],
    e: "Model veriyi bile öğrenememiştir: fazla basit, yani underfitting."
  },
  {
    l: 2,
    q: "Bir dil modelinde 'halüsinasyon' ne demektir?",
    o: ["Yanlış bilgiyi kendinden emin biçimde üretmesi", "Cevap vermeyi reddetmesi", "Çok yavaş çalışması", "Eğitim verisini silmesi"],
    e: "Model olası görünen metni üretir; doğruluğu garanti etmez."
  },

  /* ============ SEVİYE 3 · ORTA ============ */
  {
    l: 3,
    q: "Sadece kantinde anket yapıp 'tüm kampüs böyle düşünüyor' demenin sorunu nedir?",
    o: ["Örneklem kampüsü temsil etmeyebilir", "Anketler her zaman yanlıştır", "Yanıtlar ortalamaya çevrilemez", "Cevaplar rastgeledir"],
    e: "Temsil gücü zayıf örneklem, genele dair sonuç vermez."
  },
  {
    l: 3,
    q: "Kütüphanede çok vakit geçirenlerin notları yüksek. Hangisi söylenebilir?",
    o: ["İlişki var; nedensellik kesin değil", "Kütüphane notları kesin artırır", "Yüksek notlar kütüphane ziyaretini kesin artırır", "Aralarında ilişki yoktur"],
    e: "Gözlenen ilişki, neden-sonuç anlamına gelmez."
  },
  {
    l: 3,
    q: "Kutu grafiğinde (boxplot) kutunun dışında kalan tek tek noktalar genelde neyi gösterir?",
    o: ["Aykırı değerleri", "Ortalamayı", "Eksik verileri", "Mod değerini"],
    e: "Kutunun uzağında kalan noktalar aykırı değer adayıdır."
  },
  {
    l: 3,
    q: "Model eğitimde çok iyi, yeni veride kötü. Hangisi bu sorunu azaltmaya yardımcı olur?",
    o: ["Modeli sadeleştirmek veya veri eklemek", "Modeli daha karmaşık yapmak", "Eğitim verisini azaltmak", "Test verisini eğitime katmak"],
    e: "Aşırı öğrenmeyi basit model ve daha çok veri azaltır."
  },
  {
    l: 3,
    q: "Sütun grafikte y ekseni 0 yerine 90'dan başlıyor. Ne olur?",
    o: ["Farklar olduğundan büyük görünür", "Grafik daha dürüst olur", "Hiçbir şey değişmez", "Veri otomatik normalleşir"],
    e: "Kırpılmış eksen, küçük farkları dramatik gösterebilir."
  },
  {
    l: 3,
    q: "Bir yüz tanıma modeli çoğunlukla tek bir grubun fotoğraflarıyla eğitildi. Olası sonuç nedir?",
    o: ["Diğer gruplarda daha çok hata yapar", "Tüm gruplarda eşit çalışır", "Model kendiliğinden adil olur", "Yalnızca eğitim süresi uzar"],
    e: "Dengesiz eğitim verisi, modelde yanlılığa yol açar."
  },
  {
    l: 3,
    q: "Şehir sütununda 'İstanbul', 'istanbul' ve 'İSTANBUL' yazıyor. Sorun nedir?",
    o: ["Aynı şehir üç ayrı kategori sayılır", "Hiçbir sorun yaratmaz", "Sütun otomatik sayısal olur", "Şehir sayısı otomatik azalır"],
    e: "Tutarsız yazım, aynı kategoriyi parçalar; temizlenmelidir."
  },
  {
    l: 3,
    q: "Gradient descent (gradyan inişi) ne işe yarar?",
    o: ["Hatayı azaltacak yönde parametreleri adım adım günceller", "Eksik verileri doldurur", "Veriyi eğitim ve test diye böler", "Kategorileri sayıya çevirir"],
    e: "Model, hatayı düşüren yöne küçük adımlarla ilerleyerek öğrenir."
  },
  {
    l: 3,
    q: "Görüntü tanımada (ör. röntgen, yüz) en yaygın kullanılan sinir ağı türü hangisidir?",
    o: ["CNN (evrişimli sinir ağı)", "K-means", "Doğrusal regresyon", "Apriori"],
    e: "CNN'ler görüntüdeki kenar, doku gibi örüntüleri yakalamakta başarılıdır."
  },
  {
    l: 3,
    q: "Modele vermeden önce 'şehir' gibi bir metin sütunu için ne yapılır?",
    o: ["Sayısal koda çevrilir (ör. one-hot)", "Sütunun ortalaması alınır", "Doğrudan grafiğe dökülür", "Eğitimden sonra eklenir"],
    e: "Çoğu model sayı ister; kategoriler one-hot gibi yöntemlerle sayıya çevrilir."
  },

  /* ============ SEVİYE 4 · ORTA ÜSTÜ ============ */
  {
    l: 4,
    q: "Veri sızıntısı (data leakage) varsa model nasıl görünür?",
    o: ["Test başarısı yapay olarak çok yüksek", "Hiçbir şey öğrenemez", "Eğitim süresi çok uzar", "Tüm satırlar silinir"],
    e: "Test veya gelecek bilgisi eğitime karışınca skor şişer, gerçek hayatta çöker."
  },
  {
    l: 4,
    q: "Hastaların %1 olduğu veride model herkese 'sağlıklı' dese accuracy %99 olur. Bu neyi gösterir?",
    o: ["Accuracy dengesiz veride yanıltıcıdır", "Model mükemmeldir", "Veri hatalıdır", "Recall %99'dur"],
    e: "Bu yüzden dengesiz veride precision, recall ve F1'e de bakılır."
  },
  {
    l: 4,
    q: "Spam filtresi önemli mailleri spam'e atıyor (pozitif sınıf: spam). Hangi metrik düşer?",
    o: ["Precision", "Recall", "MSE", "Silhouette"],
    e: "'Spam' dediklerinin çoğu aslında spam değil: precision düşük."
  },
  {
    l: 4,
    q: "Bir sütun 0–1, diğeri 0–1.000.000 arası. Mesafeye dayalı bir modelde ne olur?",
    o: ["Büyük ölçekli sütun sonucu domine eder", "İkisi eşit etki eder", "Küçük sütun kendiliğinden büyür", "Model yalnızca küçük sütunu kullanır"],
    e: "Bu yüzden özellikler çoğu zaman ölçeklenir."
  },
  {
    l: 4,
    q: "İki değişkenin korelasyonu 0 çıktı. Hangisi söylenebilir?",
    o: ["Doğrusal ilişki yok; başka tür olabilir", "Hiçbir türde ilişki olamaz", "Biri diğerini ters etkiler", "Veri hatalı toplanmıştır"],
    e: "Korelasyon sadece doğrusal ilişkiyi ölçer."
  },
  {
    l: 4,
    q: "Test sonucuna bakıp modeli defalarca ayarlarsak ne olur?",
    o: ["Test seti tarafsızlığını kaybeder", "Model kendiliğinden sadeleşir", "Eğitim verisi büyür", "Hata oranı sıfırlanır"],
    e: "Test setine göre ayar yapmak, onu dolaylı olarak eğitimin parçası yapar."
  },
  {
    l: 4,
    q: "ChatGPT gibi büyük dil modelleri (LLM) temelde ne yapar?",
    o: ["Metnin devamındaki parçayı (token) tahmin eder", "Her cevabı canlı olarak internetten arar", "Cümlelerin doğruluğunu garanti eder", "Hazır cevapları tekrar eder"],
    e: "LLM'ler olasılığı yüksek devamı üretir; bu yüzden bazen yanlışı da kendinden emin söyler."
  },
  {
    l: 4,
    q: "Sinir ağı eğitiminde nöronların rastgele kapatılması tekniğine ne denir?",
    o: ["Dropout", "Pooling", "Embedding", "Backpropagation"],
    e: "Dropout, ağın ezberlemesini zorlaştırarak overfitting'i azaltır."
  },
  {
    l: 4,
    q: "Transformer modellerinin (GPT, BERT) temel yeniliği hangisidir?",
    o: ["Attention (dikkat) mekanizması", "Evrişim katmanı", "Karar ağacı", "Kümeleme"],
    e: "Attention, her kelimenin diğer kelimelere ne kadar önem vereceğini öğrenir."
  },
  {
    l: 4,
    q: "Random forest (rastgele orman) nedir?",
    o: ["Çok sayıda karar ağacının birlikte oy kullandığı model", "Tek ve çok derin bir sinir ağı", "Verileri gruplayan kümeleme yöntemi", "Metin üreten bir dil modeli"],
    e: "Birçok ağacın ortak kararı, tek ağaca göre daha kararlıdır."
  },

  /* ============ SEVİYE 5 · ZOR ============ */
  {
    l: 5,
    q: "Bir dil modelinin güncel veya özel belgelere dayanarak cevap vermesi için sık kullanılan yöntem hangisidir?",
    o: ["RAG (arama destekli üretim)", "Dropout", "K-means", "Min-max ölçekleme"],
    e: "RAG, modelin cevap vermeden önce ilgili belgeleri bulup bağlama eklemesidir."
  },
  {
    l: 5,
    q: "Bir modelin ROC AUC değeri 0,5 çıktı (ikili sınıflandırma). Ne anlama gelir?",
    o: ["Rastgele tahminden farksız", "Mükemmel model", "Yarı yarıya doğru", "Model overfit olmuş"],
    e: "0,5 yazı-tura atmak gibidir; 1,0 mükemmeldir."
  },
  {
    l: 5,
    q: "Confounder (karıştırıcı değişken) nedir?",
    o: ["İki değişkeni birden etkileyip sahte ilişki yaratan üçüncü değişken", "Eksik değerleri taşıyan sütun", "Hedef değişkenin kendisi", "Modelin ürettiği tahmin"],
    e: "Gizli bir üçüncü etken, birbirine bağlı olmayan iki şeyi ilişkili gösterebilir."
  },
  {
    l: 5,
    q: "İkili sınıflandırmada 'pozitif' karar eşiğini düşürürsek genelde ne olur?",
    o: ["Recall artar, precision düşebilir", "Precision artar, recall düşebilir", "İkisi de her zaman artar", "İkisi de değişmez"],
    e: "Daha kolay 'pozitif' dersen daha çok yakalarsın ama daha çok yanlış alarm da verirsin."
  },
  {
    l: 5,
    q: "K-fold çapraz doğrulama (cross-validation) neden kullanılır?",
    o: ["Skorun tek bir bölmenin şansına bağlı olmasını azaltır", "Eğitimi her zaman hızlandırır", "Eksik verileri doldurur", "Model boyutunu küçültür"],
    e: "Veriyi farklı parçalara bölüp tekrar tekrar test ederek daha güvenilir bir skor verir."
  },
  {
    l: 5,
    q: "Hayatta kalma yanlılığı (survivorship bias) nedir?",
    o: ["Sadece 'ayakta kalan' örnekleri görüp sonuç çıkarmak", "Eksik verilerin silinmesi", "Modelin eğitim verisini ezberlemesi", "Test verisinin eğitime sızması"],
    e: "Elenenler veride yoksa, görünen örnekler gerçeği olduğundan iyi gösterir."
  },
  {
    l: 5,
    q: "Hedefle gerçekte hiç ilişkisi olmayan 100 sütun denenirse ne olabilir?",
    o: ["Birkaçı tesadüfen ilişkili görünebilir", "Hiçbiri ilişkili görünmez", "Hepsi güçlü ilişkili görünür", "Model bunu kendiliğinden düzeltir"],
    e: "Çok deneme yapınca şans eseri 'anlamlı' görünen sonuçlar çıkar."
  },
  {
    l: 5,
    q: "Ortalamaya dönüş (regression to the mean) nedir?",
    o: ["Uç değerlerin sonraki ölçümde ortalamaya yaklaşma eğilimi", "Regresyon modelinin ortalamayı tahmin etmesi", "Eksik değerlerin ortalamayla doldurulması", "Ortalamanın medyana eşit olması"],
    e: "Çok düşük veya yüksek ölçümler, tekrar ölçülünce çoğunlukla ortalamaya yaklaşır."
  },
  {
    l: 5,
    q: "Simpson paradoksu nedir?",
    o: ["Alt gruplardaki eğilimin, gruplar birleşince tersine dönmesi", "Verinin artınca modelin kötüleşmesi", "İki değişkenin hem pozitif hem negatif korelasyonlu olması", "Test skorunun eğitim skorundan yüksek çıkması"],
    e: "Grup büyüklükleri farklıysa toplam sonuç alt grupların tersini gösterebilir."
  },
  {
    l: 5,
    q: "L1 düzenlileştirme (Lasso) modele ne yaptırır?",
    o: ["Bazı katsayıları sıfırlayarak özellik seçer", "Veriyi 0–1 aralığına ölçekler", "Eğitim verisini çoğaltır", "Öğrenme hızını otomatik ayarlar"],
    e: "L1 cezası önemsiz özelliklerin katsayısını tam sıfıra çeker."
  }
];

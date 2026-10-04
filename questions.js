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
    o: ["9", "6", "4", "6,3"],
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
    q: "Sınav notlarının hangi aralıkta yoğunlaştığını görmek için hangi grafik uygundur?",
    o: ["Histogram", "Çizgi grafik", "Pasta grafik", "Isı haritası"],
    e: "Histogram, bir değişkenin hangi aralıkta ne kadar yoğunlaştığını gösterir."
  },
  {
    l: 1,
    q: "Model kurmadan önce veri temizlemenin temel amacı nedir?",
    o: ["Hatalı verileri düzeltmek", "Veriye daha fazla sütun eklemek", "Grafiklerin renklerini seçmek", "Modeli daha hızlı çalıştırmak"],
    e: "Kirli veri, ne kadar iyi model kurarsan kur sonucu bozar."
  },
  {
    l: 1,
    q: "Öğrenci tablosunda her satır genellikle neyi temsil eder?",
    o: ["Bir öğrenciyi (bir gözlemi)", "Bir özelliği (örneğin yaş)", "Bir tablo türünü", "Bir hata mesajını"],
    e: "Satır bir gözlem/kayıt, sütun ise bir özelliktir."
  },

  /* ============ SEVİYE 2 · KOLAY+ ============ */
  {
    l: 2,
    q: "Bir mahallede çoğu kişi 30 bin TL kazanıyor, bir kişi 5 milyon TL. 'Tipik' geliri hangisi daha iyi anlatır?",
    o: ["Medyan", "Ortalama", "Toplam", "En büyük değer"],
    e: "Uç değerler ortalamayı çeker; medyan buna karşı daha dirençlidir."
  },
  {
    l: 2,
    q: "Bir evin fiyatını TL olarak tahmin eden model hangi türdür?",
    o: ["Regresyon", "Sınıflandırma", "Kümeleme", "Boyut indirgeme"],
    e: "Sürekli bir sayıyı tahmin etmek regresyondur."
  },
  {
    l: 2,
    q: "Test verisini eğitimde de kullanırsak sonuç neden yanıltıcı olur?",
    o: ["Model, daha önce gördüğü veriyle ölçülür", "Model gereksiz yere daha yavaş çalışır", "Eğitim verisi mutlaka çok azalmış olur", "Test sonucu hep daha düşük çıkar"],
    e: "Sınav sorularını önceden görmek gibi: skor gerçek başarıyı yansıtmaz."
  },
  {
    l: 2,
    q: "Çalışma saati arttıkça sınav notu da artıyorsa bu hangi ilişkiyi gösterir?",
    o: ["Pozitif korelasyon", "Negatif korelasyon", "Korelasyon yok", "Kesin nedensellik"],
    e: "İkisi birlikte artıyor; bu tek başına nedensellik kanıtı değildir."
  },
  {
    l: 2,
    q: "Bir ürünün fiyatı 1.200 yerine 120.000 girilmiş görünüyor. İlk adım ne olmalı?",
    o: ["Hata olup olmadığını kontrol etmek", "Satırı hemen silip devam etmek", "Değeri ortalamayla değiştirip geçmek", "Modeli eğitip sonucu beklemek"],
    e: "Aykırı değer hata da olabilir gerçek de; önce kontrol edilir."
  },
  {
    l: 2,
    q: "Bölümlere göre öğrenci sayılarını yan yana karşılaştırmak için hangi grafik uygundur?",
    o: ["Sütun grafik", "Çizgi grafik", "Dağılım grafiği", "Histogram"],
    e: "Kategorileri karşılaştırmak için sütun grafik en okunaklı seçimdir."
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
    q: "Ev fiyatı tahmininde 'metrekare' sütunu hangi roldedir?",
    o: ["Özellik (girdi)", "Hedef (çıktı)", "İndeks", "Aykırı değer"],
    e: "Özellikler modelin tahmin yaparken kullandığı girdilerdir."
  },
  {
    l: 2,
    q: "Etiketi olmayan müşterileri benzerliklerine göre gruplamak hangi yöntemdir?",
    o: ["Kümeleme", "Regresyon", "Sınıflandırma", "Doğrulama"],
    e: "Kümeleme, etiket olmadan benzer örnekleri bir araya getirir."
  },

  /* ============ SEVİYE 3 · ORTA ============ */
  {
    l: 3,
    q: "Sadece kantin önünde anket yapıp 'tüm kampüs böyle düşünüyor' demenin sorunu nedir?",
    o: ["Örneklem kampüsü temsil etmeyebilir", "Anketler her zaman yanlış sonuç verir", "Yanıtlar ortalamaya çevrilemez", "Katılımcıların cevapları rastgeledir"],
    e: "Temsil gücü zayıf örneklem, genele dair sonuç vermez."
  },
  {
    l: 3,
    q: "Kütüphanede çok vakit geçirenlerin notları yüksek çıkıyor. Hangisi söylenebilir?",
    o: ["İlişki var; nedensellik kesin değil", "Kütüphane notları kesin olarak artırır", "Yüksek notlar kütüphane ziyaretini kesin artırır", "Aralarında hiçbir ilişki yoktur"],
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
    o: ["Modeli sadeleştirmek veya veri eklemek", "Modeli daha da karmaşık hale getirmek", "Eğitim verisini önemli ölçüde azaltmak", "Test verisini de eğitime katmak"],
    e: "Aşırı öğrenmeyi basit model ve daha çok veri azaltır."
  },
  {
    l: 3,
    q: "Gelir sütunundaki boşlukları 0 ile doldurmak neden sorun yaratabilir?",
    o: ["0, gerçek gelir sayılıp ortalamayı bozar", "Sütun artık sayısal sayılmaz", "Boş değerler zaten kendiliğinden silinir", "Programlar sıfır değerini işleyemez"],
    e: "0 'bilinmiyor' demek değildir; gerçek bir değermiş gibi hesaba girer."
  },
  {
    l: 3,
    q: "'Geçti/Kaldı' tahmini ile final notunu (0–100) tahmin etmek aynı problem türü müdür?",
    o: ["Hayır: biri sınıflandırma, biri regresyon", "Evet: ikisi de sınıflandırma problemidir", "Evet: ikisi de regresyon problemidir", "Hayır: biri kümeleme, biri sınıflandırma"],
    e: "Kategori tahmini sınıflandırma, sayı tahmini regresyondur."
  },
  {
    l: 3,
    q: "Sütun grafikte y ekseni 0 yerine 90'dan başlıyor. Ne olur?",
    o: ["Farklar olduğundan büyük görünür", "Grafik daha doğru ve dürüst olur", "Hiçbir şeyin görünümü değişmez", "Veri otomatik olarak normalleşir"],
    e: "Kırpılmış eksen, küçük farkları dramatik gösterebilir."
  },
  {
    l: 3,
    q: "Bir yüz tanıma modeli çoğunlukla tek bir grubun fotoğraflarıyla eğitildi. Olası sonuç nedir?",
    o: ["Diğer gruplarda daha çok hata yapar", "Tüm gruplarda eşit başarıyla çalışır", "Model kendiliğinden adil hale gelir", "Yalnızca eğitim süresi uzar"],
    e: "Dengesiz eğitim verisi, modelde yanlılığa yol açar."
  },
  {
    l: 3,
    q: "Şehir sütununda 'İstanbul', 'istanbul' ve 'İSTANBUL' yazıyor. Sorun nedir?",
    o: ["Aynı şehir üç ayrı kategori sayılır", "Hiçbir sorun yaratmaz, model düzeltir", "Sütun otomatik olarak sayısal olur", "Şehir sayısı otomatik azalır"],
    e: "Tutarsız yazım, aynı kategoriyi parçalar; temizlenmelidir."
  },
  {
    l: 3,
    q: "İki değişkenin korelasyonu −0,9 ise ne anlaşılır?",
    o: ["Biri artarken diğeri azalır", "Aralarında ilişki bulunmaz", "Biri diğerinin kesin nedenidir", "Veri toplama hatası vardır"],
    e: "Güçlü negatif ilişki; ama yine neden-sonuç demek değildir."
  },

  /* ============ SEVİYE 4 · ORTA ÜSTÜ ============ */
  {
    l: 4,
    q: "100 işlemin 2'si sahtekârlık. Hepsine 'normal' diyen model %98 doğruluk alıyor. Bu ne gösterir?",
    o: ["Doğruluk yanıltıcı, sahtekârlık yakalanmıyor", "Model çok başarılıdır, hemen yayına alınabilir", "Model veriyi aşırı ezberlemiştir", "Veri hatalı toplanmış olmalıdır"],
    e: "Dengesiz veride accuracy yanıltıcıdır."
  },
  {
    l: 4,
    q: "Hasta kişileri kaçırmamak en önemliyse hangi metriğe odaklanılır?",
    o: ["Recall", "Precision", "Accuracy", "Varyans"],
    e: "Recall, gerçek pozitiflerin ne kadarının yakalandığını ölçer."
  },
  {
    l: 4,
    q: "Spam filtresi önemli mailleri sık sık spam'e atıyor (pozitif sınıf: spam). Hangi metrik düşüktür?",
    o: ["Precision", "Recall", "Ortalama", "Medyan"],
    e: "'Spam' dediklerinin çoğu aslında spam değil: precision düşük."
  },
  {
    l: 4,
    q: "Final notu tahmin edilirken modele 'dönem sonu harf notu' sütunu da verildi. Sonuç neden güvenilmezdir?",
    o: ["Cevap girdilere sızmış olduğu için", "Harf notları sayısal olmadığı için", "Model eğitimi çok yavaşlayacağı için", "Tablo gereğinden geniş olacağı için"],
    e: "Cevabı içeren sütun, modeli sahte biçimde başarılı gösterir."
  },
  {
    l: 4,
    q: "Bir sütun 0–1, diğeri 0–1.000.000 arası. Mesafeye dayalı bir model için ne olur?",
    o: [
      "Büyük ölçekli sütun sonucu domine eder",
      "İkisi eşit etki eder",
      "Küçük ölçekli sütun kendiliğinden büyür",
      "Model sadece küçük sütunu kullanır"
    ],
    e: "Bu yüzden özellikler çoğu zaman ölçeklenir."
  },
  {
    l: 4,
    q: "İki değişkenin korelasyonu 0 çıktı. Hangisi söylenebilir?",
    o: ["Doğrusal ilişki yok; başka tür olabilir", "Aralarında hiçbir türde ilişki olamaz", "Biri diğerini ters yönde etkiler", "Veri mutlaka hatalı toplanmıştır"],
    e: "Korelasyon sadece doğrusal ilişkiyi ölçer."
  },
  {
    l: 4,
    q: "Test sonucuna bakıp modeli defalarca ayarlarsak ne olur?",
    o: ["Test seti tarafsızlığını kaybeder", "Model kendiliğinden daha sade olur", "Eğitim verisi otomatik olarak büyür", "Hata oranı kendiliğinden sıfırlanır"],
    e: "Test setine göre ayar yapmak, onu dolaylı olarak eğitimin parçası yapar."
  },
  {
    l: 4,
    q: "Yüksek gelirliler gelir sorusunu sık boş bırakıyor. Boşları ortalamayla doldurmak ne yapar?",
    o: ["Geliri olduğundan düşük gösterebilir", "Sonucu tamamen doğru hale getirir", "Geliri olduğundan yüksek gösterir", "Sonuca hiçbir etkisi olmaz"],
    e: "Boşlar yüksek gelirlilerse, mevcut ortalama gerçeğin altında kalır."
  },
  {
    l: 4,
    q: "Model hem eğitim hem test verisinde kötü. En olası sorun nedir?",
    o: ["Yetersiz öğrenme (underfitting)", "Aşırı öğrenme (overfitting)", "Test verisi eğitim sırasında sızmış", "Çok fazla veri kullanılmış"],
    e: "Her yerde kötüyse model fazla basittir; overfitting'de eğitim iyi, test kötüdür."
  },
  {
    l: 4,
    q: "Histogramda aralık (bin) sayısını çok fazla artırırsak ne olur?",
    o: ["Grafik gürültülü ve parçalı görünür", "Dağılım şekli çok daha net görünür", "Aykırı değerler kendiliğinden silinir", "Ortalama ve medyan değişir"],
    e: "Çok fazla aralık, genel şekli görmeyi zorlaştırır."
  },

  /* ============ SEVİYE 5 · ZOR ============ */
  {
    l: 5,
    q: "Savaştan dönen uçaklarda motor bölgesinde neredeyse hiç hasar yok. En mantıklı çıkarım?",
    o: ["Motoru vurulanlar dönememiş olabilir", "Motor bölgesi diğerlerinden sağlamdır", "Düşman motoru hiç hedeflememiştir", "Hasarlar bölgelere rastgele dağılmıştır"],
    e: "Hayatta kalma yanlılığı: sadece dönebilenleri görüyoruz."
  },
  {
    l: 5,
    q: "İlaç X hem kadınlarda hem erkeklerde daha iyi, ama tüm hastalarda daha kötü çıkıyor. Mümkün mü?",
    o: ["Evet, grup büyüklükleri farklıysa olabilir", "Hayır, mutlaka hesap hatası vardır", "Evet, ama yalnızca veri azsa olur", "Hayır, toplam hep gruplarla aynı yöndedir"],
    e: "Bu, Simpson paradoksudur."
  },
  {
    l: 5,
    q: "1000 kişide 10 hasta var. Test hepsini buluyor ama sağlıklıların %10'una da 'pozitif' diyor. Pozitif çıkan kişi yaklaşık %kaç hastadır?",
    o: ["%9 civarı", "%90 civarı", "%99", "%50"],
    e: "Yaklaşık 10 gerçek + 99 yanlış pozitif var: 10/109 ≈ %9."
  },
  {
    l: 5,
    q: "En düşük not alan 10 öğrenciye özel ders verildi, ikinci sınavda yükseldiler. 'Özel ders işe yaradı' demek için en çok ne gerekir?",
    o: ["Kontrol grubuyla karşılaştırma yapmak", "Daha yüksek ikinci sınav notları", "Öğrencilerin memnuniyet anketi sonuçları", "Daha uzun bir ikinci sınav"],
    e: "Çok düşük skorlar zaten kendiliğinden ortalamaya yaklaşabilir."
  },
  {
    l: 5,
    q: "Ölçekleme için ortalama ve standart sapmayı test verisi dahil tüm veriden hesaplamak neden sorun?",
    o: ["Test bilgisi eğitime sızar", "Eğitim kümesi gereksiz küçülür", "Ölçekleme bu durumda işe yaramaz", "Test kümesi gereksiz büyür"],
    e: "Ölçekleme parametreleri sadece eğitim verisinden öğrenilmelidir."
  },
  {
    l: 5,
    q: "Hedefle gerçekte hiç ilişkisi olmayan 100 sütun denenirse ne olabilir?",
    o: ["Birkaçı tesadüfen ilişkili görünebilir", "Hiçbiri ilişkili görünmez, çünkü ilişki yok", "Hepsi güçlü ilişkili görünür", "Model bunu kendiliğinden düzeltir"],
    e: "Çok deneme yapınca şans eseri 'anlamlı' görünen sonuçlar çıkar."
  },
  {
    l: 5,
    q: "İkili sınıflandırmada 'pozitif' karar eşiğini düşürürsek genelde ne olur?",
    o: ["Recall artar, precision düşebilir", "Precision artar, recall düşebilir", "İkisi birden her zaman artar", "İkisi de hiç değişmez"],
    e: "Daha kolay 'pozitif' dersen daha çok yakalarsın ama daha çok yanlış alarm da verirsin."
  },
  {
    l: 5,
    q: "Yangına giden itfaiyeci sayısı arttıkça hasar da artıyor. En makul açıklama nedir?",
    o: ["Yangının büyüklüğü ikisini de artırır", "İtfaiyeciler hasara yol açar", "Hasar artınca itfaiyeci azalır", "İkisi arasındaki bağ tamamen tesadüftür"],
    e: "Üçüncü bir etken (yangının büyüklüğü) ikisini birden etkiliyor."
  },
  {
    l: 5,
    q: "Ürün A: 10 kişiden 9'u beğendi. Ürün B: 1000 kişiden 850'si beğendi. Hangi oran daha güvenilir bir tahmindir?",
    o: ["B'nin %85'i; örneklem çok daha büyük", "A'nın %90'ı; oran daha yüksek", "İkisi de aynı derecede güvenilir", "Hiçbiri; oranlar karşılaştırılamaz"],
    e: "Örneklem büyüdükçe tahmin daha güvenilir olur."
  },
  {
    l: 5,
    q: "A sınıfı: 10 kişi, ortalama 80. B sınıfı: 30 kişi, ortalama 60. İki sınıfın birleşik ortalaması kaçtır?",
    o: ["65", "70", "60", "75"],
    e: "Ağırlıklı ortalama: (10·80 + 30·60) / 40 = 65."
  }
];

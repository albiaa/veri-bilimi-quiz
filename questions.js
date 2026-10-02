// Soru havuzu.
// KURAL: "o" dizisinde DOĞRU CEVAP HER ZAMAN İLK sırada yazılır (o[0]).
// Uygulama seçenekleri her gösterimde rastgele karıştırır; doğru cevap yeri değişir.
// "e" = cevaptan sonra gösterilen tek cümlelik açıklama.
window.QUESTIONS = [
  {
    q: "Bir veri setinde en sık tekrar eden değere ne denir?",
    o: ["Mod", "Ortalama", "Medyan", "Varyans"],
    e: "Mod en sık görülen değerdir. Ortalama ve medyan ise merkezi ölçer."
  },
  {
    q: "Bir model eğitim verisini ezberleyip yeni verilerde kötü sonuç veriyorsa buna ne denir?",
    o: ["Overfitting (aşırı öğrenme)", "Underfitting", "Normalizasyon", "Clustering"],
    e: "Overfitting: model gürültüyü bile ezberler, genelleme yapamaz."
  },
  {
    q: "Bir değerin zaman içindeki değişimini göstermek için en uygun grafik hangisidir?",
    o: ["Çizgi grafik", "Pasta grafik", "Kutu grafiği", "Isı haritası"],
    e: "Çizgi grafik, zaman serisi için klasik ve en okunaklı seçenektir."
  },
  {
    q: "İki sayısal değişken arasındaki ilişkiyi tek tek noktalarla gösteren grafik hangisidir?",
    o: ["Dağılım (scatter) grafiği", "Histogram", "Pasta grafik", "Sütun grafik"],
    e: "Scatter plot'ta her nokta bir gözlemdir; ilişki kümeden okunur."
  },
  {
    q: "Netflix'in sana \"bunu da beğenebilirsin\" demesi hangi uygulamaya örnektir?",
    o: ["Öneri sistemi", "Görüntü sıkıştırma", "Veri şifreleme", "Ağ yönlendirme"],
    e: "Öneri sistemleri geçmiş davranışından ve benzer kullanıcılardan öğrenir."
  },
  {
    q: "Dondurma satışları arttıkça boğulma vakaları da artıyor. Bu durum neyi gösterir?",
    o: [
      "Korelasyon, nedensellik anlamına gelmez (yaz mevsimi gibi üçüncü bir etken olabilir)",
      "Dondurma yemek boğulmaya yol açar",
      "Boğulmalar dondurma satışını artırır",
      "Veri kesinlikle yanlış toplanmıştır"
    ],
    e: "İki şey birlikte artıyor diye biri diğerine neden olmaz."
  },
  {
    q: "Python'da tablo biçimindeki verilerle çalışmak için en popüler kütüphane hangisidir?",
    o: ["Pandas", "Flask", "Tkinter", "Pygame"],
    e: "Pandas, DataFrame yapısıyla veri analizinin temel taşıdır."
  },
  {
    q: "Bir tabloda boş kalan hücreler veri biliminde genellikle nasıl adlandırılır?",
    o: ["Eksik değer (NaN / null)", "Aykırı değer", "Etiket (label)", "Özellik (feature)"],
    e: "Eksik değerler doldurulur ya da temizlenir; yoksa analizi bozar."
  },
  {
    q: "Bir sınıfta herkes 60–80 arası alırken bir öğrenci 5 aldı. Bu değer için ne denir?",
    o: ["Aykırı değer (outlier)", "Mod", "Etiket", "Normal dağılım"],
    e: "Aykırı değerler ortalamayı ciddi şekilde çarpıtabilir."
  },
  {
    q: "E-postaları \"spam\" ve \"spam değil\" diye ayıran model hangi problem türüne girer?",
    o: ["Sınıflandırma", "Regresyon", "Kümeleme", "Boyut indirgeme"],
    e: "Çıktı sayı değil kategori ise sınıflandırma yapıyorsun."
  },
  {
    q: "Yarınki hava sıcaklığını sayı olarak tahmin eden model hangi problem türüne girer?",
    o: ["Regresyon", "Sınıflandırma", "Kümeleme", "Kural tabanlı arama"],
    e: "Sürekli bir sayıyı tahmin etmek regresyondur."
  },
  {
    q: "Etiketi olmayan müşterileri, benzerliklerine göre gruplara ayırmak hangi yöntemdir?",
    o: ["Kümeleme (clustering)", "Regresyon", "Sınıflandırma", "Veri etiketleme"],
    e: "Kümeleme denetimsiz öğrenmedir; grupları algoritma kendisi bulur."
  },
  {
    q: "1, 3, 5, 7, 100 verisinin medyanı kaçtır?",
    o: ["5", "23,2", "7", "3"],
    e: "Medyan ortadaki değerdir. Ortalama (23,2) ise 100'den dolayı yanıltıcıdır."
  },
  {
    q: "Modelin performansını tarafsız ölçmek için eğitimde hiç kullanılmayan verilere ne denir?",
    o: ["Test seti", "Eğitim seti", "Ham veri", "Yedek veri"],
    e: "Test seti modelin \"sınav sorusu\"dur; eğitimde görülmemelidir."
  },
  {
    q: "ChatGPT gibi büyük dil modelleri (LLM) temelde ne yapar?",
    o: [
      "Verilen metnin devamında gelecek parçayı (token) tahmin eder",
      "Her cevabı internetten canlı olarak arar",
      "Söylediği her cümlenin doğruluğunu garanti eder",
      "Sadece önceden yazılmış cevapları tekrar eder"
    ],
    e: "LLM'ler olasılığı yüksek devamı üretir; bu yüzden bazen yanlışı da kendinden emin söyler."
  },
  {
    q: "Pasta grafik en çok neyi göstermek için uygundur?",
    o: [
      "Parçaların bütün içindeki payını",
      "Zaman içindeki değişimi",
      "İki değişkenin ilişkisini",
      "Çok sayıda kategoriyi karşılaştırmayı"
    ],
    e: "Pasta grafik oran içindir; fazla dilim olunca okunmaz hale gelir."
  },
  {
    q: "Bir sütun grafiğin y eksenini 0'dan değil de 95'ten başlatmak ne yapar?",
    o: [
      "Küçük farkları olduğundan büyük gösterebilir",
      "Grafiği daha doğru yapar",
      "Hiçbir şeyi değiştirmez",
      "Veriyi otomatik normalleştirir"
    ],
    e: "Kırpılmış eksen klasik bir yanıltma yöntemidir; sütunlar 0'dan başlamalı."
  },
  {
    q: "Veri bilimcilerin zamanının büyük kısmı genellikle neye gider?",
    o: [
      "Veriyi temizlemeye ve hazırlamaya",
      "Model mimarisi çizmeye",
      "Sunum slaytı süslemeye",
      "Sadece grafik renklerini seçmeye"
    ],
    e: "Gerçek hayatta emeğin çoğu veri temizliğidir; model kısmı işin küçük dilimi."
  },
  {
    q: "10 kişiye sorduğun anketin sonucuyla tüm üniversite hakkında kesin yargıya varmak neden sorundur?",
    o: [
      "Örneklem küçük ve temsil gücü zayıf olabilir",
      "Anketler hiçbir zaman gerçeği yansıtmaz",
      "Sadece 100 kişiden fazlası ölçülebilir",
      "Çünkü ortalama alınamaz"
    ],
    e: "Küçük ve seçilmiş örneklem, genele dair güvenilir sonuç vermez."
  },
  {
    q: "Hastaların yalnızca %1'inde görülen bir hastalık için model herkese \"sağlıklı\" diyor. Bu modelin doğruluğu (accuracy) kaçtır?",
    o: ["%99 (ama işe yaramaz)", "%1", "%50", "%0"],
    e: "Dengesiz veride accuracy yanıltır; precision ve recall'a da bakmak gerekir."
  }
];

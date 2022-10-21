





let result = document.querySelector(".result");
const btn = document.querySelector(".btn");


btn.addEventListener("click", function () {
  const input = document.querySelector("#inp")
  const inpVal = document.querySelector("#inp").value;
  input.value = '';




  switch (inpVal) {
    case "v68":
      result.innerHTML = "V-68 kodu olan yabancıların ikamet izninin alması ancak bakanlık onayına tabidir. Bu kişiler bakımından ikamet izni alma süreci normal süreçten farklı ilerlemekte ve ek izne ihtiyaç duymaktadır." + "<br>" + "<hr>"
      break;

    case "v69":
      result.innerHTML = "V-69, Türkiye’de ikamet izni alıp da daha sonra ikamet kurallarına uyulmadığı takdirde iptal edilenlere konulur. Örneğin; ikamet için gerekli evrakların sahte olması gibi durumlarda V-69 tahdit kodu konulur ve kişiye 5 yıl boyunca ikamet izni verilmez.." + "<br>" + "<hr>"
      break;

    case "v70":
      result.innerHTML = "Türkiye’de ikamet izni alabilmek için sahte evlilik yapan yabancıların, tespit edilmesi halinde, haklarında V-70 tahdit kodu konularak 5 yıl kadar Türkiye’ye giriş yapmaları engellenir." + "<br>" + "<hr>"
      break;

    case "v71":
      result.innerHTML = " Adreste bulunamayan, adres değişikliğini bildirmeyen, gerçeğe aykırı beyan eden yabancılar " + "<br>" + "<hr>"
      break;

    case "v72":
      result.innerHTML = " V-72, ikamet izni alırken bildirdiği adresini değiştirip bunu ilgili makamlara bildirmeyen veya gerçekte bildirdiği ikamet adresinden başka bir adreste ikamet eden yabancılara konulan koddur. İdari başvuru ile çözülebilir. " + "<br>" + "<hr>"
      break;

    case "v74":
      result.innerHTML = " V-74, Türkiye’den çıkmadan önce çıkışını bakanlık veya valiliklere bildirmesi gereken yabancılara konulan tahdit kodudur. İdari başvuru veya dava ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "v84":
      result.innerHTML = " V-84, 10 gün içinde ikamet izni almak koşuluyla giriş yapan yabancı vatandaşların 10 gün içerisinde ikamet izni almak için yabancı şubelere başvurmamaları halinde konulur ve süreli giriş yasağı uygulanır. " + "<br>" + "<hr>"
      break;

    case "v87":
      result.innerHTML = " V-87, Türkiye’de geçici koruma statüsünde bulunup gönüllü olarak ülkesine dönüş yapan yabancılara konulan tahdit kodudur. " + "<br>" + "<hr>"
      break;

    case "v88":
      result.innerHTML = " V-88, çalışma izni bulunup çalışma izni iptal edilen yabancılara konulur. Çalışma izninin iptal nedenlerine göre para cezası ve Türkiye’ye giriş yasağı da konulabilir. Meşruhatlı davetiye, yeni bir çalışma izni başvurusu veya idari dava ile çözülmesi gerekir. " + "<br>" + "<hr>"
      break;

    case "v91":
      result.innerHTML = " V-91, geçici koruma statüsünde bulunup ülkeden çıkışı izne tabi olan yabancılara konulur. Bu kişiler ülkeden çıkmadan önce ilgili makamlardan izin almalıdır. Kodun kaldırılması idari başvuru veya dava yolu ile olabilir." + "<br>" + "<hr>"
      break;

    case "v92":
      result.innerHTML = " V-92 geçici koruma statüsünde olup hakkında çift kayıt açılmış yabancıların kodudur. Kendiliğinden düzeltilmemişse çift kaydın düzeltilmesi için idari başvuru yapılması gerekir." + "<br>" + "<hr>"
      break;

    case "v137":
      result.innerHTML = " Hakkında sınır dışı kararı verilen bazı yabancılar derhal zorla sınır dışı edilmeyip kendilerine 15 gün süre verilerek Türkiye’yi terke davet edilirler. Bu kişiler 15 gün içerisinde Türkiye’yi terk etmeleri gerekir. 15 gün geçtikten sonra hala Türkiye’de iseler haklarında derhal deport kararı uygulanır ve giriş yasağı konulur. Bu kişilere V-137 kodu konulur." + "<br>" + "<hr>"
      break;


    case "v144":
      result.innerHTML = "<h3>57-A kapsamında serbest bırakılanlar</h3>" + "Haklarında deport kararı olan bazı yabancıların ülkesine geri dönmesi mümkün olmayabilir veya dönerse bu kişinin hayati tehlikesi olabilir. Bu durumlarda yabancı 3. ülkeye deport edilebilir. Bu da mümkün değilse yabancı deport edilmez ve kendisine insani ikamet izni verilir. Bu süreçte kişiye V-144 kodu konulur. Meşruhatlı vize yöntemi ile kaldırılabilir." + "<br>" + "<hr>"
      break;
    case "v148":
      result.innerHTML = "<h3>Geçici barınma merkezinde barınan kişi</h3>" + " Bazı yabancılar durumun koşullarına göre geçici barınma merkezlerinde kalabilir. Bu durumda bu kişilere V-148 kodu konulur. Bilgilendirme kodu olup barınma süreci bittiğinde idari başvuru ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "v154":
      result.innerHTML = "<h3>Sınır dışı etme kararına karşı idare mahkemesine başvuru</h3>" + " Aşağıda bahsedeceğimiz gibi sınır dışı kararına karşı idare mahkemesinde dava açılabilmektedir. Bu durumda kişi sınır dışı edilmez. Bu konuda kişiye V-154 kodu konulabilir. Bilgilendirme kodu olup herhangi bir zararı olan kod değildir. Dava sonunda kaldırılır. " + "<br>" + "<hr>"
      break;

    case "v157":
      result.innerHTML = "<h3>İkamet izni talepleri red edilenler</h3>" + " V-157 ikamet izni başvurusu red edilen yabancılara konulan koddur. Kodun kaldırılması için meşruhatlı vize yoluna başvurulması veya red ikamet başvurusunun reddi kararına karşı idare mahkemesinde dava açılması gerekir. " + "<br>" + "<hr>"
      break;

    case "v158":
      result.innerHTML = "<h3>Yabancı temsilcilik personel/aile üyesi kimlik kartı iptal</h3>" + " Yabancı temsilciliklerde çalışan kişilerin veya aile üyelerinin kimlik kartları bazı nedenlerden dolayı iptal edilebilir. Bu durumda ilgili kişilere V-158 tahdit kodu konulur. Kart iptal nedenine göre idari başvuru veya dava yolu ile çözülebilir. " + "<br>" + "<hr>"
      break;

    case "v159":
      result.innerHTML = "<h3>Üçüncü ülkeye geçiş için ülkemize gelenler</h3>" + " V-159, transit geçiş için ülkeye gelen yabancılara konulur. Bilgilendirme kodu olup yabancı bakımından bir zararı yoktur. " + "<br>" + "<hr>"
      break;

    case "g26":
      result.innerHTML = "<h3>Yasadışı örgüt faaliyetleri</h3>" + " G-26, yasadışı örgüt faaliyetlerinde bulunan veya bulunduğu şüphesi olan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir." + "<br>" + "<hr>"
      break;

    case "g34":
      result.innerHTML = "<h3>Sahtecilik</h3>" + " G-34, sahtecilik suçlarını işleyen veya işlediği şüphesi olan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir." + "<br>" + "<hr>"
      break;

    case "g42":
      result.innerHTML = "<h3>Uyuşturucu madde suçu</h3>" + " G-42, uyuşturucu madde suçlarını işleyen veya işlediği şüphesi bulunan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir." + "<br>" + "<hr>"
      break;

    case "g43":
      result.innerHTML = "<h3>Kaçakçılık suçları</h3>" + " G-43, kaçakçılık suçlarını işleyen veya işlediği şüphesi bulunan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir." + "<br>" + "<hr>"
      break;

    case "g48":
      result.innerHTML = "<h3>Fuhşa aracılık etme ve yer temini</h3>" + " G-48, fuhşa aracılık etme ve yer temini suçunu işleyen veya işlediği şüphesi bulunan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir" + "<br>" + "<hr>"
      break;

    case "g58":
      result.innerHTML = "<h3>Öldürme suçları</h3>" + " G-58, öldürme suçlarını işleyen veya işlediği şüphesi bulunan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "g64":
      result.innerHTML = "<h3>Tehdit</h3>" + " G-64, tehdit suçunu işleyen veya işlediği şüphesi bulunan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "g65":
      result.innerHTML = "<h3>Hırsızlık</h3>" + " G-65, hırsızlık suçunu işleyen veya işlediği şüphesi bulunan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir.. " + "<br>" + "<hr>"
      break;

    case "g66":
      result.innerHTML = "<h3>Gasp yağma</h3>" + " G-66, gasp (yağma) suçunu işleyen veya işlediği şüphesi bulunan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "g67":
      result.innerHTML = "<h3>Dolandırıcılık</h3>" + " G-67, dolandırıcılık suçlarını işleyen veya işlediği şüphesi bulunan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "g78":
      result.innerHTML = "<h3>Bulaşıcı hastalık taşıyan yabancılar</h3>" + " Bulaşıcı hastalık taşıyan yabancılar hakkında G-78 tahdit kodu konularak süresiz olarak Türkiye’ye girişleri engellenir. Ancak hatalı teşhis yapılmışsa veya daha sonra yabancı tedavi olup sağlığına kavuşmuşsa yapılacak başvuru neticesinde Türkiye’ye giriş yasağı kalkar. Bu başvurunun dava ile mi yoksa idari başvuru ile mi yapılacağı konusunda bir avukata danışılması gerekir. " + "<br>" + "<hr>"
      break;

    case "g82":
      result.innerHTML = "<h3>Milli güvenlik aleyhine faaliyet</h3>" + " G-82, milli güvenlik aleyhine faaliyette bulunan veya bulunduğu şüphesi olan yabancılara konulan koddur. Aşağıda bahsettiğimiz G-87 kodu ile benzerlik taşımaktadır. Onun gibi istihbari bilgilere dayanılarak konulabilir. Ancak dava yolu ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "g87":
      result.innerHTML = "<h3>Genel güvenlik açısından tehlike arz edilen kişiler</h3>" + " Yabancı kişiler hakkında emniyet istihbarat, milli istihbarat teşkilatı gibi bazı kaynaklara dayanılarak G-87 tahdit kodu konulabilmekte ve bu kişiler sınır dışı edilmektedirler  Burada uygulamada çoğu durumda karşılaştığımız istihbarat raporlarının gelişi güzel ve herhangi bir somut kanıta dayandırılmamasıdır. Çoğu durumda istihbarat, sadece şüpheye dayanarak yabancı kişi hakkında rapor oluşturup bunu Göç İdaresi’ne bildirmektedir. Bu durumlarda dava açılarak bu kodun kaldırılması mümkündür. Ayrıca G-87 kodu konulan bazı kişilerin sınır dışı edilmesiyle kendi ülkelerinde hayatları risk altında olmaktadır. Daha önce Anayasa Mahkemesi önüne gelen bir dava da hakkında G-87 tahdit kodu konulan kişinin sınır dışı edilmesi halinde hayatının risk altına gireceği ve kişinin genel güvenlik açısından kesin bir tehlike arz etmemesi nedenleri gerekçe gösterilerek bu işlem iptal edilmiş ve kişi sınır dışı edilmemiştir." + "<br>" + "<hr>"
      break;




    case "Ç101":
      result.innerHTML = "<h3>Vize, vize muafiyeti, ikamet, çalışma izni ihlali / 3 ay süreyle giriş yasağı</h3>" + " Ç-101; vize, vize muafiyeti, ikamet izni ve çalışma izni kurallarını ihlal eden yabancılara konulur. Bu kişilere ek olarak para cezası ve yurda giriş yasağı uygulanır. Meşruhatlı vize veya dava yolu ile çözülebilir ve aynı zamanda Türkiye’ye giriş yasağı kaldırılır." + "<br>" + "<hr>"
      break;

    case "Ç102":
      result.innerHTML = "<h3>Vize, vize muafiyeti, ikamet, çalışma izni ihlali / 6 ay süreyle giriş yasağı</h3>" + " Ç-102; vize, vize muafiyeti, ikamet izni ve çalışma izni kurallarını ihlal eden yabancılara konulur. Bu kişilere ek olarak para cezası ve yurda giriş yasağı uygulanır. Meşruhatlı vize veya dava yolu ile çözülebilir ve aynı zamanda Türkiye’ye giriş yasağı kaldırılı " + "<br>" + "<hr>"
      break;

    case "Ç103":
      result.innerHTML = "<h3>Vize, vize muafiyeti, ikamet, çalışma izni ihlali / 1 yıl süreyle giriş yasağı</h3>" + " Ç-103; vize, vize muafiyeti, ikamet izni ve çalışma izni kurallarını ihlal eden yabancılara konulur. Bu kişilere ek olarak para cezası ve yurda giriş yasağı uygulanır. Meşruhatlı vize veya dava yolu ile çözülebilir ve aynı zamanda Türkiye’ye giriş yasağı kaldırılır." + "<br>" + "<hr>"
      break;

    case "Ç104":
      result.innerHTML = "<h3>Vize, vize muafiyeti, ikamet, çalışma izni ihlali / 2 yıl süreyle giriş yasağı</h3>" + " Ç-104; vize, vize muafiyeti, ikamet izni ve çalışma izni kurallarını ihlal eden yabancılara konulur. Bu kişilere ek olarak para cezası ve yurda giriş yasağı uygulanır. Meşruhatlı vize veya dava yolu ile çözülebilir ve aynı zamanda Türkiye’ye giriş yasağı kaldırılır." + "<br>" + "<hr>"
      break;


    case "Ç105":
      result.innerHTML = "<h3>Vize, vize muafiyeti, ikamet, çalışma izni ihlali / 5 yıl süreyle giriş yasağı</h3>" + " Ç-105; vize, vize muafiyeti, ikamet izni ve çalışma izni kurallarını ihlal eden yabancılara konulur. Bu kişilere ek olarak para cezası ve yurda giriş yasağı uygulanır. Meşruhatlı vize veya dava yolu ile çözülebilir ve aynı zamanda Türkiye’ye giriş yasağı kaldırılır." + "<br>" + "<hr>"
      break;



    case "Ç113":
      result.innerHTML = "<h3> Yasadışı giriş-çıkış yapanlar </h3>" + " Türkiye’ye yasadışı giriş yapan yabancılar hakkında Ç-113 tahdit kodu konularak 2 yıl boyunca Türkiye’ye girişleri engellenir ve ayrıca idari para cezası kesilir. İdari para cezası ödenirse Türkiye’ye sadece 2 yıl boyunca giriş yapılamaz ancak idari para cezası ödenmezse 2 yıla ek olarak 5 yıl daha Türkiye’ye giriş engellenir. İdari para cezası da bir idari işlem olduğu için yargı yolu açıktır. Doğru zamanda doğru mahkemede dava açılması gereki " + "<br>" + "<hr>"
      break;


    case "Ç114":
      result.innerHTML = "<h3> Haklarında adli işlem yapılan yabancılar </h3>" + " Türkiye’deyken herhangi adli bir işleme konu olmanız halinde suçlu olup olmamanıza bakılmaksızın hakkınızda 1 yıl boyunca Türkiye’ye giriş yasağı uygulanacaktır. İdari dava ile çözümü mümkündür. " + "<br>" + "<hr>"
      break;

    case "Ç115":
      result.innerHTML = "<h3> Ceza evinden tahliye olan yabancılar </h3>" + " Suç işleyip de Türkiye’de hapis cezasını tamamlayanlar hakkında 1 yıl süreyle Türkiye’ye girişleri yasağı konulur. İdari dava ile çözümü mümkündür. " + "<br>" + "<hr>"
      break;


    case "Ç116":
      result.innerHTML = "<h3> Genel ahlak ve kamu sağlığını tehlikeye atan yabancılar </h3>" + " Genel ahlaka aykırı davranan veya kamu sağlığını tehlikeye atan yabancıların Türkiye’ye tekrardan girişleri 1 boyunca engellenir Barlar, gece klüpleri vb. eğlence yerlerinden alınan yabancı kadınlar hakkında kolluk kuvvetlerince yakalama tutanağına ‘fuhuş yapmak amacıyla mekâna geldiği değerlendirilmektedir’ şeklinde yazılmakta ve sırf bu ifade ile yabancı kadınların ikamet ya da çalışma izinleri iptal edilmekte ve yabancılar bu sebeple sınır dışı edilebilmektedir Hiçbir fuhuş durumu olmadığı halde maalesef uygulamada bu gibi örneklerle çok karşılaşmaktayız. Bu konuda açtığımız davalarda olumlu sonuç almaktayız.  " + "<br>" + "<hr>"
      break;



    case "Ç117":
      result.innerHTML = "<h3> Kaçak çalışanlar </h3>" + " Türkiye’de kaçak çalışan yabancılar hakkında Ç-117 tahdit kodu konularak 1 yıl süreyle Türkiye’ye tekrardan girişleri engellenir. Ayrıca idari para cezası uygulanır. Meşruhatlı vize yöntemi ile çözülebilir. " + "<br>" + "<hr>"
      break;

    case "Ç118":
      result.innerHTML = "<h3> İkamet izni iptal edilenler </h3>" + " Türkiye’de ikamet izni alan yabancıların, ikamet iznini başka amaçlarla kullandıkları tespit edildiğinde haklarında Ç-118 tahdit kodu uygulanarak Türkiye’ye 5 yıl boyunca girişleri engellenir. Meşruhatlı vize alınarak tekrardan Türkiye’ye giriş sağlanabilir." + "<br>" + "<hr>"
      break;


    case "Ç119":
      result.innerHTML = "<h3> Kaçak çalışanların para cezasını ödememesi </h3>" + " Türkiye’de kaçak çalışan yabancılara, verilen idari para cezasının Türkiye’den çıkış yaparken ödenmemesi halinde Ç-119 tahdit kodu işlenerek 5 yıl boyunca Türkiye’ye girişleri engellenir. Meşruhatlı vize yöntemi ile durum çözülebilir." + "<br>" + "<hr>"
      break;

    case "Ç120":
      result.innerHTML = "<h3> Vize veya ikamet ihlalinden kaynaklanan para cezasının ödenmemesi </h3>" + " Vize veya ikamet ihlali yapan yabancılar hakkında uygulanan idari para cezasının Türkiye’den çıkış yaparken ödenmemesi halinde kişi hakkında Ç-120 tahdit kodu işlenerek 5 yıl süreyle tekrardan Türkiye’ye giriş yapması engellenir. Esasen yukarıda da izah ettiğimiz üzere vize ihlali halinde uygulanacak yaptırımlar yeni düzenleme ile çeşitlendirilmiştir. Vize ihlalinin geniş bir konu olması nedeni ile bu konuda ayrı bir yazı yazdık. Yukarıda konu linkini vermiştik. " + "<br>" + "<hr>"
      break;


    case "Ç135":
      result.innerHTML = "<h3> Yabancılar ve uluslararası koruma kanuna aykırı davrananlar </h3>" + " Yabancılar ve uluslararası koruma kanuna aykırı davranan yabancılara idari para cezası uygulanır. Bu para cezasının ödenmemesi halinde haklarında Ç-135 tahdit kodu konularak 5 yıl süreyle Türkiye’ye giriş yapmaları engellenir. Meşruhatlı vize alınarak kod kaldırılabilir. " + "<br>" + "<hr>"
      break;



    case "Ç136":
      result.innerHTML = "<h3> Terke davet edilen yabancılar </h3>" + " Göç idaresi tarafından belirli süreler içerisinde Türkiye’yi terke davet edilen yabancıların bu sürelerde Türkiye’yi davet etmemesi halinde haklarında Ç-137 tahdit kodu işlenerek Türkiye’ye 5 yıl boyunca girişleri engellenir. Meşruhatlı vize ile yeniden Türkiye’ye giriş sağlanabilir. Ayrıca idare mahkemesinde dava açılarak hiç Türkiye’den çıkmaması sağlanabilir. " + "<br>" + "<hr>"
      break;

    case "Ç137":
      result.innerHTML = "<h3> Seyahat masraflarını ödemeyenler </h3>" + " Yabancıların sınır dışı edilirken seyahat masraflarını kendileri tarafından karşılanamaması halinde Türkiye Cumhuriyeti tarafından karşılanır ve Ç-136 tahdit kodu işlenerek tekrar giriş yapabilmesi için bu masrafların ödenmesi istenir. " + "<br>" + "<hr>"
      break;


    case "Ç138":
      result.innerHTML = "<h3>İNAD yolcu</h3>" + " Türkiye’ye giriş yapması yasak olan yabancıların, ülkeye giriş yaparken bu durumlarının fark edilmesi halinde haklarında Ç-138 tahdit kodu işlenerek 5 yıla kadar Türkiye’ye girişleri engellenebilir. Duruma göre dava açılması gerekebilir." + "<br>" + "<hr>"
      break;

    case "Ç141":
      result.innerHTML = "<h3>Türkiye’ye girişi bakanlık iznine tabi yabancı</h3>" + "Ç 141, Türkiye’de yada yurt dışında Türkiye aleyhine işlemiş olduğu adli yada idari kanun ihlalinden dolayı ülkemize girişi “İÇ İŞLERİ BAKANLIĞI” tarafından yabancının pasaport bilgilerine, Türkiye’den sınır dışı edilirken yada giriş yapmadan önce alınan istihbarat bilgisi doğrultusunda Göç İdaresi tarafından uygulanan tahdit kodudur. Giriş için bakanlıktan izin alınmalıdır. İzin verilmez ise bakanlıktan gelecek cevaba göre farklı hukuki yollara başvurulabili Ancak N-82 kodunda olduğu gibi, bu izin uygulamada hemen hemen hiç izin verilmemektedir. Bu durum ülkeye giriş yasağının bir uygulamasıdır. Bu durumda dava açılıp kod iptal edilmeden yabancının Türkiye’ye girmesi uygulamada pek mümkün değildir." + "<br>" + "<hr>"
      break;

    case "Ç150":
      result.innerHTML = "<h3>Sahte belge ile giriş yapmaya çalışanlar</h3>" + " Ç-150, Türkiye’ye girişleri sırasında sahte belge ibraz eden yabancılara konulan koddur. Meşruhatlı vize veya bazı durumlarda dava yolu ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "Ç151":
      result.innerHTML = "<h3>Göçmen kaçakçısı/insan taciri</h3>" + " Ç-151, göçmen kaçakçısı suçunu işleyen veya işlediği şüphesi bulunan yabancılara konulan koddur. Ancak dava yolu ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "Ç152":
      result.innerHTML = "<h3>Ülkeye girişi ihtiyaten engellenen yabancılar</h3>" + " Ç-152, ülkeye girişi ihtiyaten (her olasılığa karşı) engellenen yabancılara konulur. Bu kod dava veya meşruhatlı vize ile kaldırılabilir. " + "<br>" + "<hr>"
      break;

    case "k":
      result.innerHTML = "<h3>Kaçakçılıktan arananlar</h3>" + " K tahdit kodu genelde kaçakçılık suçlarını işleyen ve hakkında yakalama kararı çıkan yabancılar için konulur. Bu kod giriş yasağı vermeyebilir. Hatta ve hatta yurtdışına çıkışı engelleme amacı ile de konabilir. " + "<br>" + "<hr>"
      break;


    case "n82":
      result.innerHTML = "<h3>Girişi ön izne bağlı yabancı</h3>" + " N-82 tahdit kodunda yabancı Türkiye’ye giriş yapmak için ön izin almak zorundadır. Ancak bu izin uygulamada hemen hemen hiç izin verilmemektedir. Bu durum ülkeye giriş yasağının bir uygulamasıdır. Bu durumda dava açılıp kod iptal edilmeden yabancının Türkiye’ye girmesi pek mümkün değildir." + "<br>" + "<hr>"
      break;

    case "n99":
      result.innerHTML = "<h3> İnterpol kodu </h3>" + " N-99 İnterpol tahdit kodu kendi ülkesinde ya da İnterpol sistemine üye bir ülke tarafından hakkında İnterpol arama bülteni çıkarılan kişiler bakımından konulur. Bu kod türü aynı zamanda Türkiye’ye giriş yasağına konulmasına da neden olabilmektedir. Giriş yasağı konulmasın konusunda takdir yetkisi devlete aittir. Bu esasen ciddi bir kod türü olmasına rağmen tarafımızca çokça kaldırıldığı olmuştur." + "<br>" + "<hr>"
      break;

    case "o100":
      result.innerHTML = "<h3> Semti Meçhul Yurda Giriş Yasaklı Sığınmacı </h3>" + " O 100, semti meçhul yurda giriş yasaklı sığınmacı tahdit kodudur. Türkiye’de İl Göç İdaresi Müdürlüklerine sığınmacı olarak başvuru yaparken beyan ettiği adreste bulunmadığı şikayet, rutin kontrol gibi uygulama ile tespit edilen ve ülkeye girişi yasaklanmış sığınmacı yabancılar hakkında Türkiye’den sınır dışı edilirken O-100 tahdit kodu uygular." + "<br>" + "<hr>"
      break;


    case "o176":
      result.innerHTML = "<h3> Uluslararası koruma talebi olumsuz değerlendirilen yabancılar 3 yıl</h3>" + " Uluslararı koruma talebinde bulunan yabancılar bu statü için uygun olup olmadığı değerlendirmeye alınır. Değerlendirme sonucu uygun olmaz ise bu kod konulur. İdari başvuru sonrasında dava yoluna gidilebilir. " + "<br>" + "<hr>"
      break;

    case "o177":
      result.innerHTML = "<h3> Uluslararası koruma talebi olumsuz değerlendirilen yabancılar 5 yıl </h3>" + " Uluslararı koruma talebinde bulunan yabancılar bu statü için uygun olup olmadığı değerlendirmeye alınır. Değerlendirme sonucu uygun olmaz ise bu kod konulur. İdari başvuru sonrasında dava yoluna gidilebilir. " + "<br>" + "<hr>"
      break;
















    default:
      result.innerHTML = "لم يتم ادخال هذا الكود يرجى ابلاغنا "
      break;
  }



})







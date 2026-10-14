import type { SubjectData } from './types';

const data: SubjectData = {
  cards: [
    {
      "id": "mat-c-001",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "front": "Doğal sayılar, tam sayılar ve rasyonel sayılar kümeleri nelerdir?",
      "back": "Doğal sayılar N = {0, 1, 2, ...}\nTam sayılar Z = {..., −2, −1, 0, 1, 2, ...}\nRasyonel sayılar Q: a/b (a, b tam sayı, b ≠ 0) biçiminde yazılabilen sayılar.\nN ⊂ Z ⊂ Q ⊂ R"
    },
    {
      "id": "mat-c-002",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "front": "Tek ve çift sayılarla işlem kuralları nelerdir?",
      "back": "T + T = Ç, Ç + Ç = Ç, T + Ç = T\nT · T = T, Ç · (her sayı) = Ç\nÖrnek: 3 + 5 = 8 (çift), 3 · 5 = 15 (tek)"
    },
    {
      "id": "mat-c-003",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "front": "Asal sayı nedir?",
      "back": "1'den büyük, yalnızca 1'e ve kendisine bölünebilen doğal sayıdır. En küçük asal 2'dir ve tek çift asal sayıdır. 1 asal değildir.\nİlk asallar: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29"
    },
    {
      "id": "mat-c-004",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "front": "Ardışık sayıların toplamı nasıl bulunur?",
      "back": "1 + 2 + ... + n = n(n + 1)/2\n2 + 4 + ... + 2n = n(n + 1)\n1 + 3 + ... + (2n − 1) = n²\nÖrnek: 1 + 2 + ... + 10 = 55"
    },
    {
      "id": "mat-c-005",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "front": "Terim sayısı formülü nedir?",
      "back": "Terim sayısı = (Son terim − İlk terim) / Artış miktarı + 1\nÖrnek: 5, 8, 11, ..., 50 → (50 − 5)/3 + 1 = 16 terim"
    },
    {
      "id": "mat-c-006",
      "subject": "matematik",
      "topic": "Basamak Analizi",
      "front": "Basamak çözümlemesi nasıl yapılır?",
      "back": "AB = 10A + B, ABC = 100A + 10B + C\nAB + BA = 11(A + B), AB − BA = 9(A − B)\nÖrnek: 74 + 47 = 11 · 11 = 121"
    },
    {
      "id": "mat-c-007",
      "subject": "matematik",
      "topic": "Basamak Analizi",
      "front": "Rakamları farklı en büyük / en küçük üç basamaklı sayılar nelerdir?",
      "back": "En büyük: 987, en küçük: 102.\nRakamları farklı olma şartı yoksa: 999 ve 100."
    },
    {
      "id": "mat-c-008",
      "subject": "matematik",
      "topic": "Bölünebilme",
      "front": "2, 3, 4, 5 ile bölünebilme kuralları nelerdir?",
      "back": "2: son rakam çift.\n3: rakamlar toplamı 3'ün katı.\n4: son iki basamak 4'ün katı (veya 00).\n5: son rakam 0 ya da 5.\nÖrnek: 1236 → rakamlar toplamı 12, 3'e bölünür; 36, 4'e bölünür."
    },
    {
      "id": "mat-c-009",
      "subject": "matematik",
      "topic": "Bölünebilme",
      "front": "6, 8, 9, 10 ile bölünebilme kuralları nelerdir?",
      "back": "6: hem 2 hem 3 ile bölünür.\n8: son üç basamak 8'in katı.\n9: rakamlar toplamı 9'un katı.\n10: son rakam 0.\nÖrnek: 7362 → rakamlar toplamı 18 → 9'a bölünür."
    },
    {
      "id": "mat-c-010",
      "subject": "matematik",
      "topic": "Bölünebilme",
      "front": "11 ile bölünebilme kuralı nedir?",
      "back": "Sağdan başlayarak rakamlar sırasıyla +, −, +, ... işaretleriyle toplanır; sonuç 11'in katı (0 dahil) ise sayı 11'e bölünür.\nÖrnek: 517 → 7 − 1 + 5 = 11 → bölünür."
    },
    {
      "id": "mat-c-011",
      "subject": "matematik",
      "topic": "Bölünebilme",
      "front": "Bölme işleminde temel bağıntı nedir?",
      "back": "Bölünen = Bölen · Bölüm + Kalan, 0 ≤ Kalan < Bölen\nÖrnek: 47 = 6 · 7 + 5"
    },
    {
      "id": "mat-c-012",
      "subject": "matematik",
      "topic": "EBOB-EKOK",
      "front": "EBOB ve EKOK arasındaki bağıntı nedir?",
      "back": "İki doğal sayı için: a · b = EBOB(a, b) · EKOK(a, b)\nÖrnek: 12 ve 18 → EBOB 6, EKOK 36; 6 · 36 = 216 = 12 · 18"
    },
    {
      "id": "mat-c-013",
      "subject": "matematik",
      "topic": "EBOB-EKOK",
      "front": "EBOB hangi problemlerde kullanılır?",
      "back": "Bir bütünü en büyük eş parçalara bölme, en az sayıda eş parça/kutu elde etme, köşelere ağaç dikme gibi \"en büyük ortak ölçü\" problemlerinde.\nÖrnek: 84 m ve 60 m kenarlı bahçe → EBOB 12 m aralık."
    },
    {
      "id": "mat-c-014",
      "subject": "matematik",
      "topic": "EBOB-EKOK",
      "front": "EKOK hangi problemlerde kullanılır?",
      "back": "Olayların yeniden aynı anda gerçekleşmesi, gruplara ayırınca hep aynı kalanın kalması, en küçük kare/küp oluşturma gibi problemlerde.\nÖrnek: 6, 8, 10'a bölünüp hep 3 kalan sayı: 120k + 3"
    },
    {
      "id": "mat-c-015",
      "subject": "matematik",
      "topic": "Rasyonel ve Ondalık Sayılar",
      "front": "Kesirlerde toplama ve bölme nasıl yapılır?",
      "back": "Toplama/çıkarmada paydalar eşitlenir: 1/2 + 1/3 = 3/6 + 2/6 = 5/6\nBölmede ikinci kesir ters çevrilip çarpılır: (5/6) ÷ (5/12) = (5/6) · (12/5) = 2"
    },
    {
      "id": "mat-c-016",
      "subject": "matematik",
      "topic": "Rasyonel ve Ondalık Sayılar",
      "front": "Ondalık sayılarla bölme nasıl kolaylaştırılır?",
      "back": "Bölen ve bölünen 10'un aynı kuvvetiyle çarpılarak virgülden kurtarılır.\nÖrnek: 0,36 ÷ 0,06 = 36 ÷ 6 = 6"
    },
    {
      "id": "mat-c-017",
      "subject": "matematik",
      "topic": "Eşitsizlikler",
      "front": "Eşitsizlikte negatif sayıyla çarpma kuralı nedir?",
      "back": "Eşitsizliğin her iki tarafı negatif bir sayıyla çarpılır ya da bölünürse eşitsizlik yön değiştirir.\nÖrnek: −2x < 6 → x > −3"
    },
    {
      "id": "mat-c-018",
      "subject": "matematik",
      "topic": "Eşitsizlikler",
      "front": "Aralıkların çarpımında en küçük/en büyük değer nasıl bulunur?",
      "back": "Uç değerlerin dört çarpımı (x_min·y_min, x_min·y_max, x_max·y_min, x_max·y_max) hesaplanır; en küçüğü ve en büyüğü seçilir.\nÖrnek: −3 ≤ x ≤ 2, 1 ≤ y ≤ 4 → en küçük x·y = −12"
    },
    {
      "id": "mat-c-019",
      "subject": "matematik",
      "topic": "Mutlak Değer",
      "front": "|x − a| = b ve |x − a| < b nasıl çözülür?",
      "back": "|x − a| = b (b > 0) → x − a = b veya x − a = −b\n|x − a| < b → −b < x − a < b\nÖrnek: |x − 3| = 5 → x = 8 veya x = −2"
    },
    {
      "id": "mat-c-020",
      "subject": "matematik",
      "topic": "Mutlak Değer",
      "front": "Mutlak değerin temel özellikleri nelerdir?",
      "back": "|x| ≥ 0, |−x| = |x|, |x · y| = |x| · |y|\nx ≥ 0 ise |x| = x; x < 0 ise |x| = −x\nÖrnek: x < 0 için |x| = −x"
    },
    {
      "id": "mat-c-021",
      "subject": "matematik",
      "topic": "Üslü Sayılar",
      "front": "Üslü sayılarda çarpma ve bölme kuralları nelerdir?",
      "back": "aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐ·ⁿ\nÖrnek: 2⁵ · 2³ = 2⁸"
    },
    {
      "id": "mat-c-022",
      "subject": "matematik",
      "topic": "Üslü Sayılar",
      "front": "Sıfırıncı kuvvet, negatif kuvvet ve negatif tabanın kuvveti nasıl hesaplanır?",
      "back": "a⁰ = 1 (a ≠ 0), a⁻ⁿ = 1/aⁿ\nNegatif sayının çift kuvveti pozitif, tek kuvveti negatiftir: (−2)³ = −8, (−3)² = 9\nDikkat: −3² = −9"
    },
    {
      "id": "mat-c-023",
      "subject": "matematik",
      "topic": "Üslü Sayılar",
      "front": "Aynı terimlerin toplamı üslü sayıda nasıl yazılır?",
      "back": "aⁿ + aⁿ + ... (a tane) = a · aⁿ = aⁿ⁺¹\nÖrnek: 2¹⁰ + 2¹⁰ = 2 · 2¹⁰ = 2¹¹; 3⁵ + 3⁵ + 3⁵ = 3⁶"
    },
    {
      "id": "mat-c-024",
      "subject": "matematik",
      "topic": "Köklü Sayılar",
      "front": "Köklü sayılarda toplama ve çarpma nasıl yapılır?",
      "back": "Kök içleri aynı olanlar toplanır: a√x + b√x = (a + b)√x\n√a · √b = √(a·b)\nÖrnek: √50 + √18 = 5√2 + 3√2 = 8√2"
    },
    {
      "id": "mat-c-025",
      "subject": "matematik",
      "topic": "Köklü Sayılar",
      "front": "Paydayı kökten kurtarma nasıl yapılır?",
      "back": "Payda eşleniğiyle çarpılır: (√a − √b)(√a + √b) = a − b\nÖrnek: 1/(√3 − √2) = (√3 + √2)/(3 − 2) = √3 + √2"
    },
    {
      "id": "mat-c-026",
      "subject": "matematik",
      "topic": "Çarpanlara Ayırma",
      "front": "Temel özdeşlikler nelerdir?",
      "back": "(a + b)² = a² + 2ab + b²\n(a − b)² = a² − 2ab + b²\na² − b² = (a − b)(a + b)\nÖrnek: 101² − 99² = 2 · 200 = 400"
    },
    {
      "id": "mat-c-027",
      "subject": "matematik",
      "topic": "Çarpanlara Ayırma",
      "front": "a + b ve a·b biliniyorsa a² + b² nasıl bulunur?",
      "back": "a² + b² = (a + b)² − 2ab\nÖrnek: a + b = 7, ab = 10 → 49 − 20 = 29\nBenzer şekilde x + 1/x = k → x² + 1/x² = k² − 2"
    },
    {
      "id": "mat-c-028",
      "subject": "matematik",
      "topic": "Çarpanlara Ayırma",
      "front": "Küplerin toplamı ve farkı özdeşlikleri nelerdir?",
      "back": "a³ + b³ = (a + b)(a² − ab + b²)\na³ − b³ = (a − b)(a² + ab + b²)\nÖrnek: x³ − 8 = (x − 2)(x² + 2x + 4)"
    },
    {
      "id": "mat-c-029",
      "subject": "matematik",
      "topic": "Oran-Orantı",
      "front": "Doğru ve ters orantı nedir?",
      "back": "Doğru orantı: biri artarken diğeri aynı oranda artar; y/x = k (sabit).\nTers orantı: biri artarken diğeri aynı oranda azalır; x · y = k.\nÖrnek: 6 işçi 10 günde → 15 işçi 60/15 = 4 günde"
    },
    {
      "id": "mat-c-030",
      "subject": "matematik",
      "topic": "Oran-Orantı",
      "front": "a/x = b/y = c/z = k biçimindeki orantıda ne yapılır?",
      "back": "Her terim k cinsinden yazılır: a = kx, b = ky, c = kz.\nÖrnek: a/3 = b/5 = c/7, a + b + c = 60 → 15k = 60 → k = 4, b = 20"
    },
    {
      "id": "mat-c-031",
      "subject": "matematik",
      "topic": "Denklemler",
      "front": "Birinci dereceden denklem nasıl çözülür?",
      "back": "Bilinmeyenler bir tarafa, sayılar diğer tarafa toplanır; iki taraf aynı işleme tabi tutulur.\nÖrnek: 3(x − 2) + 4 = 2x + 5 → 3x − 2 = 2x + 5 → x = 7"
    },
    {
      "id": "mat-c-032",
      "subject": "matematik",
      "topic": "Denklemler",
      "front": "İki bilinmeyenli denklem sistemi nasıl çözülür?",
      "back": "Yok etme: denklemler taraf tarafa toplanarak bir bilinmeyen yok edilir.\nYerine koyma: bir bilinmeyen çekilip diğer denklemde yerine yazılır.\nÖrnek: 2x + y = 11, x − y = 1 → 3x = 12 → x = 4, y = 3"
    },
    {
      "id": "mat-c-033",
      "subject": "matematik",
      "topic": "Denklemler",
      "front": "ax² + bx + c = 0 denkleminde kökler toplamı ve çarpımı nedir?",
      "back": "x₁ + x₂ = −b/a, x₁ · x₂ = c/a\nÖrnek: x² − 5x + 6 = 0 → toplam 5, çarpım 6 (kökler 2 ve 3)"
    },
    {
      "id": "mat-c-034",
      "subject": "matematik",
      "topic": "Sayı ve Kesir Problemleri",
      "front": "Kesir problemlerinde \"kalanın\" ifadesi nasıl işlenir?",
      "back": "Her adımda kalan kısım bulunur ve sonraki kesir bu kalana uygulanır.\nÖrnek: Önce 1/3'ü, sonra kalanın 1/4'ü harcanırsa kalan: x · (2/3) · (3/4) = x/2"
    },
    {
      "id": "mat-c-035",
      "subject": "matematik",
      "topic": "Sayı ve Kesir Problemleri",
      "front": "Ardışık sayı problemlerinde kısa yol nedir?",
      "back": "Ardışık sayıların toplamı = terim sayısı · ortadaki terim.\nÖrnek: Ardışık üç çift sayının toplamı 78 → ortadaki 26 → sayılar 24, 26, 28"
    },
    {
      "id": "mat-c-036",
      "subject": "matematik",
      "topic": "Yaş Problemleri",
      "front": "Yaş problemlerinin temel kuralları nelerdir?",
      "back": "İki kişi arasındaki yaş farkı hiçbir zaman değişmez.\nn yıl sonra her kişinin yaşı n artar; k kişinin yaşları toplamı k·n artar.\nÖrnek: Baba ile iki çocuğunun yaş toplamı farkı her yıl 1 azalır."
    },
    {
      "id": "mat-c-037",
      "subject": "matematik",
      "topic": "İşçi-Havuz Problemleri",
      "front": "İşçi problemlerinin temel formülü nedir?",
      "back": "Bir işi a günde bitiren işçi 1 günde işin 1/a'sını yapar.\nBirlikte: 1/a + 1/b = 1/t\nÖrnek: 12 ve 6 gün → 1/12 + 1/6 = 1/4 → 4 gün"
    },
    {
      "id": "mat-c-038",
      "subject": "matematik",
      "topic": "İşçi-Havuz Problemleri",
      "front": "Havuz problemlerinde boşaltan musluk nasıl hesaba katılır?",
      "back": "Dolduran musluklar +, boşaltan musluklar − alınır.\nÖrnek: 6 saatte dolduran, 9 saatte boşaltan → 1/6 − 1/9 = 1/18 → 18 saatte dolar."
    },
    {
      "id": "mat-c-039",
      "subject": "matematik",
      "topic": "Hız Problemleri",
      "front": "Hız problemlerinin temel formülü nedir?",
      "back": "Yol = Hız · Zaman (x = V · t)\nKarşılaşma: t = x / (V₁ + V₂)\nYetişme (aynı yön): t = x / (V₁ − V₂)\nÖrnek: 360 km, 50 ve 70 km/sa → 360/120 = 3 saat"
    },
    {
      "id": "mat-c-040",
      "subject": "matematik",
      "topic": "Hız Problemleri",
      "front": "Gidiş-dönüşte ortalama hız nasıl bulunur?",
      "back": "Ortalama hız = Toplam yol / Toplam zaman. Eşit yollar için: 2·V₁·V₂ / (V₁ + V₂)\nÖrnek: 60 ve 40 km/sa → 2·60·40/100 = 48 km/sa (50 değil!)"
    },
    {
      "id": "mat-c-041",
      "subject": "matematik",
      "topic": "Yüzde-Kâr-Zarar",
      "front": "Yüzde, kâr ve zarar formülleri nelerdir?",
      "back": "a'nın %b'si = a · b/100\n%k kârla satış = Maliyet · (100 + k)/100\n%k zararla satış = Maliyet · (100 − k)/100\nÖrnek: 250 TL'ye %40 kâr → 350 TL"
    },
    {
      "id": "mat-c-042",
      "subject": "matematik",
      "topic": "Yüzde-Kâr-Zarar",
      "front": "Ardışık zam ve indirim nasıl hesaplanır?",
      "back": "Çarpanlar çarpılır: %20 zam → 1,2; %20 indirim → 0,8.\n1,2 · 0,8 = 0,96 → fiyat %4 azalır. (Zam ve indirim birbirini götürmez!)"
    },
    {
      "id": "mat-c-043",
      "subject": "matematik",
      "topic": "Karışım Problemleri",
      "front": "Karışım problemlerinin temel formülü nedir?",
      "back": "Saf madde miktarı = Karışım miktarı · Oran\nKarışım oranı = Toplam saf madde / Toplam karışım\nÖrnek: %10'luk 30 L + %40'lık 20 L → (3 + 8)/50 = %22"
    },
    {
      "id": "mat-c-044",
      "subject": "matematik",
      "topic": "Kümeler",
      "front": "Alt küme sayıları nasıl bulunur?",
      "back": "n elemanlı kümenin alt küme sayısı 2ⁿ, öz alt küme sayısı 2ⁿ − 1'dir.\nr elemanlı alt küme sayısı C(n, r)'dir.\nÖrnek: 4 elemanlı küme → 16 alt küme, 15 öz alt küme"
    },
    {
      "id": "mat-c-045",
      "subject": "matematik",
      "topic": "Kümeler",
      "front": "Birleşim kümesinin eleman sayısı nasıl bulunur?",
      "back": "s(A ∪ B) = s(A) + s(B) − s(A ∩ B)\nÖrnek: 25 İngilizce, 18 Almanca, 7 ikisi → 25 + 18 − 7 = 36 kişi en az birini bilir."
    },
    {
      "id": "mat-c-046",
      "subject": "matematik",
      "topic": "Fonksiyonlar",
      "front": "f(ax + b) verildiğinde f(k) nasıl bulunur?",
      "back": "ax + b = k olacak şekilde x bulunur ve ifadede yerine yazılır.\nÖrnek: f(2x + 1) = 4x + 5 → 2x + 1 = 7 → x = 3 → f(7) = 17"
    },
    {
      "id": "mat-c-047",
      "subject": "matematik",
      "topic": "Fonksiyonlar",
      "front": "Bileşke ve ters fonksiyon nasıl hesaplanır?",
      "back": "(f∘g)(x) = f(g(x)): önce g, sonra f uygulanır.\nf⁻¹(a) = b ⇔ f(b) = a\nÖrnek: f(x) = 2x + 3, g(x) = x² → (f∘g)(2) = f(4) = 11"
    },
    {
      "id": "mat-c-048",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "front": "Permütasyon ve kombinasyon formülleri nelerdir?",
      "back": "n farklı nesnenin sıralanışı: n!\nP(n, r) = n!/(n − r)! (sıra önemli)\nC(n, r) = n!/(r!·(n − r)!) (sıra önemsiz, seçim)\nÖrnek: C(7, 3) = 35"
    },
    {
      "id": "mat-c-049",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "front": "Tekrarlı permütasyon nedir?",
      "back": "n nesneden a tanesi, b tanesi aynıysa sıralanış: n!/(a!·b!)\nÖrnek: ADANA → 5!/3! = 20"
    },
    {
      "id": "mat-c-050",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "front": "Olasılık nasıl hesaplanır?",
      "back": "P(A) = İstenen durum sayısı / Tüm durumların sayısı, 0 ≤ P(A) ≤ 1\n\"En az bir\" sorularında: 1 − P(hiçbiri)\nÖrnek: İki para atılınca en az bir yazı: 1 − 1/4 = 3/4"
    },
    {
      "id": "mat-c-051",
      "subject": "matematik",
      "topic": "Geometri",
      "front": "Tümler ve bütünler açı nedir?",
      "back": "Toplamı 90° olan açılar tümler, 180° olan açılar bütünlerdir.\nx açısının tümleri 90° − x, bütünleri 180° − x\nÖrnek: 30°'nin tümleri 60°, bütünleri 150°"
    },
    {
      "id": "mat-c-052",
      "subject": "matematik",
      "topic": "Geometri",
      "front": "Üçgende açı özellikleri nelerdir?",
      "back": "İç açılar toplamı 180°, dış açılar toplamı 360°.\nBir dış açı, kendisine komşu olmayan iki iç açının toplamına eşittir.\nİkizkenar üçgende taban açıları eşittir."
    },
    {
      "id": "mat-c-053",
      "subject": "matematik",
      "topic": "Geometri",
      "front": "Çokgenlerde iç açılar toplamı nedir?",
      "back": "n kenarlı çokgende iç açılar toplamı (n − 2) · 180°\nDüzgün çokgende bir iç açı (n − 2) · 180° / n\nÖrnek: düzgün altıgen → 720°/6 = 120°"
    },
    {
      "id": "mat-c-054",
      "subject": "matematik",
      "topic": "Geometri",
      "front": "Pisagor bağıntısı ve özel dik üçgenler nelerdir?",
      "back": "Dik üçgende a² + b² = c² (c hipotenüs)\nÖzel üçlüler: 3-4-5, 6-8-10, 5-12-13, 8-15-17"
    },
    {
      "id": "mat-c-055",
      "subject": "matematik",
      "topic": "Geometri",
      "front": "Temel alan formülleri nelerdir?",
      "back": "Üçgen: (taban · yükseklik)/2\nDikdörtgen: a · b, Kare: a²\nYamuk: ((a + c)/2) · h\nParalelkenar: taban · yükseklik"
    },
    {
      "id": "mat-c-056",
      "subject": "matematik",
      "topic": "Geometri",
      "front": "Daire ve çember formülleri nelerdir?",
      "back": "Çemberin çevresi: 2πr\nDairenin alanı: πr²\nÖrnek: r = 5, π = 3 → alan 75, çevre 30"
    },
    {
      "id": "mat-c-057",
      "subject": "matematik",
      "topic": "Geometri",
      "front": "Dikdörtgenler prizması ve küpün hacim ve alan formülleri nelerdir?",
      "back": "Dikdörtgenler prizması: V = a · b · c, Yüzey alanı = 2(ab + ac + bc)\nKüp: V = a³, Yüzey alanı = 6a²\nÖrnek: 3, 4, 5 → V = 60"
    }
  ],
  questions: [
    {
      "id": "mat-q-001",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "text": "a ve b ardışık tek sayılardır. a + b = 48 olduğuna göre a · b kaçtır?",
      "options": [
        "575",
        "551",
        "563",
        "599",
        "624"
      ],
      "answer": 0,
      "explanation": "Ardışık tek sayılar x ve x + 2: 2x + 2 = 48 → x = 23. Sayılar 23 ve 25; 23 · 25 = 575."
    },
    {
      "id": "mat-q-002",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "text": "30 ile 50 arasındaki asal sayıların toplamı kaçtır?",
      "options": [
        "152",
        "168",
        "210",
        "240",
        "199"
      ],
      "answer": 4,
      "explanation": "30 ile 50 arasındaki asallar: 31, 37, 41, 43, 47. Toplamı 199."
    },
    {
      "id": "mat-q-003",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "text": "x tek, y çift tam sayılar olduğuna göre aşağıdakilerden hangisi kesinlikle tek sayıdır?",
      "options": [
        "x · y",
        "x + x",
        "y² + 2",
        "x² + y",
        "(x + 1) · y"
      ],
      "answer": 3,
      "explanation": "x² tek, y çift → tek + çift = tek. x·y, x + x, y² + 2 ve (x + 1)·y her zaman çifttir."
    },
    {
      "id": "mat-q-004",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "text": "5, 8, 11, ..., 62 sayı dizisinde kaç terim vardır?",
      "options": [
        "18",
        "20",
        "19",
        "21",
        "22"
      ],
      "answer": 1,
      "explanation": "Terim sayısı = (62 − 5)/3 + 1 = 19 + 1 = 20."
    },
    {
      "id": "mat-q-005",
      "subject": "matematik",
      "topic": "Temel Kavramlar",
      "text": "1 + 2 + 3 + ... + 20 toplamı kaçtır?",
      "options": [
        "190",
        "200",
        "210",
        "220",
        "400"
      ],
      "answer": 2,
      "explanation": "n(n + 1)/2 = 20 · 21/2 = 210."
    },
    {
      "id": "mat-q-006",
      "subject": "matematik",
      "topic": "Basamak Analizi",
      "text": "İki basamaklı AB ve BA sayılarının toplamı 121'dir. A − B = 3 olduğuna göre AB sayısı kaçtır?",
      "options": [
        "74",
        "47",
        "65",
        "83",
        "92"
      ],
      "answer": 0,
      "explanation": "AB + BA = 11(A + B) = 121 → A + B = 11. A − B = 3 ile A = 7, B = 4 → AB = 74."
    },
    {
      "id": "mat-q-007",
      "subject": "matematik",
      "topic": "Basamak Analizi",
      "text": "Üç basamaklı en büyük çift doğal sayı ile iki basamaklı en küçük tek doğal sayının farkı kaçtır?",
      "options": [
        "886",
        "987",
        "988",
        "989",
        "997"
      ],
      "answer": 1,
      "explanation": "998 − 11 = 987."
    },
    {
      "id": "mat-q-008",
      "subject": "matematik",
      "topic": "Basamak Analizi",
      "text": "Rakamları birbirinden farklı üç basamaklı en büyük sayı ile rakamları birbirinden farklı üç basamaklı en küçük sayının toplamı kaçtır?",
      "options": [
        "1086",
        "1087",
        "1098",
        "1099",
        "1089"
      ],
      "answer": 4,
      "explanation": "En büyük: 987, en küçük: 102. Toplam: 987 + 102 = 1089."
    },
    {
      "id": "mat-q-009",
      "subject": "matematik",
      "topic": "Basamak Analizi",
      "text": "İki basamaklı bir AB sayısının rakamları yer değiştirdiğinde sayı 27 azalmaktadır. A + B = 11 olduğuna göre AB kaçtır?",
      "options": [
        "38",
        "47",
        "74",
        "56",
        "65"
      ],
      "answer": 2,
      "explanation": "AB − BA = 9(A − B) = 27 → A − B = 3. A + B = 11 ile A = 7, B = 4 → AB = 74."
    },
    {
      "id": "mat-q-010",
      "subject": "matematik",
      "topic": "Bölünebilme",
      "text": "Dört basamaklı 3a5b sayısı hem 5 hem 9 ile kalansız bölünebilmektedir. Buna göre a'nın alabileceği değerlerin toplamı kaçtır?",
      "options": [
        "5",
        "7",
        "9",
        "6",
        "10"
      ],
      "answer": 3,
      "explanation": "5'e bölünme: b = 0 veya 5. 9'a bölünme: 3 + a + 5 + b, 9'un katı. b = 0 → a = 1; b = 5 → a = 5. Toplam 1 + 5 = 6."
    },
    {
      "id": "mat-q-011",
      "subject": "matematik",
      "topic": "Bölünebilme",
      "text": "Dört basamaklı 4a2b sayısı 6 ile kalansız bölünebildiğine göre a + b toplamının alabileceği en büyük değer kaçtır?",
      "options": [
        "12",
        "15",
        "13",
        "14",
        "18"
      ],
      "answer": 1,
      "explanation": "6'ya bölünme için b çift ve 4 + a + 2 + b, 3'ün katı olmalı → a + b, 3'ün katı. a = 9 alınırsa b ∈ {0, 6} → en büyük a + b = 15. (a + b = 18 için b = 9 olmalı, tek.)"
    },
    {
      "id": "mat-q-012",
      "subject": "matematik",
      "topic": "Bölünebilme",
      "text": "Bir doğal sayının 6 ile bölümünden kalan 4'tür. Bu sayının 3 katının 6 ile bölümünden kalan kaçtır?",
      "options": [
        "1",
        "2",
        "0",
        "3",
        "4"
      ],
      "answer": 2,
      "explanation": "Sayı 6k + 4 olsun. 3 katı 18k + 12 = 6(3k + 2) → kalan 0."
    },
    {
      "id": "mat-q-013",
      "subject": "matematik",
      "topic": "Bölünebilme",
      "text": "Üç basamaklı 5a7 sayısı 11 ile kalansız bölünebildiğine göre a kaçtır?",
      "options": [
        "2",
        "3",
        "5",
        "9",
        "1"
      ],
      "answer": 4,
      "explanation": "11 kuralı: 7 − a + 5 = 12 − a, 11'in katı olmalı → a = 1. Kontrol: 517 = 11 · 47."
    },
    {
      "id": "mat-q-014",
      "subject": "matematik",
      "topic": "EBOB-EKOK",
      "text": "72 ve 120 sayılarının EBOB'u ile EKOK'unun toplamı kaçtır?",
      "options": [
        "264",
        "396",
        "408",
        "384",
        "744"
      ],
      "answer": 3,
      "explanation": "72 = 2³·3², 120 = 2³·3·5. EBOB = 2³·3 = 24, EKOK = 2³·3²·5 = 360. Toplam 384."
    },
    {
      "id": "mat-q-015",
      "subject": "matematik",
      "topic": "EBOB-EKOK",
      "text": "Bir sepetteki elmalar 6'şar, 8'er ve 10'ar sayıldığında her seferinde 3 elma artmaktadır. Sepette 200'den az elma olduğuna göre en çok kaç elma vardır?",
      "options": [
        "123",
        "117",
        "163",
        "183",
        "197"
      ],
      "answer": 0,
      "explanation": "EKOK(6, 8, 10) = 120. Sayı 120k + 3 biçimindedir; 200'den küçük en büyük değer 123."
    },
    {
      "id": "mat-q-016",
      "subject": "matematik",
      "topic": "EBOB-EKOK",
      "text": "Kenar uzunlukları 84 m ve 60 m olan dikdörtgen biçimindeki bir bahçenin çevresine, köşelere de birer ağaç gelmek şartıyla eşit aralıklarla ağaç dikilecektir. En az kaç ağaç gerekir?",
      "options": [
        "12",
        "18",
        "24",
        "26",
        "48"
      ],
      "answer": 2,
      "explanation": "Aralık EBOB(84, 60) = 12 m olmalı. Çevre 288 m; kapalı çevrede ağaç sayısı = 288/12 = 24."
    },
    {
      "id": "mat-q-017",
      "subject": "matematik",
      "topic": "EBOB-EKOK",
      "text": "Boyutları 12 cm, 18 cm ve 30 cm olan dikdörtgenler prizması biçimindeki bir kutu, hiç boşluk kalmayacak şekilde eş küplerle doldurulacaktır. En az kaç küp gerekir?",
      "options": [
        "24",
        "36",
        "60",
        "30",
        "90"
      ],
      "answer": 3,
      "explanation": "Küpün kenarı EBOB(12, 18, 30) = 6 cm. Küp sayısı = 2 · 3 · 5 = 30."
    },
    {
      "id": "mat-q-018",
      "subject": "matematik",
      "topic": "Rasyonel ve Ondalık Sayılar",
      "text": "(1/2 + 1/3) ÷ (1/4 + 1/6) işleminin sonucu kaçtır?",
      "options": [
        "1/2",
        "2",
        "5/6",
        "1",
        "5/2"
      ],
      "answer": 1,
      "explanation": "1/2 + 1/3 = 5/6, 1/4 + 1/6 = 5/12. (5/6) ÷ (5/12) = (5/6)·(12/5) = 2."
    },
    {
      "id": "mat-q-019",
      "subject": "matematik",
      "topic": "Rasyonel ve Ondalık Sayılar",
      "text": "0,36 ÷ 0,06 + 1,2 ÷ 0,4 işleminin sonucu kaçtır?",
      "options": [
        "9",
        "0,9",
        "3",
        "6",
        "90"
      ],
      "answer": 0,
      "explanation": "0,36 ÷ 0,06 = 36 ÷ 6 = 6; 1,2 ÷ 0,4 = 12 ÷ 4 = 3. Toplam 9."
    },
    {
      "id": "mat-q-020",
      "subject": "matematik",
      "topic": "Rasyonel ve Ondalık Sayılar",
      "text": "1 − 1/(1 − 1/3) işleminin sonucu kaçtır?",
      "options": [
        "−3/2",
        "1/2",
        "2/3",
        "3/2",
        "−1/2"
      ],
      "answer": 4,
      "explanation": "1 − 1/3 = 2/3; 1 ÷ (2/3) = 3/2; 1 − 3/2 = −1/2."
    },
    {
      "id": "mat-q-021",
      "subject": "matematik",
      "topic": "Rasyonel ve Ondalık Sayılar",
      "text": "2/3 + 3/4 − 5/6 işleminin sonucu kaçtır?",
      "options": [
        "1/2",
        "2/3",
        "3/4",
        "5/6",
        "7/12"
      ],
      "answer": 4,
      "explanation": "Payda 12: 8/12 + 9/12 − 10/12 = 7/12."
    },
    {
      "id": "mat-q-022",
      "subject": "matematik",
      "topic": "Eşitsizlikler",
      "text": "−2 < x < 5 koşulunu sağlayan x tam sayılarının toplamı kaçtır?",
      "options": [
        "7",
        "9",
        "10",
        "12",
        "14"
      ],
      "answer": 1,
      "explanation": "x ∈ {−1, 0, 1, 2, 3, 4}; toplam 9."
    },
    {
      "id": "mat-q-023",
      "subject": "matematik",
      "topic": "Eşitsizlikler",
      "text": "2x − 3 < 7 eşitsizliğini sağlayan kaç farklı pozitif tam sayı vardır?",
      "options": [
        "3",
        "5",
        "6",
        "4",
        "7"
      ],
      "answer": 3,
      "explanation": "2x < 10 → x < 5. Pozitif tam sayılar: 1, 2, 3, 4 → 4 tane."
    },
    {
      "id": "mat-q-024",
      "subject": "matematik",
      "topic": "Eşitsizlikler",
      "text": "−3 ≤ x ≤ 2 ve 1 ≤ y ≤ 4 olduğuna göre x · y çarpımının alabileceği en küçük değer kaçtır?",
      "options": [
        "−8",
        "−3",
        "−12",
        "2",
        "8"
      ],
      "answer": 2,
      "explanation": "Uç değerlerin çarpımları: −3·1 = −3, −3·4 = −12, 2·1 = 2, 2·4 = 8. En küçük −12."
    },
    {
      "id": "mat-q-025",
      "subject": "matematik",
      "topic": "Eşitsizlikler",
      "text": "3 − 2x ≥ −5 eşitsizliğini sağlayan en büyük tam sayı kaçtır?",
      "options": [
        "4",
        "−4",
        "2",
        "3",
        "5"
      ],
      "answer": 0,
      "explanation": "−2x ≥ −8 → negatifle bölünce yön değişir: x ≤ 4. En büyük tam sayı 4."
    },
    {
      "id": "mat-q-026",
      "subject": "matematik",
      "topic": "Mutlak Değer",
      "text": "|x − 3| = 5 denklemini sağlayan x değerlerinin toplamı kaçtır?",
      "options": [
        "−2",
        "3",
        "6",
        "8",
        "10"
      ],
      "answer": 2,
      "explanation": "x − 3 = 5 → x = 8; x − 3 = −5 → x = −2. Toplam 6."
    },
    {
      "id": "mat-q-027",
      "subject": "matematik",
      "topic": "Mutlak Değer",
      "text": "|2x − 1| < 5 eşitsizliğini sağlayan kaç farklı x tam sayısı vardır?",
      "options": [
        "3",
        "5",
        "6",
        "9",
        "4"
      ],
      "answer": 4,
      "explanation": "−5 < 2x − 1 < 5 → −4 < 2x < 6 → −2 < x < 3. Tam sayılar: −1, 0, 1, 2 → 4 tane."
    },
    {
      "id": "mat-q-028",
      "subject": "matematik",
      "topic": "Mutlak Değer",
      "text": "x < 0 < y olduğuna göre |x| + |y| − |x − y| ifadesinin eşiti aşağıdakilerden hangisidir?",
      "options": [
        "2x",
        "0",
        "2y",
        "−2x",
        "x + y"
      ],
      "answer": 1,
      "explanation": "x < 0 → |x| = −x; y > 0 → |y| = y; x − y < 0 → |x − y| = y − x. İfade: −x + y − (y − x) = 0."
    },
    {
      "id": "mat-q-029",
      "subject": "matematik",
      "topic": "Üslü Sayılar",
      "text": "2⁵ · 4³ ÷ 8⁴ işleminin sonucu kaçtır?",
      "options": [
        "1/2",
        "1/4",
        "1",
        "2",
        "4"
      ],
      "answer": 0,
      "explanation": "2⁵ · 2⁶ ÷ 2¹² = 2¹¹⁻¹² = 2⁻¹ = 1/2."
    },
    {
      "id": "mat-q-030",
      "subject": "matematik",
      "topic": "Üslü Sayılar",
      "text": "3ˣ⁺¹ = 81 olduğuna göre 2ˣ kaçtır?",
      "options": [
        "4",
        "6",
        "16",
        "8",
        "32"
      ],
      "answer": 3,
      "explanation": "81 = 3⁴ → x + 1 = 4 → x = 3. 2³ = 8."
    },
    {
      "id": "mat-q-031",
      "subject": "matematik",
      "topic": "Üslü Sayılar",
      "text": "(−2)³ + (−3)² − 2⁰ işleminin sonucu kaçtır?",
      "options": [
        "−18",
        "−2",
        "0",
        "2",
        "16"
      ],
      "answer": 2,
      "explanation": "(−2)³ = −8, (−3)² = 9, 2⁰ = 1. −8 + 9 − 1 = 0."
    },
    {
      "id": "mat-q-032",
      "subject": "matematik",
      "topic": "Üslü Sayılar",
      "text": "5ˣ = 4 olduğuna göre 25ˣ⁺¹ kaçtır?",
      "options": [
        "100",
        "200",
        "625",
        "800",
        "400"
      ],
      "answer": 4,
      "explanation": "25ˣ⁺¹ = 25ˣ · 25 = (5ˣ)² · 25 = 16 · 25 = 400."
    },
    {
      "id": "mat-q-033",
      "subject": "matematik",
      "topic": "Üslü Sayılar",
      "text": "2¹⁰ + 2¹⁰ toplamı 2'nin kaçıncı kuvvetine eşittir?",
      "options": [
        "11",
        "10",
        "12",
        "20",
        "100"
      ],
      "answer": 0,
      "explanation": "2¹⁰ + 2¹⁰ = 2 · 2¹⁰ = 2¹¹."
    },
    {
      "id": "mat-q-034",
      "subject": "matematik",
      "topic": "Köklü Sayılar",
      "text": "√50 + √18 − √8 işleminin sonucu kaçtır?",
      "options": [
        "4√2",
        "5√2",
        "8√2",
        "6√2",
        "10√2"
      ],
      "answer": 3,
      "explanation": "√50 = 5√2, √18 = 3√2, √8 = 2√2. 5√2 + 3√2 − 2√2 = 6√2."
    },
    {
      "id": "mat-q-035",
      "subject": "matematik",
      "topic": "Köklü Sayılar",
      "text": "√0,09 + √0,16 işleminin sonucu kaçtır?",
      "options": [
        "0,07",
        "0,7",
        "0,25",
        "0,5",
        "5"
      ],
      "answer": 1,
      "explanation": "√0,09 = 0,3 ve √0,16 = 0,4. Toplam 0,7."
    },
    {
      "id": "mat-q-036",
      "subject": "matematik",
      "topic": "Köklü Sayılar",
      "text": "(√5 − √3) · (√5 + √3) işleminin sonucu kaçtır?",
      "options": [
        "4",
        "8",
        "√2",
        "2",
        "2√15"
      ],
      "answer": 3,
      "explanation": "(a − b)(a + b) = a² − b² → 5 − 3 = 2."
    },
    {
      "id": "mat-q-037",
      "subject": "matematik",
      "topic": "Köklü Sayılar",
      "text": "1/(√3 − √2) ifadesinin eşiti aşağıdakilerden hangisidir?",
      "options": [
        "√3 − √2",
        "√3 + √2",
        "1",
        "√6",
        "2√3"
      ],
      "answer": 1,
      "explanation": "Pay ve payda eşlenik (√3 + √2) ile çarpılır: (√3 + √2)/(3 − 2) = √3 + √2."
    },
    {
      "id": "mat-q-038",
      "subject": "matematik",
      "topic": "Köklü Sayılar",
      "text": "√12 · √3 işleminin sonucu kaçtır?",
      "options": [
        "3",
        "4",
        "6",
        "9",
        "√15"
      ],
      "answer": 2,
      "explanation": "√12 · √3 = √36 = 6."
    },
    {
      "id": "mat-q-039",
      "subject": "matematik",
      "topic": "Çarpanlara Ayırma",
      "text": "a + b = 7 ve a · b = 10 olduğuna göre a² + b² kaçtır?",
      "options": [
        "20",
        "39",
        "49",
        "59",
        "29"
      ],
      "answer": 4,
      "explanation": "a² + b² = (a + b)² − 2ab = 49 − 20 = 29. (a = 5, b = 2: 25 + 4 = 29.)"
    },
    {
      "id": "mat-q-040",
      "subject": "matematik",
      "topic": "Çarpanlara Ayırma",
      "text": "x − y = 3 ve x² − y² = 27 olduğuna göre x kaçtır?",
      "options": [
        "6",
        "3",
        "5",
        "9",
        "12"
      ],
      "answer": 0,
      "explanation": "x² − y² = (x − y)(x + y) → 27 = 3(x + y) → x + y = 9. x − y = 3 ile 2x = 12 → x = 6."
    },
    {
      "id": "mat-q-041",
      "subject": "matematik",
      "topic": "Çarpanlara Ayırma",
      "text": "(x² − 9)/(x² + 3x) ifadesinin sadeleşmiş biçimi aşağıdakilerden hangisidir?",
      "options": [
        "(x − 3)/x",
        "(x + 3)/x",
        "x − 3",
        "x/(x − 3)",
        "(x − 3)/3"
      ],
      "answer": 0,
      "explanation": "x² − 9 = (x − 3)(x + 3), x² + 3x = x(x + 3). (x + 3) sadeleşir → (x − 3)/x."
    },
    {
      "id": "mat-q-042",
      "subject": "matematik",
      "topic": "Çarpanlara Ayırma",
      "text": "101² − 99² işleminin sonucu kaçtır?",
      "options": [
        "2",
        "400",
        "200",
        "404",
        "4000"
      ],
      "answer": 1,
      "explanation": "a² − b² = (a − b)(a + b) = 2 · 200 = 400."
    },
    {
      "id": "mat-q-043",
      "subject": "matematik",
      "topic": "Çarpanlara Ayırma",
      "text": "x + 1/x = 4 olduğuna göre x² + 1/x² kaçtır?",
      "options": [
        "8",
        "12",
        "14",
        "16",
        "18"
      ],
      "answer": 2,
      "explanation": "(x + 1/x)² = x² + 2 + 1/x² → 16 = x² + 1/x² + 2 → x² + 1/x² = 14."
    },
    {
      "id": "mat-q-044",
      "subject": "matematik",
      "topic": "Oran-Orantı",
      "text": "a/3 = b/5 = c/7 ve a + b + c = 60 olduğuna göre b kaçtır?",
      "options": [
        "12",
        "15",
        "25",
        "20",
        "28"
      ],
      "answer": 3,
      "explanation": "a = 3k, b = 5k, c = 7k → 15k = 60 → k = 4 → b = 20."
    },
    {
      "id": "mat-q-045",
      "subject": "matematik",
      "topic": "Oran-Orantı",
      "text": "x ile y doğru orantılıdır. x = 6 iken y = 15 olduğuna göre x = 10 iken y kaçtır?",
      "options": [
        "19",
        "20",
        "24",
        "30",
        "25"
      ],
      "answer": 4,
      "explanation": "y/x sabittir: 15/6 = y/10 → y = 25."
    },
    {
      "id": "mat-q-046",
      "subject": "matematik",
      "topic": "Oran-Orantı",
      "text": "Aynı güçte çalışan 6 işçi bir işi 10 günde bitirmektedir. Aynı güçte 15 işçi bu işi kaç günde bitirir?",
      "options": [
        "3",
        "5",
        "4",
        "6",
        "25"
      ],
      "answer": 2,
      "explanation": "İşçi sayısı ile gün sayısı ters orantılıdır: 6 · 10 = 15 · t → t = 4."
    },
    {
      "id": "mat-q-047",
      "subject": "matematik",
      "topic": "Oran-Orantı",
      "text": "Bir haritada 3 cm'lik uzunluk gerçekte 12 km'ye karşılık gelmektedir. Bu haritada 5 cm olarak gösterilen yol gerçekte kaç km'dir?",
      "options": [
        "15",
        "18",
        "24",
        "20",
        "36"
      ],
      "answer": 3,
      "explanation": "1 cm → 4 km. 5 cm → 20 km."
    },
    {
      "id": "mat-q-048",
      "subject": "matematik",
      "topic": "Denklemler",
      "text": "3(x − 2) + 4 = 2x + 5 denklemini sağlayan x değeri kaçtır?",
      "options": [
        "3",
        "5",
        "9",
        "11",
        "7"
      ],
      "answer": 4,
      "explanation": "3x − 6 + 4 = 2x + 5 → 3x − 2 = 2x + 5 → x = 7."
    },
    {
      "id": "mat-q-049",
      "subject": "matematik",
      "topic": "Denklemler",
      "text": "x/2 + x/3 = 10 olduğuna göre x kaçtır?",
      "options": [
        "6",
        "12",
        "10",
        "15",
        "20"
      ],
      "answer": 1,
      "explanation": "Payda 6: (3x + 2x)/6 = 10 → 5x = 60 → x = 12."
    },
    {
      "id": "mat-q-050",
      "subject": "matematik",
      "topic": "Denklemler",
      "text": "2x + y = 11 ve x − y = 1 olduğuna göre x · y kaçtır?",
      "options": [
        "12",
        "10",
        "15",
        "18",
        "20"
      ],
      "answer": 0,
      "explanation": "Taraf tarafa toplanırsa 3x = 12 → x = 4, y = 3. x · y = 12."
    },
    {
      "id": "mat-q-051",
      "subject": "matematik",
      "topic": "Denklemler",
      "text": "x² − 5x + 6 = 0 denkleminin köklerinin kareleri toplamı kaçtır?",
      "options": [
        "5",
        "6",
        "11",
        "13",
        "25"
      ],
      "answer": 3,
      "explanation": "x² − 5x + 6 = (x − 2)(x − 3) → kökler 2 ve 3. 4 + 9 = 13."
    },
    {
      "id": "mat-q-052",
      "subject": "matematik",
      "topic": "Sayı ve Kesir Problemleri",
      "text": "Bir sayının 3 katının 5 fazlası, aynı sayının 2 katının 12 fazlasına eşittir. Bu sayı kaçtır?",
      "options": [
        "7",
        "5",
        "6",
        "8",
        "17"
      ],
      "answer": 0,
      "explanation": "3x + 5 = 2x + 12 → x = 7."
    },
    {
      "id": "mat-q-053",
      "subject": "matematik",
      "topic": "Sayı ve Kesir Problemleri",
      "text": "Bir kitabın önce 1/3'ü, sonra kalan kısmının 1/4'ü okunuyor. Geriye 90 sayfa kaldığına göre kitap kaç sayfadır?",
      "options": [
        "120",
        "150",
        "180",
        "240",
        "270"
      ],
      "answer": 2,
      "explanation": "Kalan = x · (2/3) · (3/4) = x/2 = 90 → x = 180."
    },
    {
      "id": "mat-q-054",
      "subject": "matematik",
      "topic": "Sayı ve Kesir Problemleri",
      "text": "Ardışık üç çift sayının toplamı 78 olduğuna göre en büyüğü kaçtır?",
      "options": [
        "24",
        "26",
        "30",
        "32",
        "28"
      ],
      "answer": 4,
      "explanation": "Ortadaki sayı 78/3 = 26. Sayılar 24, 26, 28 → en büyüğü 28."
    },
    {
      "id": "mat-q-055",
      "subject": "matematik",
      "topic": "Sayı ve Kesir Problemleri",
      "text": "Bir sınıftaki öğrencilerin 2/5'i kızdır. Erkek öğrenci sayısı kız öğrenci sayısından 6 fazla olduğuna göre sınıf mevcudu kaçtır?",
      "options": [
        "25",
        "30",
        "35",
        "40",
        "45"
      ],
      "answer": 1,
      "explanation": "Erkekler 3/5, kızlar 2/5; fark 1/5 = 6 → mevcut 30."
    },
    {
      "id": "mat-q-056",
      "subject": "matematik",
      "topic": "Sayı ve Kesir Problemleri",
      "text": "Bir miktar para 4 kardeş arasında eşit paylaştırılıyor. Bu para 5 kardeş arasında eşit paylaştırılsaydı her biri 30 TL daha az alacaktı. Paranın tamamı kaç TL'dir?",
      "options": [
        "450",
        "600",
        "500",
        "720",
        "800"
      ],
      "answer": 1,
      "explanation": "x/4 − x/5 = x/20 = 30 → x = 600."
    },
    {
      "id": "mat-q-057",
      "subject": "matematik",
      "topic": "Yaş Problemleri",
      "text": "Bir annenin yaşı kızının yaşının 4 katıdır. 5 yıl sonra annenin yaşı kızının yaşının 3 katı olacaktır. Annenin bugünkü yaşı kaçtır?",
      "options": [
        "32",
        "36",
        "44",
        "40",
        "48"
      ],
      "answer": 3,
      "explanation": "Kız k, anne 4k: 4k + 5 = 3(k + 5) → k = 10. Anne 40 yaşındadır."
    },
    {
      "id": "mat-q-058",
      "subject": "matematik",
      "topic": "Yaş Problemleri",
      "text": "Bir babanın yaşı, iki çocuğunun yaşları toplamından 26 fazladır. Kaç yıl sonra babanın yaşı, çocuklarının yaşları toplamına eşit olur?",
      "options": [
        "26",
        "13",
        "20",
        "24",
        "52"
      ],
      "answer": 0,
      "explanation": "Her yıl baba 1, çocukların toplamı 2 yaş artar; fark her yıl 1 azalır. 26 yıl sonra eşit olur."
    },
    {
      "id": "mat-q-059",
      "subject": "matematik",
      "topic": "Yaş Problemleri",
      "text": "Ali ile Veli'nin bugünkü yaşları toplamı 42'dir. 6 yıl önce Ali'nin yaşı Veli'nin yaşının 2 katıydı. Ali bugün kaç yaşındadır?",
      "options": [
        "22",
        "24",
        "26",
        "28",
        "30"
      ],
      "answer": 2,
      "explanation": "Veli V ise Ali 42 − V. 42 − V − 6 = 2(V − 6) → 36 − V = 2V − 12 → V = 16, Ali 26."
    },
    {
      "id": "mat-q-060",
      "subject": "matematik",
      "topic": "İşçi-Havuz Problemleri",
      "text": "Ahmet bir işi tek başına 12 günde, Mehmet aynı işi tek başına 6 günde bitirebilmektedir. İkisi birlikte bu işi kaç günde bitirir?",
      "options": [
        "3",
        "6",
        "8",
        "9",
        "4"
      ],
      "answer": 4,
      "explanation": "1/12 + 1/6 = 3/12 = 1/4 → 4 gün."
    },
    {
      "id": "mat-q-061",
      "subject": "matematik",
      "topic": "İşçi-Havuz Problemleri",
      "text": "Bir musluk boş bir havuzu 6 saatte doldurmakta, dipteki bir musluk ise dolu havuzu 9 saatte boşaltmaktadır. Havuz boşken iki musluk birlikte açılırsa havuz kaç saatte dolar?",
      "options": [
        "3",
        "7,5",
        "12",
        "15",
        "18"
      ],
      "answer": 4,
      "explanation": "1/6 − 1/9 = 3/18 − 2/18 = 1/18 → 18 saat."
    },
    {
      "id": "mat-q-062",
      "subject": "matematik",
      "topic": "İşçi-Havuz Problemleri",
      "text": "A işçisi bir işi 10 günde, B işçisi aynı işi 15 günde bitirebilmektedir. İkisi birlikte 3 gün çalıştıktan sonra A işi bırakıyor. Kalan işi B kaç günde bitirir?",
      "options": [
        "5",
        "6",
        "9",
        "7,5",
        "10"
      ],
      "answer": 3,
      "explanation": "Birlikte 1 günde 1/10 + 1/15 = 1/6; 3 günde 1/2 iş biter. Kalan 1/2'yi B, 15/2 = 7,5 günde bitirir."
    },
    {
      "id": "mat-q-063",
      "subject": "matematik",
      "topic": "Hız Problemleri",
      "text": "Saatteki hızı 60 km olan bir araç 3 saat 20 dakikada kaç km yol alır?",
      "options": [
        "200",
        "180",
        "192",
        "210",
        "220"
      ],
      "answer": 0,
      "explanation": "3 saat 20 dakika = 10/3 saat. 60 · 10/3 = 200 km."
    },
    {
      "id": "mat-q-064",
      "subject": "matematik",
      "topic": "Hız Problemleri",
      "text": "Aralarında 360 km uzaklık bulunan iki şehirden, saatteki hızları 50 km ve 70 km olan iki araç aynı anda birbirine doğru hareket ediyor. Araçlar kaç saat sonra karşılaşır?",
      "options": [
        "2",
        "3",
        "2,5",
        "4",
        "6"
      ],
      "answer": 1,
      "explanation": "Karşılaşma süresi = yol / hızlar toplamı = 360/120 = 3 saat."
    },
    {
      "id": "mat-q-065",
      "subject": "matematik",
      "topic": "Hız Problemleri",
      "text": "Bir araç A şehrinden B şehrine saatte 60 km hızla gidip aynı yoldan saatte 40 km hızla geri dönüyor. Aracın tüm yolculuktaki ortalama hızı saatte kaç km'dir?",
      "options": [
        "45",
        "50",
        "48",
        "52",
        "55"
      ],
      "answer": 2,
      "explanation": "Yol 120 km alınırsa gidiş 2, dönüş 3 saat. Ortalama = 240/5 = 48 km/sa. (Formül: 2·60·40/100 = 48.)"
    },
    {
      "id": "mat-q-066",
      "subject": "matematik",
      "topic": "Hız Problemleri",
      "text": "Aynı noktadan aynı yöne, saatteki hızları 80 km ve 60 km olan iki araç aynı anda hareket ediyor. Kaç saat sonra araçlar arasındaki uzaklık 50 km olur?",
      "options": [
        "2,5",
        "1,5",
        "2",
        "3",
        "5"
      ],
      "answer": 0,
      "explanation": "Aradaki uzaklık her saat 80 − 60 = 20 km artar. 50/20 = 2,5 saat."
    },
    {
      "id": "mat-q-067",
      "subject": "matematik",
      "topic": "Yüzde-Kâr-Zarar",
      "text": "Bir ürünün fiyatına önce %20 zam, ardından yeni fiyat üzerinden %20 indirim yapılıyor. Ürünün son fiyatı ilk fiyatına göre yüzde kaç azalmıştır?",
      "options": [
        "0",
        "2",
        "5",
        "10",
        "4"
      ],
      "answer": 4,
      "explanation": "100 TL → %20 zam: 120 TL → %20 indirim: 96 TL. Fiyat %4 azalmıştır."
    },
    {
      "id": "mat-q-068",
      "subject": "matematik",
      "topic": "Yüzde-Kâr-Zarar",
      "text": "Maliyeti 250 TL olan bir ürün %40 kârla satılıyor. Ürünün satış fiyatı kaç TL'dir?",
      "options": [
        "290",
        "300",
        "350",
        "325",
        "400"
      ],
      "answer": 2,
      "explanation": "250 · 140/100 = 350 TL."
    },
    {
      "id": "mat-q-069",
      "subject": "matematik",
      "topic": "Yüzde-Kâr-Zarar",
      "text": "Bir ürün 360 TL'ye satıldığında %20 zarar edilmektedir. Bu ürünün maliyeti kaç TL'dir?",
      "options": [
        "288",
        "450",
        "400",
        "432",
        "480"
      ],
      "answer": 1,
      "explanation": "Maliyet x: x · 80/100 = 360 → x = 450 TL."
    },
    {
      "id": "mat-q-070",
      "subject": "matematik",
      "topic": "Yüzde-Kâr-Zarar",
      "text": "300 TL'nin %15'i ile 200 TL'nin %30'unun toplamı kaç TL'dir?",
      "options": [
        "90",
        "100",
        "110",
        "105",
        "120"
      ],
      "answer": 3,
      "explanation": "300 · 0,15 = 45; 200 · 0,30 = 60. Toplam 105 TL."
    },
    {
      "id": "mat-q-071",
      "subject": "matematik",
      "topic": "Yüzde-Kâr-Zarar",
      "text": "Bir satıcı 80 TL'ye aldığı bir malın etiket fiyatını %50 kârla belirliyor. Daha sonra etiket fiyatı üzerinden %20 indirim yaparak malı satıyor. Satıcı bu satıştan kaç TL kâr eder?",
      "options": [
        "20",
        "24",
        "32",
        "40",
        "16"
      ],
      "answer": 4,
      "explanation": "Etiket: 80 · 1,5 = 120 TL. İndirimli: 120 · 0,8 = 96 TL. Kâr: 96 − 80 = 16 TL."
    },
    {
      "id": "mat-q-072",
      "subject": "matematik",
      "topic": "Karışım Problemleri",
      "text": "Tuz oranı %20 olan 60 gram tuzlu suya 20 gram tuz ekleniyor. Yeni karışımın tuz oranı yüzde kaçtır?",
      "options": [
        "25",
        "30",
        "35",
        "40",
        "45"
      ],
      "answer": 3,
      "explanation": "Tuz: 60 · 0,2 = 12 g; eklenince 32 g. Karışım 80 g. 32/80 = %40."
    },
    {
      "id": "mat-q-073",
      "subject": "matematik",
      "topic": "Karışım Problemleri",
      "text": "Şeker oranı %30 olan 40 litre şerbete kaç litre su eklenirse şeker oranı %20 olur?",
      "options": [
        "20",
        "10",
        "15",
        "25",
        "60"
      ],
      "answer": 0,
      "explanation": "Şeker 40 · 0,3 = 12 L. 12/(40 + x) = 0,2 → 40 + x = 60 → x = 20 L."
    },
    {
      "id": "mat-q-074",
      "subject": "matematik",
      "topic": "Karışım Problemleri",
      "text": "Tuz oranı %10 olan 30 litre tuzlu su ile tuz oranı %40 olan 20 litre tuzlu su karıştırılıyor. Elde edilen karışımın tuz oranı yüzde kaçtır?",
      "options": [
        "20",
        "24",
        "22",
        "25",
        "28"
      ],
      "answer": 2,
      "explanation": "Tuz: 3 + 8 = 11 L; karışım 50 L. 11/50 = %22."
    },
    {
      "id": "mat-q-075",
      "subject": "matematik",
      "topic": "Kümeler",
      "text": "40 kişilik bir sınıfta 25 kişi İngilizce, 18 kişi Almanca bilmektedir. Her iki dili de bilen 7 kişi olduğuna göre bu iki dilden hiçbirini bilmeyen kaç kişi vardır?",
      "options": [
        "3",
        "4",
        "5",
        "7",
        "11"
      ],
      "answer": 1,
      "explanation": "En az birini bilen: 25 + 18 − 7 = 36. Hiçbirini bilmeyen: 40 − 36 = 4."
    },
    {
      "id": "mat-q-076",
      "subject": "matematik",
      "topic": "Kümeler",
      "text": "s(A) = 12, s(B) = 9 ve s(A ∪ B) = 17 olduğuna göre s(A ∩ B) kaçtır?",
      "options": [
        "2",
        "3",
        "5",
        "4",
        "8"
      ],
      "answer": 3,
      "explanation": "s(A ∪ B) = s(A) + s(B) − s(A ∩ B) → 17 = 21 − s(A ∩ B) → 4."
    },
    {
      "id": "mat-q-077",
      "subject": "matematik",
      "topic": "Kümeler",
      "text": "5 elemanlı bir kümenin 2 elemanlı alt kümelerinin sayısı kaçtır?",
      "options": [
        "10",
        "5",
        "20",
        "25",
        "32"
      ],
      "answer": 0,
      "explanation": "C(5, 2) = 5 · 4/2 = 10."
    },
    {
      "id": "mat-q-078",
      "subject": "matematik",
      "topic": "Kümeler",
      "text": "A = {a, b, c, d} kümesinin öz alt küme sayısı kaçtır?",
      "options": [
        "4",
        "15",
        "8",
        "16",
        "24"
      ],
      "answer": 1,
      "explanation": "Alt küme sayısı 2⁴ = 16; öz alt küme sayısı 16 − 1 = 15."
    },
    {
      "id": "mat-q-079",
      "subject": "matematik",
      "topic": "Fonksiyonlar",
      "text": "f(x) = 3x − 2 olduğuna göre f(4) + f(−1) kaçtır?",
      "options": [
        "3",
        "7",
        "9",
        "15",
        "5"
      ],
      "answer": 4,
      "explanation": "f(4) = 10, f(−1) = −5. Toplam 5."
    },
    {
      "id": "mat-q-080",
      "subject": "matematik",
      "topic": "Fonksiyonlar",
      "text": "f(2x + 1) = 4x + 5 olduğuna göre f(7) kaçtır?",
      "options": [
        "15",
        "19",
        "17",
        "21",
        "33"
      ],
      "answer": 2,
      "explanation": "2x + 1 = 7 → x = 3. f(7) = 4 · 3 + 5 = 17."
    },
    {
      "id": "mat-q-081",
      "subject": "matematik",
      "topic": "Fonksiyonlar",
      "text": "f(x) = 2x + 3 ve g(x) = x² olduğuna göre (f∘g)(2) kaçtır?",
      "options": [
        "7",
        "11",
        "14",
        "25",
        "49"
      ],
      "answer": 1,
      "explanation": "g(2) = 4; f(4) = 2 · 4 + 3 = 11. (Dikkat: (g∘f)(2) = 49 olurdu.)"
    },
    {
      "id": "mat-q-082",
      "subject": "matematik",
      "topic": "Fonksiyonlar",
      "text": "f(x) = (x + 4)/2 olduğuna göre f⁻¹(5) kaçtır?",
      "options": [
        "4,5",
        "5",
        "7",
        "6",
        "14"
      ],
      "answer": 3,
      "explanation": "f⁻¹(5) = a ise f(a) = 5 → (a + 4)/2 = 5 → a = 6."
    },
    {
      "id": "mat-q-083",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "text": "5 kişi düz bir sıraya kaç farklı şekilde oturabilir?",
      "options": [
        "25",
        "60",
        "100",
        "720",
        "120"
      ],
      "answer": 4,
      "explanation": "5! = 5 · 4 · 3 · 2 · 1 = 120."
    },
    {
      "id": "mat-q-084",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "text": "7 kişilik bir gruptan 3 kişilik bir komisyon kaç farklı şekilde seçilebilir?",
      "options": [
        "35",
        "21",
        "42",
        "210",
        "343"
      ],
      "answer": 0,
      "explanation": "Seçimde sıra önemsizdir: C(7, 3) = 7 · 6 · 5/(3 · 2 · 1) = 35."
    },
    {
      "id": "mat-q-085",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "text": "ADANA kelimesinin harflerinin yerleri değiştirilerek anlamlı ya da anlamsız 5 harfli kaç farklı kelime yazılabilir?",
      "options": [
        "10",
        "30",
        "20",
        "60",
        "120"
      ],
      "answer": 2,
      "explanation": "5 harften 3'ü A'dır: 5!/3! = 120/6 = 20."
    },
    {
      "id": "mat-q-086",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "text": "Farklı 6 kitap, belirli 2 kitap her zaman yan yana olacak şekilde bir rafa kaç farklı biçimde dizilebilir?",
      "options": [
        "120",
        "360",
        "480",
        "720",
        "240"
      ],
      "answer": 4,
      "explanation": "Yan yana olacak 2 kitap tek nesne sayılır: 5! = 120. Kendi aralarında 2! = 2 şekilde yer değiştirir: 120 · 2 = 240."
    },
    {
      "id": "mat-q-087",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "text": "Bir zar atıldığında üst yüze asal sayı gelme olasılığı kaçtır?",
      "options": [
        "1/6",
        "1/3",
        "1/2",
        "2/3",
        "5/6"
      ],
      "answer": 2,
      "explanation": "Asal sonuçlar: 2, 3, 5 → 3/6 = 1/2. (1 asal değildir.)"
    },
    {
      "id": "mat-q-088",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "text": "İçinde 4 kırmızı ve 6 mavi top bulunan bir torbadan rastgele 2 top çekiliyor. Çekilen iki topun da kırmızı olma olasılığı kaçtır?",
      "options": [
        "4/25",
        "2/15",
        "1/5",
        "2/5",
        "4/15"
      ],
      "answer": 1,
      "explanation": "C(4, 2)/C(10, 2) = 6/45 = 2/15."
    },
    {
      "id": "mat-q-089",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "text": "Hilesiz iki madeni para birlikte atılıyor. En az birinin yazı gelme olasılığı kaçtır?",
      "options": [
        "1/4",
        "1/3",
        "1/2",
        "3/4",
        "2/3"
      ],
      "answer": 3,
      "explanation": "Tüm durumlar: YY, YT, TY, TT. Hiç yazı gelmemesi (TT) 1/4 → 1 − 1/4 = 3/4."
    },
    {
      "id": "mat-q-090",
      "subject": "matematik",
      "topic": "Permütasyon-Kombinasyon-Olasılık",
      "text": "1'den 20'ye kadar (20 dahil) doğal sayılar arasından rastgele seçilen bir sayının 3'ün katı olma olasılığı kaçtır?",
      "options": [
        "3/10",
        "1/4",
        "1/3",
        "7/20",
        "2/5"
      ],
      "answer": 0,
      "explanation": "3'ün katları: 3, 6, 9, 12, 15, 18 → 6 tane. 6/20 = 3/10."
    },
    {
      "id": "mat-q-091",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Bir üçgenin iç açılarının ölçüleri 2, 3 ve 4 sayıları ile orantılıdır. Bu üçgenin en büyük iç açısı kaç derecedir?",
      "options": [
        "60",
        "70",
        "80",
        "75",
        "90"
      ],
      "answer": 2,
      "explanation": "2k + 3k + 4k = 180 → k = 20. En büyük açı 4k = 80°."
    },
    {
      "id": "mat-q-092",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Bir açının tümleri ile bütünlerinin toplamı 210° olduğuna göre bu açı kaç derecedir?",
      "options": [
        "25",
        "35",
        "40",
        "30",
        "60"
      ],
      "answer": 3,
      "explanation": "(90 − x) + (180 − x) = 210 → 270 − 2x = 210 → x = 30°."
    },
    {
      "id": "mat-q-093",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Dik kenarları 6 cm ve 8 cm olan bir dik üçgenin hipotenüsü kaç cm'dir?",
      "options": [
        "7",
        "10",
        "9",
        "12",
        "14"
      ],
      "answer": 1,
      "explanation": "Pisagor: 6² + 8² = 36 + 64 = 100 → hipotenüs 10 cm."
    },
    {
      "id": "mat-q-094",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Paralel kenarlarının uzunlukları 8 cm ve 12 cm, yüksekliği 5 cm olan bir yamuğun alanı kaç cm²'dir?",
      "options": [
        "50",
        "40",
        "48",
        "60",
        "100"
      ],
      "answer": 0,
      "explanation": "Yamuğun alanı = ((8 + 12)/2) · 5 = 10 · 5 = 50 cm²."
    },
    {
      "id": "mat-q-095",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Yarıçapı 5 cm olan bir dairenin alanı kaç cm²'dir? (π = 3 alınız.)",
      "options": [
        "15",
        "30",
        "45",
        "60",
        "75"
      ],
      "answer": 4,
      "explanation": "Alan = πr² = 3 · 25 = 75 cm². (30, çevre uzunluğudur.)"
    },
    {
      "id": "mat-q-096",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Çevresi 36 cm olan bir çemberin yarıçapı kaç cm'dir? (π = 3 alınız.)",
      "options": [
        "3",
        "6",
        "9",
        "12",
        "18"
      ],
      "answer": 1,
      "explanation": "Çevre = 2πr → 36 = 6r → r = 6 cm."
    },
    {
      "id": "mat-q-097",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Bir dikdörtgenin uzun kenarı kısa kenarının 3 katıdır. Dikdörtgenin çevresi 48 cm olduğuna göre alanı kaç cm²'dir?",
      "options": [
        "72",
        "96",
        "128",
        "144",
        "108"
      ],
      "answer": 4,
      "explanation": "Kısa kenar x, uzun 3x: 2(x + 3x) = 8x = 48 → x = 6. Alan = 6 · 18 = 108 cm²."
    },
    {
      "id": "mat-q-098",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Boyutları 3 cm, 4 cm ve 5 cm olan bir dikdörtgenler prizmasının hacmi kaç cm³'tür?",
      "options": [
        "60",
        "12",
        "47",
        "94",
        "120"
      ],
      "answer": 0,
      "explanation": "V = a · b · c = 3 · 4 · 5 = 60 cm³. (94, yüzey alanıdır.)"
    },
    {
      "id": "mat-q-099",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Bir ikizkenar üçgenin tepe açısı 40° olduğuna göre taban açılarından birinin ölçüsü kaç derecedir?",
      "options": [
        "40",
        "50",
        "70",
        "60",
        "140"
      ],
      "answer": 2,
      "explanation": "Taban açıları eşittir: (180 − 40)/2 = 70°."
    },
    {
      "id": "mat-q-100",
      "subject": "matematik",
      "topic": "Geometri",
      "text": "Düzgün bir altıgenin bir iç açısının ölçüsü kaç derecedir?",
      "options": [
        "60",
        "100",
        "108",
        "120",
        "135"
      ],
      "answer": 3,
      "explanation": "İç açılar toplamı (6 − 2) · 180° = 720°. Bir iç açı 720/6 = 120°."
    }
  ],
};

export default data;

import { STUDENT_NAME as A } from '../config';

export interface Stats {
  cardsSeen: number;
  cardsKnown: number;
  questions: number;
  correct: number;
  activeDays: number;
  streak: number;
  tasksDone: number;
  exams: number;
  bestExamNet: number;
}

export interface Message {
  id: string;
  /** Kilidin açıldığı anı anlatan kısa etiket. */
  badge: string;
  title: string;
  body: string;
  when: (s: Stats) => boolean;
}

/**
 * Azra çalıştıkça sırayla açılan mesajlar. Metinleri istediğin gibi değiştirebilirsin;
 * `id` değerlerini değiştirme, yoksa açılmış mesajlar yeniden açılır.
 */
export const MESSAGES: Message[] = [
  {
    id: 'm-start',
    badge: 'İlk adım',
    title: `Hoş geldin ${A}!`,
    body: 'İlk kartını çevirdin. On günlük kamp resmen başladı. Bu site sadece senin için yapıldı, her kartta biraz daha hazır olacaksın.',
    when: (s) => s.cardsSeen >= 1,
  },
  {
    id: 'm-cards-25',
    badge: '25 kart',
    title: 'Isınma turu tamam',
    body: `25 kart geride kaldı ${A}. Bilemediklerin üzülme sebebi değil, onlar zaten tam da çalışman gereken yerler. Tekrar karşına çıkacaklar ve bu sefer bileceksin.`,
    when: (s) => s.cardsSeen >= 25,
  },
  {
    id: 'm-q-10',
    badge: '10 soru',
    title: 'İlk on soru',
    body: 'Soru çözmeye başladın. Unutma, her yanlış sınav günü yapmayacağın bir yanlış demek.',
    when: (s) => s.questions >= 10,
  },
  {
    id: 'm-known-50',
    badge: '50 kart ezberde',
    title: 'Ezberler oturuyor',
    body: `50 kartı artık biliyorsun. Bunu sınav salonunda düşün: o 50 bilgi artık senin, kimse elinden alamaz.`,
    when: (s) => s.cardsKnown >= 50,
  },
  {
    id: 'm-task-1',
    badge: 'İlk görev',
    title: 'Planı uyguluyorsun',
    body: 'Günün ilk görevini bitirdin. Plan basit: her gün biraz, ama her gün. Gerisi kendiliğinden geliyor.',
    when: (s) => s.tasksDone >= 1,
  },
  {
    id: 'm-streak-2',
    badge: '2 gün üst üste',
    title: 'Seri başladı',
    body: `İki gündür aralıksız çalışıyorsun ${A}. Bu seriyi bozmayalım, yarın da küçük bir tur yeter.`,
    when: (s) => s.streak >= 2,
  },
  {
    id: 'm-q-50',
    badge: '50 soru',
    title: 'Elli soru!',
    body: 'Elli soruyu geride bıraktın. ÖSYM\'nin soru kalıpları artık sana tanıdık gelmeye başlamıştır.',
    when: (s) => s.questions >= 50,
  },
  {
    id: 'm-cards-150',
    badge: '150 kart',
    title: 'Hafıza makinesi',
    body: '150 kart çevirdin. Vatandaşlıktaki sayılar, tarihteki antlaşmalar... hepsi yerine oturuyor. Gurur duyuyorum.',
    when: (s) => s.cardsSeen >= 150,
  },
  {
    id: 'm-correct-50',
    badge: '50 doğru',
    title: 'Elli doğru cevap',
    body: `Elli soruyu doğru yaptın ${A}. Bu, sınavda puanına dönüşecek emek. Devam!`,
    when: (s) => s.correct >= 50,
  },
  {
    id: 'm-streak-3',
    badge: '3 gün üst üste',
    title: 'Üç gündür buradasın',
    body: 'Üç gün üst üste. Disiplin motivasyondan güçlüdür ve sen şu an tam olarak bunu yapıyorsun.',
    when: (s) => s.streak >= 3,
  },
  {
    id: 'm-known-150',
    badge: '150 kart ezberde',
    title: 'Yarı yoldan fazlası',
    body: 'Yüz elli kart artık kalıcı. Bir zamanlar "bunları nasıl ezberleyeceğim" dediğin konulara bak şimdi.',
    when: (s) => s.cardsKnown >= 150,
  },
  {
    id: 'm-exam-1',
    badge: 'İlk deneme',
    title: 'İlk denemen bitti',
    body: `İlk denemeyi tamamladın ${A}! Netin ne olursa olsun bu bir başlangıç noktası. Şimdi "Yanlışlarım" bölümüne bak, oradaki her soru bir sonraki denemede net olacak.`,
    when: (s) => s.exams >= 1,
  },
  {
    id: 'm-q-150',
    badge: '150 soru',
    title: 'Soru canavarı',
    body: 'Yüz elli soru çözdün. Sınavda karşına çıkacak çoğu soru tipini artık gördün.',
    when: (s) => s.questions >= 150,
  },
  {
    id: 'm-days-5',
    badge: '5 gün',
    title: 'Kampın yarısı',
    body: `Beş gün çalıştın ${A}. Kampın yarısını geride bıraktın, en zor kısım geçti. Bundan sonrası tekrar ve özgüven.`,
    when: (s) => s.activeDays >= 5,
  },
  {
    id: 'm-cards-400',
    badge: '400 kart',
    title: 'Dört yüz kart',
    body: 'Dört yüz kez kart çevirdin. Bu sayı bile tek başına ne kadar çalıştığını gösteriyor.',
    when: (s) => s.cardsSeen >= 400,
  },
  {
    id: 'm-correct-200',
    badge: '200 doğru',
    title: 'İki yüz doğru',
    body: 'İki yüz doğru cevap! Sınava giden yolda tuğlalar tek tek dizildi.',
    when: (s) => s.correct >= 200,
  },
  {
    id: 'm-exam-2',
    badge: '2 deneme',
    title: 'İkinci deneme',
    body: 'İkinci denemeni de bitirdin. İki denemeyi karşılaştır: hangi derste yükseldin? İşte orası emeğinin karşılığı.',
    when: (s) => s.exams >= 2,
  },
  {
    id: 'm-streak-5',
    badge: '5 gün üst üste',
    title: 'Beş gün, hiç ara vermeden',
    body: `${A}, beş gündür her gün buradasın. Bu kararlılıkla sınav sadece bir formalite.`,
    when: (s) => s.streak >= 5,
  },
  {
    id: 'm-known-300',
    badge: '300 kart ezberde',
    title: 'Neredeyse hepsi',
    body: 'Üç yüz kart ezberinde. Sınav sabahı bu ekranı hatırla: hazırsın.',
    when: (s) => s.cardsKnown >= 300,
  },
  {
    id: 'm-days-8',
    badge: '8 gün',
    title: 'Son düzlük',
    body: 'Sekiz gün çalıştın. Artık yeni bilgi değil, bildiğini sağlamlaştırma zamanı. Yanlışlarım ve denemeler senin en iyi arkadaşın.',
    when: (s) => s.activeDays >= 8,
  },
  {
    id: 'm-q-400',
    badge: '400 soru',
    title: 'Dört yüz soru',
    body: `Dört yüz soru, ${A}! Bunu yapabilen biri sınavda da yapar.`,
    when: (s) => s.questions >= 400,
  },
  {
    id: 'm-days-10',
    badge: '10 gün',
    title: 'Kamp tamamlandı',
    body: `On gün boyunca hiç vazgeçmedin. Sınavda ne olursa olsun, bu on günü başaran sensin ve seninle çok gurur duyuyorum. Şimdi derin bir nefes al, iyi uyu. Kolay gelsin ${A}.`,
    when: (s) => s.activeDays >= 10,
  },
];

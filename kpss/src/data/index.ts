import type { Card, Question, SubjectId } from './types';
import tarih from './tarih';
import cografya from './cografya';
import vatandaslik from './vatandaslik';
import guncel from './guncel';
import turkce from './turkce';
import matematik from './matematik';
import ekstra from './ekstra';
import type { SubjectData } from './types';
// İkinci içerik seti (proje dosyalarındaki kpss-content'ten), kimlikleri "x-" ile başlar.
import ekTarih from './ek/tarih.json';
import ekCografya from './ek/cografya.json';
import ekVatandaslik from './ek/vatandaslik.json';
import ekGuncel from './ek/guncel.json';
import ekTurkce from './ek/turkce.json';
import ekMatematik from './ek/matematik.json';

const extra = [ekTarih, ekCografya, ekVatandaslik, ekGuncel, ekTurkce, ekMatematik] as unknown as SubjectData[];
const all: SubjectData[] = [tarih, cografya, vatandaslik, guncel, turkce, matematik, ekstra, ...extra];

/** İki içerik setindeki eş anlamlı konu adlarını tek ada indirir (Konu seç ekranında tekrar olmasın). */
const TOPIC_ALIAS: Record<string, string> = {
  // Tarih
  'İslamiyet Öncesi': 'İslamiyet Öncesi Türk Tarihi',
  'İlk Türk-İslam': 'İlk Türk-İslam Devletleri',
  'Osmanlı Kuruluş/Yükselme': 'Osmanlı Kuruluş ve Yükselme',
  'Islahatlar/Tanzimat/Meşrutiyet': 'Osmanlı Islahatları ve Yenileşme',
  'Osmanlı Kültür ve Medeniyet': 'Osmanlı Kültür ve Medeniyeti',
  'XX. Yüzyıl Başı': 'XX. Yüzyıl Başında Osmanlı',
  'Kurtuluş Savaşı Hazırlık': 'Kurtuluş Savaşı Hazırlık Dönemi',
  'TBMM ve Cepheler': 'TBMM, Cepheler ve Antlaşmalar',
  İnkılaplar: 'Atatürk İnkılapları',
  'Dış Politika': 'Atatürk Dönemi Dış Politika',
  'Çağdaş Tarih': 'Çağdaş Türk ve Dünya Tarihi',
  // Coğrafya
  Konum: 'Coğrafi Konum',
  İklim: 'İklim ve Bitki Örtüsü',
  'Maden ve Enerji': 'Madenler ve Enerji',
  Sanayi: 'Sanayi ve Ulaşım',
  'Ulaşım/Turizm': 'Turizm ve Korunan Alanlar',
  Bölgeler: 'Coğrafi Bölgeler ve Doğal Afetler',
  'Doğal Afetler ve Çevre': 'Coğrafi Bölgeler ve Doğal Afetler',
  // Vatandaşlık
  'Hukuka Giriş': 'Hukukun Temel Kavramları',
  'Temel Haklar': 'Temel Hak ve Hürriyetler',
  İdare: 'İdare Hukuku',
  // Türkçe
  Noktalama: 'Noktalama İşaretleri',
  'Anlatım Bozukluğu': 'Anlatım Bozuklukları',
  // Matematik: ince konular ortak, daha geniş başlıklarda toplanır
  'Temel Kavramlar': 'Temel Kavramlar ve Sayılar',
  'Basamak Analizi': 'Temel Kavramlar ve Sayılar',
  Bölünebilme: 'Bölünebilme, EBOB-EKOK',
  'EBOB-EKOK': 'Bölünebilme, EBOB-EKOK',
  'Rasyonel ve Ondalık Sayılar': 'Rasyonel Sayılar, Üslü ve Köklü Sayılar',
  'Üslü Sayılar': 'Rasyonel Sayılar, Üslü ve Köklü Sayılar',
  'Köklü Sayılar': 'Rasyonel Sayılar, Üslü ve Köklü Sayılar',
  Eşitsizlikler: 'Denklem, Eşitsizlik ve Fonksiyon',
  'Mutlak Değer': 'Denklem, Eşitsizlik ve Fonksiyon',
  'Çarpanlara Ayırma': 'Denklem, Eşitsizlik ve Fonksiyon',
  Denklemler: 'Denklem, Eşitsizlik ve Fonksiyon',
  Fonksiyonlar: 'Denklem, Eşitsizlik ve Fonksiyon',
  'Oran-Orantı': 'Sayı, Kesir ve Yaş Problemleri',
  'Sayı ve Kesir Problemleri': 'Sayı, Kesir ve Yaş Problemleri',
  'Yaş Problemleri': 'Sayı, Kesir ve Yaş Problemleri',
  'İşçi-Havuz Problemleri': 'Hareket ve İşçi Problemleri',
  'Hız Problemleri': 'Hareket ve İşçi Problemleri',
  'Yüzde-Kâr-Zarar': 'Yüzde, Kâr-Zarar, Karışım',
  'Karışım Problemleri': 'Yüzde, Kâr-Zarar, Karışım',
  Kümeler: 'Kümeler, Permütasyon, Olasılık',
  'Permütasyon-Kombinasyon-Olasılık': 'Kümeler, Permütasyon, Olasılık',
  'Açılar ve Üçgenler': 'Geometri',
  'Dörtgenler, Çember, Alan': 'Geometri',
};

function withAlias<T extends { topic: string }>(item: T): T {
  const topic = TOPIC_ALIAS[item.topic];
  return topic ? { ...item, topic } : item;
}

/** Aynı kart/soru iki sette de varsa ilkini tut (karşılaştırma harf, boşluk ve noktalamadan bağımsız). */
function dedupe<T>(items: T[], text: (t: T) => string): T[] {
  const seen = new Set<string>();
  return items.filter((i) => {
    const k = text(i).toLocaleLowerCase('tr').replace(/[^\p{L}\p{N}]/gu, '');
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export const CARDS: Card[] = dedupe(
  all.flatMap((d) => d.cards).map(withAlias),
  (c) => c.subject + c.front,
);
export const QUESTIONS: Question[] = dedupe(
  all.flatMap((d) => d.questions).map(withAlias),
  (q) => q.subject + q.text + q.options.join(''),
);

export const cardById = new Map(CARDS.map((c) => [c.id, c]));
export const questionById = new Map(QUESTIONS.map((q) => [q.id, q]));

export function topicsOf(subject: SubjectId): string[] {
  const seen = new Set<string>();
  for (const c of CARDS) if (c.subject === subject) seen.add(c.topic);
  for (const q of QUESTIONS) if (q.subject === subject) seen.add(q.topic);
  return [...seen];
}

export * from './types';
export * from './subjects';

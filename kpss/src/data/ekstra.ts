import type { SubjectData } from './types';

/**
 * Kendi eklediğin kartlar ve sorular (ör. elindeki çıkmış soru kitaplarından).
 * Buraya eklenenler sitede ilgili dersin altında otomatik görünür.
 *
 * Örnek soru:
 * {
 *   id: 'ek-q-001',            // benzersiz olsun, sonradan değiştirme
 *   subject: 'tarih',           // tarih | cografya | vatandaslik | guncel | turkce | matematik
 *   topic: 'Çıkmış Sorular',
 *   text: 'Soru kökü...',
 *   options: ['A şıkkı', 'B şıkkı', 'C şıkkı', 'D şıkkı', 'E şıkkı'],
 *   answer: 2,                  // 0=A, 1=B, 2=C, 3=D, 4=E
 *   explanation: 'Neden C?',
 * },
 *
 * Örnek kart:
 * { id: 'ek-c-001', subject: 'vatandaslik', topic: 'Yasama', front: 'Soru', back: 'Cevap' },
 */
const data: SubjectData = {
  cards: [],
  questions: [],
};

export default data;

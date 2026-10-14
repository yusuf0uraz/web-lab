import type { SubjectId } from './types';

export type ExamPreset = 'gk' | 'gy' | 'tam';

export type Task =
  | { kind: 'cards'; subject?: SubjectId; topics?: string[]; count: number; label: string }
  | { kind: 'quiz'; subject?: SubjectId; topics?: string[]; count: number; label: string }
  | { kind: 'exam'; preset: ExamPreset; label: string }
  | { kind: 'wrongs'; label: string }
  | { kind: 'missed'; count: number; label: string }
  | { kind: 'note'; label: string };

export interface DayPlan {
  day: number;
  title: string;
  tasks: Task[];
}

/**
 * `topics` alt konu adlarında aranan anahtar kelimelerdir (büyük/küçük harf duyarsız).
 * Hiçbiri eşleşmezse dersin tamamından seçilir.
 */
export const PLAN: DayPlan[] = [
  {
    day: 1,
    title: 'Temelleri kur',
    tasks: [
      { kind: 'cards', subject: 'tarih', topics: ['İslamiyet Öncesi', 'Türk-İslam', 'İlk Türk'], count: 40, label: 'Tarih: İslamiyet öncesi ve ilk Türk-İslam devletleri' },
      { kind: 'quiz', subject: 'tarih', topics: ['İslamiyet Öncesi', 'Türk-İslam', 'İlk Türk'], count: 15, label: 'Tarih testi' },
      { kind: 'cards', subject: 'vatandaslik', topics: ['Hukukun Temel'], count: 30, label: 'Vatandaşlık: hukukun temel kavramları' },
      { kind: 'quiz', subject: 'matematik', topics: ['Temel Kavram', 'Bölünebilme', 'Rasyonel'], count: 12, label: 'Matematik: temel kavramlar, bölünebilme, üslü-köklü sayılar' },
    ],
  },
  {
    day: 2,
    title: 'Osmanlı başlıyor',
    tasks: [
      { kind: 'cards', subject: 'tarih', topics: ['Selçuklu', 'Kuruluş', 'Yükselme', 'Klasik'], count: 40, label: 'Tarih: Selçuklular, Osmanlı kuruluş ve yükselme' },
      { kind: 'quiz', subject: 'tarih', topics: ['Selçuklu', 'Kuruluş', 'Yükselme', 'Klasik'], count: 15, label: 'Tarih testi' },
      { kind: 'cards', subject: 'cografya', topics: ['Konum', 'Yer Şekil', 'Akarsu', 'Göl'], count: 35, label: 'Coğrafya: konum, yer şekilleri, akarsu ve göller' },
      { kind: 'quiz', subject: 'turkce', topics: ['Sözcükte Anlam', 'Cümlede Anlam'], count: 12, label: 'Türkçe: sözcükte ve cümlede anlam' },
    ],
  },
  {
    day: 3,
    title: 'Anayasa ve ıslahatlar',
    tasks: [
      { kind: 'cards', subject: 'tarih', topics: ['Kültür', 'Medeniyet', 'Duraklama', 'Gerileme', 'Dağılma', 'Islahat', 'Tanzimat', 'Meşrutiyet'], count: 40, label: 'Tarih: Osmanlı kültürü ve ıslahatlar' },
      { kind: 'quiz', subject: 'tarih', topics: ['Kültür', 'Medeniyet', 'Duraklama', 'Gerileme', 'Dağılma', 'Islahat', 'Tanzimat', 'Meşrutiyet'], count: 15, label: 'Tarih testi' },
      { kind: 'cards', subject: 'vatandaslik', topics: ['Anayasa Tarihi', 'Anayasa', 'Temel İlke', 'Temel Hak'], count: 30, label: 'Vatandaşlık: anayasa tarihi, 1982 ilkeleri, temel haklar' },
      { kind: 'quiz', subject: 'matematik', topics: ['Problem', 'Oran', 'Yüzde', 'Yaş', 'Hız', 'İşçi', 'Karışım'], count: 12, label: 'Matematik: problemler' },
    ],
  },
  {
    day: 4,
    title: 'Milli Mücadele yolu',
    tasks: [
      { kind: 'cards', subject: 'tarih', topics: ['XX', '20. Yüzyıl', 'Trablusgarp', 'Balkan', 'Dünya Savaşı', 'Hazırlık', 'Kongre'], count: 40, label: 'Tarih: XX. yüzyıl başı ve Kurtuluş Savaşı hazırlık' },
      { kind: 'quiz', subject: 'tarih', topics: ['XX', '20. Yüzyıl', 'Trablusgarp', 'Balkan', 'Dünya Savaşı', 'Hazırlık', 'Kongre'], count: 15, label: 'Tarih testi' },
      { kind: 'cards', subject: 'cografya', topics: ['İklim', 'Bitki', 'Toprak', 'Nüfus', 'Yerleşme', 'Göç'], count: 30, label: 'Coğrafya: iklim, toprak, nüfus ve yerleşme' },
      { kind: 'cards', subject: 'turkce', topics: ['Ses', 'Yapı', 'Yazım'], count: 25, label: 'Türkçe: ses bilgisi, yapı ve yazım kuralları' },
      { kind: 'quiz', subject: 'turkce', topics: ['Ses', 'Yapı', 'Yazım'], count: 10, label: 'Türkçe testi' },
    ],
  },
  {
    day: 5,
    title: 'Cepheler ve devlet yapısı',
    tasks: [
      { kind: 'cards', subject: 'tarih', topics: ['TBMM', 'Cephe', 'Lozan'], count: 40, label: 'Tarih: TBMM, cepheler ve antlaşmalar' },
      { kind: 'quiz', subject: 'tarih', topics: ['TBMM', 'Cephe', 'Lozan'], count: 15, label: 'Tarih testi' },
      { kind: 'cards', subject: 'vatandaslik', topics: ['Yasama', 'Yürütme'], count: 35, label: 'Vatandaşlık: yasama ve yürütme' },
      { kind: 'quiz', subject: 'vatandaslik', topics: ['Yasama', 'Yürütme'], count: 15, label: 'Vatandaşlık testi' },
      { kind: 'quiz', subject: 'matematik', count: 12, label: 'Matematik: karışık test' },
    ],
  },
  {
    day: 6,
    title: 'İnkılaplar ve ekonomi coğrafyası',
    tasks: [
      { kind: 'cards', subject: 'tarih', topics: ['İnkılap', 'İlke'], count: 40, label: 'Tarih: Atatürk inkılapları ve ilkeleri' },
      { kind: 'quiz', subject: 'tarih', topics: ['İnkılap', 'İlke'], count: 15, label: 'Tarih testi' },
      { kind: 'cards', subject: 'cografya', topics: ['Tarım', 'Hayvancılık', 'Maden', 'Enerji', 'Sanayi'], count: 40, label: 'Coğrafya: tarım, madenler, enerji, sanayi' },
      { kind: 'quiz', subject: 'cografya', topics: ['Tarım', 'Hayvancılık', 'Maden', 'Enerji', 'Sanayi'], count: 15, label: 'Coğrafya testi' },
      { kind: 'quiz', subject: 'turkce', topics: ['Sözcük Tür', 'Öge', 'Cümle Tür', 'Noktalama', 'Anlatım'], count: 12, label: 'Türkçe: dil bilgisi ve noktalama' },
    ],
  },
  {
    day: 7,
    title: 'Yargı, dış politika, güncel',
    tasks: [
      { kind: 'cards', subject: 'tarih', topics: ['Dış Politika', 'Çağdaş', 'Dünya'], count: 30, label: 'Tarih: Atatürk dönemi dış politika ve çağdaş tarih' },
      { kind: 'cards', subject: 'vatandaslik', topics: ['Yargı', 'İdare'], count: 35, label: 'Vatandaşlık: yargı ve idare hukuku' },
      { kind: 'quiz', subject: 'vatandaslik', topics: ['Yargı', 'İdare'], count: 15, label: 'Vatandaşlık testi' },
      { kind: 'cards', subject: 'guncel', count: 35, label: 'Güncel bilgiler kartları' },
      { kind: 'quiz', subject: 'guncel', count: 15, label: 'Güncel bilgiler testi' },
    ],
  },
  {
    day: 8,
    title: 'İlk deneme günü',
    tasks: [
      { kind: 'exam', preset: 'gk', label: 'Genel Kültür denemesi (60 soru, 65 dk)' },
      { kind: 'wrongs', label: 'Denemedeki yanlışlarını tekrar çöz' },
      { kind: 'cards', subject: 'cografya', topics: ['Bölge', 'Ulaşım', 'Turizm', 'Afet', 'Korunan', 'Ticaret'], count: 30, label: 'Coğrafya: bölgeler, ulaşım, turizm' },
      { kind: 'missed', count: 40, label: 'Bilemediğin kartları tekrar et' },
    ],
  },
  {
    day: 9,
    title: 'Genel prova',
    tasks: [
      { kind: 'exam', preset: 'tam', label: 'Tam deneme (120 soru, 130 dk)' },
      { kind: 'wrongs', label: 'Yanlışlarım' },
      { kind: 'missed', count: 60, label: 'Bilemediğin kartlar' },
    ],
  },
  {
    day: 10,
    title: 'Hafif tekrar ve dinlenme',
    tasks: [
      { kind: 'missed', count: 50, label: 'Son kez bilemediğin kartlar' },
      { kind: 'cards', count: 40, label: 'Karışık hızlı tekrar (tüm dersler)' },
      { kind: 'wrongs', label: 'Yanlışlarım son tur' },
      { kind: 'note', label: 'Kimlik ve sınav giriş belgesini hazırla, erken uyu' },
    ],
  },
];

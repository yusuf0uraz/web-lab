export type SubjectId =
  | 'tarih'
  | 'cografya'
  | 'vatandaslik'
  | 'guncel'
  | 'turkce'
  | 'matematik';

/** Ezber kartı: önde soru/ipucu, arkada cevap. */
export interface Card {
  /** Benzersiz, kalıcı kimlik (ör. "tarih-c-001"). İlerleme bu kimlikle saklanır, değiştirmeyin. */
  id: string;
  subject: SubjectId;
  /** Alt konu adı, ör. "Osmanlı Kuruluş Dönemi". */
  topic: string;
  front: string;
  back: string;
  /** İsteğe bağlı şifreleme / akılda tutma ipucu, ör. "KAHEM". */
  mnemonic?: string;
}

/** ÖSYM tarzı 5 şıklı soru. */
export interface Question {
  /** Benzersiz, kalıcı kimlik (ör. "tarih-q-001"). */
  id: string;
  subject: SubjectId;
  topic: string;
  /** Soru kökü. Öncüller için "\n" ile satır ayırın (ör. "I. ...\nII. ..."). */
  text: string;
  /** Tam olarak 5 şık (A-E), harf öneki olmadan. */
  options: [string, string, string, string, string];
  /** Doğru şıkkın indeksi: 0=A ... 4=E. */
  answer: 0 | 1 | 2 | 3 | 4;
  /** Neden doğru olduğunu ve çeldiricileri kısaca açıklar. */
  explanation: string;
}

export interface SubjectData {
  cards: Card[];
  questions: Question[];
}

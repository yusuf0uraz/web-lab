import { CARDS, QUESTIONS, type Card, type Question, type SubjectId } from './data';
import type { ExamPreset } from './data/plan';
import type { Progress } from './store';

export interface Filter {
  subject?: SubjectId;
  topics?: string[];
  /** true: konu adları birebir eşleşmeli (Konu seç ekranı). false: anahtar kelime araması (plan). */
  exact?: boolean;
}

const lower = (s: string) => s.toLocaleLowerCase('tr');

function matches<T extends { subject: SubjectId; topic: string }>(items: T[], f: Filter): T[] {
  const bySubject = f.subject ? items.filter((i) => i.subject === f.subject) : items;
  if (!f.topics?.length) return bySubject;
  const keys = f.topics.map(lower);
  const byTopic = bySubject.filter((i) =>
    keys.some((k) => (f.exact ? lower(i.topic) === k : lower(i.topic).includes(k))),
  );
  // Anahtar kelime hiç eşleşmezse dersin tamamına düş, boş oturum açılmasın.
  return byTopic.length ? byTopic : bySubject;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Önce hiç görülmemiş ve bilinmeyen kartlar, sonra seyrek tekrar edilenler. */
export function pickCards(p: Progress, f: Filter, n: number): Card[] {
  const pool = shuffle(matches(CARDS, f));
  const rank = (c: Card) => {
    const s = p.cards[c.id];
    if (!s) return 1; // yeni
    if (s.box === 0) return 0; // bilinemeyen: en önce
    return 1 + s.box;
  };
  return pool
    .map((c) => ({ c, r: rank(c), last: p.cards[c.id]?.last ?? 0 }))
    .sort((a, b) => a.r - b.r || a.last - b.last)
    .slice(0, n)
    .map((x) => x.c);
}

/** "Bilemedim" denmiş ve hâlâ öğrenilmemiş kartlar. */
export function missedCards(p: Progress, n: number): Card[] {
  return shuffle(CARDS.filter((c) => p.cards[c.id]?.box === 0)).slice(0, n);
}

export function pickQuestions(p: Progress, f: Filter, n: number): Question[] {
  const pool = shuffle(matches(QUESTIONS, f));
  const rank = (q: Question) => {
    const s = p.questions[q.id];
    if (!s) return 1;
    if (s.lastWrong) return 0;
    return 2 + s.right;
  };
  return pool
    .map((q) => ({ q, r: rank(q) }))
    .sort((a, b) => a.r - b.r)
    .slice(0, n)
    .map((x) => x.q);
}

export function wrongQuestions(p: Progress): Question[] {
  return shuffle(QUESTIONS.filter((q) => p.questions[q.id]?.lastWrong));
}

export interface ExamSpec {
  title: string;
  minutes: number;
  parts: { subject: SubjectId; count: number }[];
}

/** Gerçek KPSS Ortaöğretim dağılımı: GY 60 (Türkçe 30, Mat 30), GK 60 (Tar 27, Coğ 18, Vat 9, Gün 6). */
export const EXAMS: Record<ExamPreset, ExamSpec> = {
  gk: {
    title: 'Genel Kültür Denemesi',
    minutes: 65,
    parts: [
      { subject: 'tarih', count: 27 },
      { subject: 'cografya', count: 18 },
      { subject: 'vatandaslik', count: 9 },
      { subject: 'guncel', count: 6 },
    ],
  },
  gy: {
    title: 'Genel Yetenek Denemesi',
    minutes: 65,
    parts: [
      { subject: 'turkce', count: 30 },
      { subject: 'matematik', count: 30 },
    ],
  },
  tam: {
    title: 'Tam Deneme',
    minutes: 130,
    parts: [
      { subject: 'turkce', count: 30 },
      { subject: 'matematik', count: 30 },
      { subject: 'tarih', count: 27 },
      { subject: 'cografya', count: 18 },
      { subject: 'vatandaslik', count: 9 },
      { subject: 'guncel', count: 6 },
    ],
  },
};

/** Sınavdaki ders sırasını korur, her dersten önce görülmemiş sorular gelir. */
export function buildExam(p: Progress, spec: ExamSpec): Question[] {
  return spec.parts.flatMap((part) => {
    const pool = shuffle(QUESTIONS.filter((q) => q.subject === part.subject));
    const unseen = pool.filter((q) => !p.questions[q.id]);
    const seen = pool.filter((q) => p.questions[q.id]);
    return [...unseen, ...seen].slice(0, part.count);
  });
}

export function filterFromParams(params: URLSearchParams): Filter {
  const t = params.get('t');
  return {
    subject: (params.get('s') as SubjectId | null) ?? undefined,
    topics: t ? t.split('|') : undefined,
    exact: params.get('exact') === '1',
  };
}

export function countFromParams(params: URLSearchParams, fallback: number): number {
  const n = Number(params.get('n'));
  return Number.isFinite(n) && n > 0 ? Math.min(n, 200) : fallback;
}

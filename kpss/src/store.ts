import { useSyncExternalStore } from 'react';
import { MESSAGES, type Stats } from './data/motivation';

export interface CardState {
  /** Leitner kutusu: 0 = bilinmiyor, yükseldikçe daha seyrek gelir. */
  box: number;
  known: number;
  missed: number;
  last: number;
}

export interface QuestionState {
  right: number;
  wrong: number;
  /** Son denemede yanlış ya da boş bırakıldı mı? "Yanlışlarım" bunu kullanır. */
  lastWrong: boolean;
  last: number;
}

export interface DayLog {
  cards: number;
  known: number;
  questions: number;
  correct: number;
}

export interface ExamResult {
  date: number;
  title: string;
  total: number;
  correct: number;
  wrong: number;
  empty: number;
}

export interface Progress {
  v: 1;
  cards: Record<string, CardState>;
  questions: Record<string, QuestionState>;
  log: Record<string, DayLog>;
  tasksDone: Record<string, true>;
  messages: string[];
  exams: ExamResult[];
}

const KEY = 'kpss-kamp-v1';

function empty(): Progress {
  return { v: 1, cards: {}, questions: {}, log: {}, tasksDone: {}, messages: [], exams: [] };
}

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...empty(), ...(JSON.parse(raw) as Partial<Progress>) };
  } catch {
    // Özel sekme ya da bozuk veri: sıfırdan başla.
  }
  return empty();
}

let state: Progress = load();
let pending: string[] = [];
const listeners = new Set<() => void>();

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Depolama doluysa ya da kapalıysa ilerleme yalnızca bu oturumda kalır.
  }
}

function emit() {
  listeners.forEach((l) => l());
}

function update(fn: (draft: Progress) => void) {
  const next = structuredClone(state);
  fn(next);
  unlockMessages(next);
  state = next;
  save();
  emit();
}

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function dayLog(p: Progress): DayLog {
  const k = todayKey();
  return (p.log[k] ??= { cards: 0, known: 0, questions: 0, correct: 0 });
}

export function computeStats(p: Progress): Stats {
  let cardsKnown = 0;
  let cardsSeen = 0;
  for (const c of Object.values(p.cards)) {
    cardsSeen += c.known + c.missed;
    if (c.box >= 1) cardsKnown++;
  }
  let questions = 0;
  let correct = 0;
  for (const q of Object.values(p.questions)) {
    questions += q.right + q.wrong;
    correct += q.right;
  }
  const days = Object.entries(p.log).filter(([, l]) => l.cards + l.questions > 0).map(([k]) => k);
  let streak = 0;
  const d = new Date();
  if (!p.log[todayKey(d)]) d.setDate(d.getDate() - 1);
  while (days.includes(todayKey(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return {
    cardsSeen,
    cardsKnown,
    questions,
    correct,
    activeDays: days.length,
    streak,
    tasksDone: Object.keys(p.tasksDone).length,
    exams: p.exams.length,
    bestExamNet: Math.max(0, ...p.exams.map((e) => e.correct - e.wrong / 4)),
  };
}

function unlockMessages(p: Progress) {
  const stats = computeStats(p);
  for (const m of MESSAGES) {
    if (!p.messages.includes(m.id) && m.when(stats)) {
      p.messages.push(m.id);
      pending = [...pending, m.id];
    }
  }
}

// --- Eylemler ---

const BOX_MAX = 5;

export function answerCard(id: string, knew: boolean) {
  update((p) => {
    const c = (p.cards[id] ??= { box: 0, known: 0, missed: 0, last: 0 });
    if (knew) {
      c.known++;
      c.box = Math.min(BOX_MAX, c.box + 1);
    } else {
      c.missed++;
      c.box = 0;
    }
    c.last = Date.now();
    const l = dayLog(p);
    l.cards++;
    if (knew) l.known++;
  });
}

export function answerQuestion(id: string, correct: boolean) {
  update((p) => {
    const q = (p.questions[id] ??= { right: 0, wrong: 0, lastWrong: false, last: 0 });
    if (correct) q.right++;
    else q.wrong++;
    q.lastWrong = !correct;
    q.last = Date.now();
    const l = dayLog(p);
    l.questions++;
    if (correct) l.correct++;
  });
}

/** Deneme sonucunu tek seferde kaydeder (boşlar yanlışlara eklenir ama net hesabına girmez). */
export function saveExam(
  title: string,
  answers: { id: string; result: 'right' | 'wrong' | 'empty' }[],
) {
  update((p) => {
    const l = dayLog(p);
    let correct = 0;
    let wrong = 0;
    let emptyCount = 0;
    for (const a of answers) {
      const q = (p.questions[a.id] ??= { right: 0, wrong: 0, lastWrong: false, last: 0 });
      if (a.result === 'right') {
        q.right++;
        correct++;
        l.correct++;
      } else {
        q.wrong++;
        if (a.result === 'wrong') wrong++;
        else emptyCount++;
      }
      q.lastWrong = a.result !== 'right';
      q.last = Date.now();
      l.questions++;
    }
    p.exams.push({
      date: Date.now(),
      title,
      total: answers.length,
      correct,
      wrong,
      empty: emptyCount,
    });
  });
}

export function setTaskDone(key: string, done: boolean) {
  update((p) => {
    if (done) p.tasksDone[key] = true;
    else delete p.tasksDone[key];
  });
}

export function resetProgress() {
  state = empty();
  pending = [];
  save();
  emit();
}

/** Yeni açılan ve henüz gösterilmemiş motivasyon mesajları. */
export function usePendingMessages(): string[] {
  return useSyncExternalStore(subscribe, () => pending);
}

export function dismissMessage() {
  pending = pending.slice(1);
  emit();
}

// --- React ---

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, () => state);
}

export function getProgress(): Progress {
  return state;
}

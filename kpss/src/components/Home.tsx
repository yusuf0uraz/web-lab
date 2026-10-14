import { useEffect, useState } from 'react';
import { CAMP_DAYS, EXAM_DATE, STUDENT_NAME } from '../config';
import { CARDS, QUESTIONS, SUBJECTS } from '../data';
import { MESSAGES } from '../data/motivation';
import { PLAN, type Task } from '../data/plan';
import { href } from '../router';
import { computeStats, setTaskDone, useProgress, type Progress } from '../store';

const DAY_MS = 86_400_000;

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

/** Bugün kampın kaçıncı günü (1..10). Sınava 10 gün kala Gün 1 başlar. */
function currentDay(now: Date) {
  const daysLeft = Math.round((startOfDay(EXAM_DATE) - startOfDay(now)) / DAY_MS);
  return Math.min(CAMP_DAYS, Math.max(1, CAMP_DAYS + 1 - daysLeft));
}

function useNow(ms: number) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), ms);
    return () => clearInterval(t);
  }, [ms]);
  return now;
}

function taskHref(t: Task, key: string): string {
  switch (t.kind) {
    case 'cards':
      return href('/kart', { s: t.subject, t: t.topics?.join('|'), n: t.count, task: key });
    case 'quiz':
      return href('/test', { s: t.subject, t: t.topics?.join('|'), n: t.count, task: key });
    case 'exam':
      return href('/deneme', { p: t.preset, task: key });
    case 'wrongs':
      return href('/test', { mode: 'yanlis', task: key });
    case 'missed':
      return href('/kart', { mode: 'bilemedim', n: t.count, task: key });
    case 'note':
      return '';
  }
}

function Countdown() {
  const now = useNow(1000);
  const diff = EXAM_DATE.getTime() - now.getTime();
  if (diff <= 0) {
    return (
      <div className="countdown done">
        <strong>Sınav günü geldi. Başarılar {STUDENT_NAME}!</strong>
      </div>
    );
  }
  const d = Math.floor(diff / DAY_MS);
  const h = Math.floor((diff % DAY_MS) / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return (
    <div className="countdown" aria-label={`Sınava ${d} gün ${h} saat kaldı`}>
      {[
        [d, 'gün'],
        [h, 'saat'],
        [m, 'dakika'],
        [s, 'saniye'],
      ].map(([v, l]) => (
        <div key={l} className="cd-cell">
          <span className="cd-num">{String(v).padStart(2, '0')}</span>
          <span className="cd-label">{l}</span>
        </div>
      ))}
    </div>
  );
}

function DayCard({ day, p, today }: { day: (typeof PLAN)[number]; p: Progress; today: boolean }) {
  const [open, setOpen] = useState(today);
  const done = day.tasks.filter((_, i) => p.tasksDone[`${day.day}-${i}`]).length;
  const all = done === day.tasks.length;
  return (
    <section className={`day ${today ? 'today' : ''} ${all ? 'complete' : ''}`}>
      <button className="day-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="day-num">{all ? '✓' : day.day}</span>
        <span className="day-title">
          <small>{today ? 'BUGÜN · ' : ''}Gün {day.day}</small>
          {day.title}
        </span>
        <span className="day-count">
          {done}/{day.tasks.length}
        </span>
      </button>
      {open && (
        <ul className="tasks">
          {day.tasks.map((t, i) => {
            const key = `${day.day}-${i}`;
            const isDone = !!p.tasksDone[key];
            const link = taskHref(t, key);
            return (
              <li key={key} className={isDone ? 'done' : ''}>
                <button
                  className="check"
                  aria-label={isDone ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}
                  onClick={() => setTaskDone(key, !isDone)}
                >
                  {isDone ? '✓' : ''}
                </button>
                <span className="task-label">{t.label}</span>
                {link && (
                  <a className="btn small" href={link}>
                    {isDone ? 'Tekrar' : 'Başla'}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default function Home() {
  const p = useProgress();
  const now = useNow(60_000);
  const today = currentDay(now);
  const stats = computeStats(p);
  const wrongCount = QUESTIONS.filter((q) => p.questions[q.id]?.lastWrong).length;
  const missedCount = CARDS.filter((c) => p.cards[c.id]?.box === 0).length;
  const accuracy = stats.questions ? Math.round((stats.correct / stats.questions) * 100) : 0;

  return (
    <div className="page home">
      <header className="hero">
        <p className="hello">Merhaba {STUDENT_NAME} 👋</p>
        <h1>KPSS 10 Gün Kampı</h1>
        <Countdown />
      </header>

      <nav className="quick" aria-label="Hızlı başlat">
        <a className="quick-btn" href={href('/kart', { n: 30 })}>
          <span>🃏</span>Karışık kartlar
        </a>
        <a className="quick-btn" href={href('/test', { n: 20 })}>
          <span>✍️</span>Karışık test
        </a>
        <a className="quick-btn" href={href('/calis')}>
          <span>📚</span>Konu seç
        </a>
        <a className="quick-btn" href={href('/deneme')}>
          <span>⏱️</span>Deneme
        </a>
        <a className={`quick-btn ${wrongCount ? 'alert' : ''}`} href={href('/test', { mode: 'yanlis' })}>
          <span>🎯</span>Yanlışlarım <b>{wrongCount}</b>
        </a>
        <a className={`quick-btn ${missedCount ? 'alert' : ''}`} href={href('/kart', { mode: 'bilemedim', n: 40 })}>
          <span>🔁</span>Bilemediklerim <b>{missedCount}</b>
        </a>
      </nav>

      <section className="stats" aria-label="İlerleme">
        <div className="stat">
          <b>
            {stats.cardsKnown}
            <small>/{CARDS.length}</small>
          </b>
          <span>kart ezberde</span>
        </div>
        <div className="stat">
          <b>{stats.questions}</b>
          <span>soru çözüldü</span>
        </div>
        <div className="stat">
          <b>%{accuracy}</b>
          <span>doğruluk</span>
        </div>
        <div className="stat">
          <b>{stats.streak}🔥</b>
          <span>gün seri</span>
        </div>
      </section>

      <section className="subjects">
        {SUBJECTS.map((s) => {
          const cards = CARDS.filter((c) => c.subject === s.id);
          const known = cards.filter((c) => (p.cards[c.id]?.box ?? 0) >= 1).length;
          const qs = QUESTIONS.filter((q) => q.subject === s.id);
          let r = 0;
          let t = 0;
          for (const q of qs) {
            const st = p.questions[q.id];
            if (st) {
              r += st.right;
              t += st.right + st.wrong;
            }
          }
          const pct = cards.length ? Math.round((known / cards.length) * 100) : 0;
          return (
            <a key={s.id} className="subject-row" href={href('/calis', { s: s.id })}>
              <span className="subject-name">{s.name}</span>
              <span className="bar" aria-hidden="true">
                <span style={{ width: `${pct}%`, background: s.color }} />
              </span>
              <span className="subject-meta">
                %{pct} kart{t ? ` · %${Math.round((r / t) * 100)} test` : ''}
              </span>
            </a>
          );
        })}
      </section>

      <a className="letters-link" href={href('/mesajlar')}>
        💌 Mektuplar <b>{p.messages.length}</b>/{MESSAGES.length}
      </a>

      <h2 className="section-title">10 günlük plan</h2>
      <div className="plan">
        {PLAN.map((d) => (
          <DayCard key={d.day} day={d} p={p} today={d.day === today} />
        ))}
      </div>

      <footer className="foot">
        <p>İlerlemen bu cihazda saklanır. Safari'de Paylaş › Ana Ekrana Ekle ile uygulama gibi açabilirsin.</p>
      </footer>
    </div>
  );
}

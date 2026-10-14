import { useState, type CSSProperties } from 'react';
import { CARDS, QUESTIONS, SUBJECTS, subjectById, topicsOf, type SubjectId } from '../data';
import { href, useRoute } from '../router';
import { useProgress } from '../store';
import TopBar from './TopBar';

const SIZES = [10, 20, 40];

function SubjectTopics({ subject }: { subject: SubjectId }) {
  const p = useProgress();
  const [picked, setPicked] = useState<string[]>([]);
  const [size, setSize] = useState(20);
  const meta = subjectById[subject];
  const topics = topicsOf(subject);
  const toggle = (t: string) => setPicked((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));
  const params = { s: subject, t: picked.join('|'), n: size, exact: picked.length ? 1 : undefined };

  return (
    <>
      <h2 className="section-title" style={{ color: meta.color }}>
        {meta.name}
      </h2>
      <p className="muted">Konu seçmezsen tüm konulardan karışık gelir.</p>
      <div className="chips">
        {topics.map((t) => {
          const cards = CARDS.filter((c) => c.subject === subject && c.topic === t);
          const known = cards.filter((c) => (p.cards[c.id]?.box ?? 0) >= 1).length;
          const qs = QUESTIONS.filter((q) => q.subject === subject && q.topic === t).length;
          return (
            <button
              key={t}
              className={`chip ${picked.includes(t) ? 'on' : ''}`}
              onClick={() => toggle(t)}
              aria-pressed={picked.includes(t)}
            >
              {t}
              <small>
                {known}/{cards.length} kart · {qs} soru
              </small>
            </button>
          );
        })}
      </div>
      <div className="size-pick" role="group" aria-label="Kaç tane?">
        {SIZES.map((n) => (
          <button key={n} className={`chip ${size === n ? 'on' : ''}`} onClick={() => setSize(n)}>
            {n}
          </button>
        ))}
      </div>
      <div className="actions">
        <a className="btn primary big" href={href('/kart', params)}>
          🃏 Kartlarla çalış
        </a>
        <a className="btn big" href={href('/test', params)}>
          ✍️ Test çöz
        </a>
      </div>
    </>
  );
}

export default function Study() {
  const { params } = useRoute();
  const current = params.get('s') as SubjectId | null;
  return (
    <div className="page">
      <TopBar title="Konu seç" />
      <div className="subject-tabs">
        {SUBJECTS.map((s) => (
          <a
            key={s.id}
            href={href('/calis', { s: s.id })}
            className={`subject-tab ${current === s.id ? 'on' : ''}`}
            style={{ '--c': s.color } as CSSProperties}
          >
            {s.name}
            <small>{s.group}</small>
          </a>
        ))}
      </div>
      {current && subjectById[current] ? (
        <SubjectTopics key={current} subject={current} />
      ) : (
        <p className="muted center">Yukarıdan bir ders seç.</p>
      )}
    </div>
  );
}

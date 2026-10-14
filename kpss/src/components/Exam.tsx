import { useEffect, useRef, useState } from 'react';
import { QUESTIONS, SUBJECTS, questionById, type Question } from '../data';
import type { ExamPreset } from '../data/plan';
import { href } from '../router';
import { EXAMS, buildExam } from '../select';
import { getProgress, saveExam, setTaskDone, useProgress } from '../store';
import QuestionView from './QuestionView';
import TopBar from './TopBar';

const LIVE_KEY = 'kpss-kamp-deneme';

interface Live {
  preset: ExamPreset;
  ids: string[];
  answers: (number | null)[];
  endsAt: number;
  task: string | null;
}

function loadLive(): Live | null {
  try {
    const raw = localStorage.getItem(LIVE_KEY);
    return raw ? (JSON.parse(raw) as Live) : null;
  } catch {
    return null;
  }
}

function saveLive(l: Live | null) {
  try {
    if (l) localStorage.setItem(LIVE_KEY, JSON.stringify(l));
    else localStorage.removeItem(LIVE_KEY);
  } catch {
    // yoksay
  }
}

function fmt(ms: number) {
  const t = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  return `${h ? `${h}:` : ''}${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function Chooser() {
  const p = useProgress();
  const live = loadLive();
  return (
    <div className="page">
      <TopBar title="Deneme" />
      {live && (
        <a className="resume" href={href('/deneme', { p: live.preset })}>
          ⏳ Yarım kalan {EXAMS[live.preset].title} var, devam et ›
        </a>
      )}
      <p className="muted">
        Gerçek sınav gibi: süre işler, cevaplar sonda gösterilir. Net = Doğru − Yanlış ÷ 4.
      </p>
      <div className="exam-list">
        {(Object.keys(EXAMS) as ExamPreset[]).map((k) => {
          const spec = EXAMS[k];
          const total = spec.parts.reduce((a, b) => a + b.count, 0);
          return (
            <a key={k} className="exam-option" href={href('/deneme', { p: k })}>
              <b>{spec.title}</b>
              <span>
                {total} soru · {spec.minutes} dakika
              </span>
              <small>{spec.parts.map((x) => `${SUBJECTS.find((s) => s.id === x.subject)!.name} ${x.count}`).join(' · ')}</small>
            </a>
          );
        })}
      </div>
      {p.exams.length > 0 && (
        <>
          <h2 className="section-title">Geçmiş denemeler</h2>
          <ul className="history">
            {p.exams
              .slice()
              .reverse()
              .map((e) => (
                <li key={e.date}>
                  <span>
                    {e.title}
                    <small>{new Date(e.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })}</small>
                  </span>
                  <b>{(e.correct - e.wrong / 4).toFixed(2)} net</b>
                  <small>
                    {e.correct}D {e.wrong}Y {e.empty}B
                  </small>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}

function Results({ qs, answers, title }: { qs: Question[]; answers: (number | null)[]; title: string }) {
  const [filter, setFilter] = useState<'yanlis' | 'hepsi'>('yanlis');
  const correct = qs.filter((q, i) => answers[i] === q.answer).length;
  const empty = answers.filter((a) => a === null).length;
  const wrong = qs.length - correct - empty;
  const net = correct - wrong / 4;
  const shown = qs
    .map((q, i) => ({ q, i }))
    .filter(({ q, i }) => filter === 'hepsi' || answers[i] !== q.answer);

  return (
    <div className="page">
      <TopBar title={title} />
      <div className="result-hero">
        <div className="net">{net.toFixed(2)}</div>
        <div>net</div>
        <p>
          <b className="c-ok">{correct} doğru</b> · <b className="c-bad">{wrong} yanlış</b> · {empty} boş
        </p>
      </div>
      <table className="breakdown">
        <thead>
          <tr>
            <th>Ders</th>
            <th>D</th>
            <th>Y</th>
            <th>B</th>
            <th>Net</th>
          </tr>
        </thead>
        <tbody>
          {SUBJECTS.map((s) => {
            const idx = qs.map((q, i) => (q.subject === s.id ? i : -1)).filter((i) => i >= 0);
            if (!idx.length) return null;
            const d = idx.filter((i) => answers[i] === qs[i].answer).length;
            const b = idx.filter((i) => answers[i] === null).length;
            const y = idx.length - d - b;
            return (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{d}</td>
                <td>{y}</td>
                <td>{b}</td>
                <td>
                  <b>{(d - y / 4).toFixed(2)}</b>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="actions">
        <a className="btn primary" href={href('/test', { mode: 'yanlis' })}>
          Yanlışlarımı çöz
        </a>
        <a className="btn" href={href('/')}>
          Ana sayfa
        </a>
      </div>
      <div className="size-pick" role="group" aria-label="Gösterilecek sorular">
        <button className={`chip ${filter === 'yanlis' ? 'on' : ''}`} onClick={() => setFilter('yanlis')}>
          Yanlış ve boşlar
        </button>
        <button className={`chip ${filter === 'hepsi' ? 'on' : ''}`} onClick={() => setFilter('hepsi')}>
          Tüm sorular
        </button>
      </div>
      {shown.map(({ q, i }) => (
        <QuestionView key={q.id} q={q} index={i} total={qs.length} choice={answers[i]} reveal />
      ))}
    </div>
  );
}

function Running({ live, onFinish }: { live: Live; onFinish: (answers: (number | null)[]) => void }) {
  const [answers, setAnswers] = useState(live.answers);
  const [i, setI] = useState(() => Math.max(0, live.answers.findIndex((a) => a === null)));
  const [now, setNow] = useState(() => Date.now());
  const [grid, setGrid] = useState(false);
  const qs = live.ids.map((id) => questionById.get(id)!).filter(Boolean);
  const left = live.endsAt - now;

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const fired = useRef(false);
  useEffect(() => {
    if (left <= 0 && !fired.current) {
      fired.current = true;
      onFinish(answers);
    }
  }, [left, answers, onFinish]);

  const pick = (k: number) => {
    const next = [...answers];
    next[i] = next[i] === k ? null : k;
    setAnswers(next);
    saveLive({ ...live, answers: next });
  };
  const answeredCount = answers.filter((a) => a !== null).length;
  const finish = () => {
    const emptyCount = qs.length - answeredCount;
    if (window.confirm(emptyCount ? `${emptyCount} soru boş. Denemeyi bitirmek istiyor musun?` : 'Denemeyi bitir?')) {
      onFinish(answers);
    }
  };

  return (
    <div className="page">
      <TopBar
        title={EXAMS[live.preset].title}
        right={<span className={`pill timer ${left < 5 * 60_000 ? 'urgent' : ''}`}>⏱ {fmt(left)}</span>}
      />
      <div className="exam-bar">
        <button className="btn small" onClick={() => setGrid((g) => !g)}>
          {grid ? 'Soruya dön' : `Soru listesi (${answeredCount}/${qs.length})`}
        </button>
        <button className="btn small danger" onClick={finish}>
          Bitir
        </button>
      </div>
      {grid ? (
        <div className="q-grid">
          {qs.map((q, k) => (
            <button
              key={q.id}
              className={`${answers[k] !== null ? 'filled' : ''} ${k === i ? 'current' : ''}`}
              onClick={() => {
                setI(k);
                setGrid(false);
              }}
            >
              {k + 1}
            </button>
          ))}
        </div>
      ) : (
        <>
          <QuestionView q={qs[i]} index={i} total={qs.length} choice={answers[i]} reveal={false} onPick={pick} />
          <p className="muted center small">Seçtiğin şıkka tekrar dokunursan boş bırakılır.</p>
          <div className="answer-row">
            <button className="btn big" disabled={i === 0} onClick={() => setI(i - 1)}>
              ‹ Önceki
            </button>
            {i + 1 < qs.length ? (
              <button className="btn primary big" onClick={() => setI(i + 1)}>
                Sonraki ›
              </button>
            ) : (
              <button className="btn primary big" onClick={finish}>
                Bitir
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default function Exam({ params }: { params: URLSearchParams }) {
  const preset = params.get('p') as ExamPreset | null;
  const [live, setLive] = useState<Live | null>(() => {
    const l = loadLive();
    return l && l.preset === preset ? l : null;
  });
  const [done, setDone] = useState<{ qs: Question[]; answers: (number | null)[] } | null>(null);

  if (!preset || !EXAMS[preset]) return <Chooser />;
  const spec = EXAMS[preset];

  if (done) return <Results qs={done.qs} answers={done.answers} title={spec.title} />;

  if (!live) {
    const count = spec.parts.reduce(
      (a, part) => a + Math.min(part.count, QUESTIONS.filter((q) => q.subject === part.subject).length),
      0,
    );
    const start = () => {
      const qs = buildExam(getProgress(), spec);
      const l: Live = {
        preset,
        ids: qs.map((q) => q.id),
        answers: qs.map(() => null),
        endsAt: Date.now() + spec.minutes * 60_000,
        task: params.get('task'),
      };
      saveLive(l);
      setLive(l);
    };
    const total = spec.parts.reduce((a, b) => a + b.count, 0);
    return (
      <div className="page">
        <TopBar title={spec.title} />
        <div className="empty">
          <p className="big-emoji">⏱️</p>
          <h2>{spec.title}</h2>
          <p>
            {count} soru · {spec.minutes} dakika
            {count < total ? ` (bankada şimdilik ${count} uygun soru var)` : ''}
          </p>
          <p className="muted">Süre başladıktan sonra sayfayı kapatsan bile kaldığın yerden devam edebilirsin.</p>
          <button className="btn primary big" onClick={start} disabled={count === 0}>
            Süreyi başlat
          </button>
        </div>
      </div>
    );
  }

  const finish = (answers: (number | null)[]) => {
    const qs = live.ids.map((id) => questionById.get(id)!).filter(Boolean);
    saveExam(
      spec.title,
      qs.map((q, i) => ({
        id: q.id,
        result: answers[i] === null ? 'empty' : answers[i] === q.answer ? 'right' : 'wrong',
      })),
    );
    if (live.task) setTaskDone(live.task, true);
    saveLive(null);
    setLive(null);
    setDone({ qs, answers });
    window.scrollTo(0, 0);
  };

  return <Running live={live} onFinish={finish} />;
}

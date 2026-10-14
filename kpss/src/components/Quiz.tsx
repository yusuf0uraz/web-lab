import { useState } from 'react';
import { subjectById, type Question } from '../data';
import { go, href } from '../router';
import { countFromParams, filterFromParams, pickQuestions, wrongQuestions } from '../select';
import { answerQuestion, getProgress, setTaskDone } from '../store';
import QuestionView from './QuestionView';
import TopBar from './TopBar';

function initial(params: URLSearchParams): Question[] {
  const p = getProgress();
  if (params.get('mode') === 'yanlis') return wrongQuestions(p).slice(0, countFromParams(params, 40));
  return pickQuestions(p, filterFromParams(params), countFromParams(params, 20));
}

export default function Quiz({ params }: { params: URLSearchParams }) {
  const [qs] = useState(() => initial(params));
  const [i, setI] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const task = params.get('task');
  const wrongMode = params.get('mode') === 'yanlis';
  const title = wrongMode ? 'Yanlışlarım' : 'Test';

  if (qs.length === 0) {
    return (
      <div className="page">
        <TopBar title={title} />
        <div className="empty">
          <p className="big-emoji">🎉</p>
          <p>{wrongMode ? 'Şu an yanlışın yok. Yeni sorular çözerek devam et!' : 'Bu seçimde soru bulunamadı.'}</p>
          <a className="btn primary" href={href('/test', { n: 20 })}>
            Karışık test çöz
          </a>
        </div>
      </div>
    );
  }

  if (i >= qs.length) {
    const correct = results.filter(Boolean).length;
    const wrongQs = qs.filter((_, k) => !results[k]);
    return (
      <div className="page">
        <TopBar title={title} />
        <div className="empty">
          <p className="big-emoji">{correct === qs.length ? '🏆' : correct / qs.length >= 0.7 ? '🌟' : '💪'}</p>
          <h2>
            {qs.length} soruda {correct} doğru
          </h2>
          <p>Başarı: %{Math.round((correct / qs.length) * 100)}</p>
          <div className="actions">
            {wrongQs.length > 0 && (
              <button className="btn primary" onClick={() => go('/test', { mode: 'yanlis', r: Date.now() })}>
                Yanlışları tekrar çöz ({wrongQs.length})
              </button>
            )}
            <button className="btn" onClick={() => go('/test', { ...Object.fromEntries(params), r: Date.now() })}>
              Yeni test
            </button>
            <a className="btn" href={href('/')}>
              Ana sayfa
            </a>
          </div>
        </div>
      </div>
    );
  }

  const q = qs[i];
  const pick = (k: number) => {
    if (choice !== null) return;
    setChoice(k);
    const ok = k === q.answer;
    answerQuestion(q.id, ok);
    setResults((r) => [...r, ok]);
  };
  const next = () => {
    setChoice(null);
    setI(i + 1);
    if (i + 1 >= qs.length && task) setTaskDone(task, true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="page">
      <TopBar
        title={title}
        right={
          <span className="pill">
            ✓ {results.filter(Boolean).length} · ✗ {results.filter((r) => !r).length}
          </span>
        }
      />
      <div className="progress">
        <span style={{ width: `${(i / qs.length) * 100}%`, background: subjectById[q.subject].color }} />
      </div>
      <QuestionView q={q} index={i} total={qs.length} choice={choice} reveal={choice !== null} onPick={pick} />
      {choice !== null && (
        <div className="sticky-next">
          <button className="btn primary big" onClick={next}>
            {i + 1 < qs.length ? 'Sonraki soru ›' : 'Sonucu gör'}
          </button>
        </div>
      )}
    </div>
  );
}

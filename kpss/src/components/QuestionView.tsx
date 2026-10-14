import { subjectById, type Question } from '../data';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

interface Props {
  q: Question;
  index: number;
  total: number;
  choice: number | null;
  /** true: doğru cevabı ve açıklamayı göster. */
  reveal: boolean;
  onPick?: (k: number) => void;
}

export default function QuestionView({ q, index, total, choice, reveal, onPick }: Props) {
  const meta = subjectById[q.subject];
  return (
    <article className="question">
      <div className="fc-meta">
        <span className="tag" style={{ background: meta.color }}>
          {meta.name}
        </span>
        <span className="fc-topic">{q.topic}</span>
        <span className="q-num">
          {index + 1}/{total}
        </span>
      </div>
      <p className="q-text">{q.text}</p>
      <ol className="options">
        {q.options.map((o, k) => {
          let cls = 'option';
          if (choice === k) cls += ' chosen';
          if (reveal && k === q.answer) cls += ' correct';
          else if (reveal && choice === k) cls += ' wrong';
          return (
            <li key={k}>
              <button className={cls} onClick={() => onPick?.(k)} disabled={!onPick || reveal} aria-pressed={choice === k}>
                <span className="letter-mark">{LETTERS[k]}</span>
                <span>{o}</span>
              </button>
            </li>
          );
        })}
      </ol>
      {reveal && (
        <div className={`explain ${choice === q.answer ? 'ok' : 'bad'}`} role="status">
          <b>
            {choice === null ? 'Boş bıraktın.' : choice === q.answer ? 'Doğru! 🎉' : 'Yanlış.'} Doğru cevap: {LETTERS[q.answer]}
          </b>
          <p>{q.explanation}</p>
        </div>
      )}
    </article>
  );
}

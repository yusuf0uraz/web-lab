import { MESSAGES } from '../data/motivation';
import { useProgress } from '../store';
import TopBar from './TopBar';

export default function Letters() {
  const p = useProgress();
  const open = MESSAGES.filter((m) => p.messages.includes(m.id));
  const locked = MESSAGES.length - open.length;
  return (
    <div className="page">
      <TopBar title="Mektuplar" />
      <p className="muted">
        Çalıştıkça yeni mektuplar açılır. {locked > 0 ? `${locked} mektup daha seni bekliyor.` : 'Hepsini açtın!'}
      </p>
      <div className="letters">
        {open
          .slice()
          .reverse()
          .map((m) => (
            <article className="letter" key={m.id}>
              <div className="letter-badge">💌 {m.badge}</div>
              <h2>{m.title}</h2>
              <p>{m.body}</p>
            </article>
          ))}
        {Array.from({ length: Math.min(locked, 3) }, (_, i) => (
          <div className="letter locked" key={i} aria-hidden="true">
            🔒 Kilitli mektup
          </div>
        ))}
      </div>
    </div>
  );
}

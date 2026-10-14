import { MESSAGES } from '../data/motivation';

export default function MessagePopup({ id, onClose }: { id: string; onClose: () => void }) {
  const m = MESSAGES.find((x) => x.id === id);
  if (!m) return null;
  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="msg-title" onClick={onClose}>
      <div className="letter pop" onClick={(e) => e.stopPropagation()}>
        <div className="letter-badge">💌 {m.badge}</div>
        <h2 id="msg-title">{m.title}</h2>
        <p>{m.body}</p>
        <button className="btn primary" onClick={onClose} autoFocus>
          Devam et
        </button>
      </div>
    </div>
  );
}

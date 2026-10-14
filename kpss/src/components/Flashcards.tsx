import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';
import { cardById, subjectById, type Card } from '../data';
import { go, href } from '../router';
import { countFromParams, filterFromParams, missedCards, pickCards } from '../select';
import { answerCard, getProgress, setTaskDone } from '../store';
import TopBar from './TopBar';

const SWIPE = 90;
/** Bilinemeyen kart kaç kart sonra tekrar gelsin. */
const REPEAT_GAP = 4;

function initialDeck(params: URLSearchParams): Card[] {
  const p = getProgress();
  const n = countFromParams(params, 30);
  return params.get('mode') === 'bilemedim' ? missedCards(p, n) : pickCards(p, filterFromParams(params), n);
}

export default function Flashcards({ params }: { params: URLSearchParams }) {
  const [deck] = useState(() => initialDeck(params));
  const [queue, setQueue] = useState(() => deck.map((c) => c.id));
  const [flipped, setFlipped] = useState(false);
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [missed, setMissed] = useState<Set<string>>(() => new Set());
  const [answered, setAnswered] = useState(0);
  const start = useRef<{ x: number; y: number } | null>(null);
  const task = params.get('task');

  const card = queue.length ? cardById.get(queue[0]) : undefined;

  const answer = useCallback(
    (knew: boolean) => {
      if (!card) return;
      answerCard(card.id, knew);
      setAnswered((a) => a + 1);
      setFlipped(false);
      setDx(0);
      if (!knew) setMissed((m) => new Set(m).add(card.id));
      const rest = queue.slice(1);
      if (!knew) rest.splice(Math.min(REPEAT_GAP, rest.length), 0, card.id);
      setQueue(rest);
      if (rest.length === 0 && task) setTaskDone(task, true);
    },
    [card, queue, task],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === 'ArrowRight') answer(true);
      else if (e.key === 'ArrowLeft') answer(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [answer]);

  const onDown = (e: PointerEvent) => {
    start.current = { x: e.clientX, y: e.clientY };
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onMove = (e: PointerEvent) => {
    if (!start.current) return;
    setDx(e.clientX - start.current.x);
  };
  const onUp = (e: PointerEvent) => {
    if (!start.current) return;
    const moved = e.clientX - start.current.x;
    const movedY = e.clientY - start.current.y;
    start.current = null;
    setDragging(false);
    if (moved > SWIPE) answer(true);
    else if (moved < -SWIPE) answer(false);
    else {
      setDx(0);
      if (Math.abs(moved) < 10 && Math.abs(movedY) < 10) setFlipped((f) => !f);
    }
  };

  const title = params.get('mode') === 'bilemedim' ? 'Bilemediklerim' : 'Kartlar';

  if (deck.length === 0) {
    return (
      <div className="page">
        <TopBar title={title} />
        <div className="empty">
          <p className="big-emoji">🎉</p>
          <p>Burada tekrar edilecek kart yok. Harika gidiyorsun!</p>
          <a className="btn primary" href={href('/kart', { n: 30 })}>
            Karışık kartlara geç
          </a>
        </div>
      </div>
    );
  }

  if (!card) {
    const firstTry = deck.length - missed.size;
    return (
      <div className="page">
        <TopBar title={title} />
        <div className="empty">
          <p className="big-emoji">{missed.size === 0 ? '🌟' : '💪'}</p>
          <h2>Tur bitti!</h2>
          <p>
            {deck.length} karttan <b>{firstTry}</b> tanesini ilk seferde bildin.
            {missed.size > 0 && ` ${missed.size} kartı tekrar ederek öğrendin, yarın yine karşına çıkacaklar.`}
          </p>
          <div className="actions">
            <button className="btn primary" onClick={() => go('/kart', { ...Object.fromEntries(params), r: Date.now() })}>
              Yeni tur
            </button>
            <a className="btn" href={href('/')}>
              Ana sayfa
            </a>
          </div>
        </div>
      </div>
    );
  }

  const meta = subjectById[card.subject];
  const total = deck.length;
  const doneCount = total - new Set(queue).size;
  const tilt = Math.max(-12, Math.min(12, dx / 12));
  const hint = dx > 30 ? 'right' : dx < -30 ? 'left' : '';

  return (
    <div className="page cards-page">
      <TopBar title={title} right={<span className="pill">{answered} cevap</span>} />
      <div className="progress" aria-label={`${doneCount}/${total} kart tamamlandı`}>
        <span style={{ width: `${(doneCount / total) * 100}%` }} />
      </div>
      <p className="muted center small">
        {doneCount}/{total} · Kalan {queue.length}
        {missed.has(card.id) ? ' · 🔁 tekrar' : ''}
      </p>

      <div className="card-stage">
        <div
          key={`${card.id}-${answered}`}
          className={`flashcard ${flipped ? 'flipped' : ''} ${hint}`}
          style={{
            transform: dx ? `translateX(${dx}px) rotate(${tilt}deg)` : undefined,
            transition: dragging ? 'none' : undefined,
            borderTopColor: meta.color,
          }}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={() => {
            start.current = null;
            setDragging(false);
            setDx(0);
          }}
          role="button"
          tabIndex={0}
          aria-label={flipped ? 'Cevabı gizle' : 'Cevabı göster'}
        >
          <div className="fc-meta">
            <span className="tag" style={{ background: meta.color }}>
              {meta.name}
            </span>
            <span className="fc-topic">{card.topic}</span>
          </div>
          <p className="fc-front">{card.front}</p>
          {flipped ? (
            <div className="fc-back">
              <p>{card.back}</p>
              {card.mnemonic && <p className="mnemonic">💡 {card.mnemonic}</p>}
            </div>
          ) : (
            <p className="fc-tap">Cevabı görmek için dokun</p>
          )}
          <span className="swipe-label left">Bilemedim</span>
          <span className="swipe-label right">Bildim</span>
        </div>
      </div>

      <div className="answer-row">
        <button className="btn miss big" onClick={() => answer(false)}>
          ✗ Bilemedim
        </button>
        <button className="btn know big" onClick={() => answer(true)}>
          ✓ Bildim
        </button>
      </div>
      <p className="muted center small">Sağa kaydır: bildim · Sola kaydır: bilemedim</p>
    </div>
  );
}

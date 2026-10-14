import type { ReactNode } from 'react';
import { href } from '../router';

export default function TopBar({ title, right }: { title: string; right?: ReactNode }) {
  return (
    <header className="topbar">
      <a className="back" href={href('/')} aria-label="Ana sayfaya dön">
        ‹ Ana sayfa
      </a>
      <h1>{title}</h1>
      <div className="topbar-right">{right}</div>
    </header>
  );
}

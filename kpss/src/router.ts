import { useSyncExternalStore } from 'react';

function subscribe(l: () => void) {
  window.addEventListener('hashchange', l);
  return () => window.removeEventListener('hashchange', l);
}

const getHash = () => window.location.hash.slice(1) || '/';

export interface Route {
  path: string;
  params: URLSearchParams;
  /** Aynı rotaya yeniden girildiğinde oturumu sıfırlamak için anahtar. */
  key: string;
}

export function useRoute(): Route {
  const hash = useSyncExternalStore(subscribe, getHash);
  const [path, query = ''] = hash.split('?');
  return { path, params: new URLSearchParams(query), key: hash };
}

export function href(path: string, params?: Record<string, string | number | undefined>) {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(params ?? {})) if (v !== undefined && v !== '') q.set(k, String(v));
  const s = q.toString();
  return `#${path}${s ? `?${s}` : ''}`;
}

export function go(path: string, params?: Record<string, string | number | undefined>) {
  window.location.hash = href(path, params).slice(1);
  window.scrollTo(0, 0);
}

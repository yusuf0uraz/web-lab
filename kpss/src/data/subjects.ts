import type { SubjectId } from './types';

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  short: string;
  color: string;
  group: 'Genel Yetenek' | 'Genel Kültür';
}

export const SUBJECTS: SubjectMeta[] = [
  { id: 'tarih', name: 'Tarih', short: 'TAR', color: '#d9534f', group: 'Genel Kültür' },
  { id: 'cografya', name: 'Coğrafya', short: 'COĞ', color: '#2e9d6a', group: 'Genel Kültür' },
  { id: 'vatandaslik', name: 'Vatandaşlık', short: 'VAT', color: '#3c6fd1', group: 'Genel Kültür' },
  { id: 'guncel', name: 'Güncel Bilgiler', short: 'GÜN', color: '#c98a16', group: 'Genel Kültür' },
  { id: 'turkce', name: 'Türkçe', short: 'TÜR', color: '#8b4fc9', group: 'Genel Yetenek' },
  { id: 'matematik', name: 'Matematik', short: 'MAT', color: '#e0679a', group: 'Genel Yetenek' },
];

export const subjectById = Object.fromEntries(SUBJECTS.map((s) => [s.id, s])) as Record<
  SubjectId,
  SubjectMeta
>;

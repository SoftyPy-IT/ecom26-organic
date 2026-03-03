import { api } from '../lib/TApi';

export const highlightProduct = (query?: string) =>
  api.get<any>(`/section/all?${query ?? ''}`, {
    tags: ['highlightProduct'],
    revalidate: 60,
  });

export const highlightProductBySlug = (slug: string) =>
  api.get<any>(`/section/${slug}`, {
    tags: ['products'],
    revalidate: 60,
  });

import { api } from '../lib/TApi';

export const getAllCategories = (query?: string) =>
  api.get<any>(`/category/main?${query ?? ''}`, {
    tags: ['categories'],
    revalidate: 60,
  });

export const getCategoryBySlug = (slug: string) =>
  api.get<any>(`/category/${slug}`, {
    tags: ['category'],
    revalidate: 60,
  });

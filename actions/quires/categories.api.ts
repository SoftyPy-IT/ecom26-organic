import { api } from '../lib/TApi';

export const getAllCategories = (query?: string) =>
  api.get<any>(`/category/main?${query ?? ''}`, {
    tags: ['categories'],
    revalidate: 60,
  });

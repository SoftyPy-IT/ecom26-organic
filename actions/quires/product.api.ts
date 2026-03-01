import { api } from '../lib/TApi';

export const getAllProducts = (query?: string) =>
  api.get<any>(`/product/shop?${query ?? ''}`, {
    tags: ['products'],
    revalidate: 60,
  });

export const getProductById = (id: string) =>
  api.get<any>(`/product/${id}`, {
    tags: ['products'],
    revalidate: 60,
  });

export const getProductsByCategory = (category: string, query?: string) =>
  api.get<any>(`/product/category/${category}?${query ?? ''}`, {
    tags: ['products'],
    revalidate: 60,
  });


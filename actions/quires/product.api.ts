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

export const getProductBySlug = (slug: string) =>
  api.get<any>(`/product/details/${slug}`, {
    tags: ['products'],
    revalidate: 60,
  });

export const getProductsByCategory = (query?: string) =>
  api.get<any>(`/category/products?${query ?? ''}`, {
    tags: ['products'],
    revalidate: 60,
  });


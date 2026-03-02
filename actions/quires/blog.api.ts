import { api } from '../lib/TApi';

export const getAllBlogs = (query?: string) =>
  api.get<any>(`/blog/all?${query ?? ''}`, {
    tags: ['blogs'],
    revalidate: 60,
  });

export const getBlogBySlug = (slug: string) =>
  api.get<any>(`/blog/${slug}`, {
    tags: ['blogs'],
    revalidate: 60,
  });

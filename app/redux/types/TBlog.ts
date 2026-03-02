export interface TBlogResponse {
  success: boolean;
  message: string;
  meta: TMeta;
  data: TBlog[];
}

export interface TMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface TBlog {
  _id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  content: string;
  category: string;
  createdAt: string;
}

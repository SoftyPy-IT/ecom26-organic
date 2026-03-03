export interface IApiResponse {
  success: boolean;
  message: string;
  meta: IMeta;
  data: ISection[];
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface ISection {
  _id: string;
  title: string;
  subTitle: string;
  description: string;
  products: IProduct[];
  status: 'active' | 'inactive';
  type: string; // e.g. "product"
  style: string; // e.g. "grid"
  row: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface IProduct {
  _id: string;
  name: string;
  code: string;
  slug: string;
  mainCategory: ICategory;
  category: ICategory;
  subCategory?: ICategory;
  price: number;
  short_description: string;
  thumbnail: string;
  images: string[];
  discount_price: number;
  total_reviews: number;
  is_stockout: boolean;
  id: string;
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  id: string;
}

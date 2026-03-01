export interface Product {
  _id: string;
  id: string;
  name: string;
  code: string;
  slug: string;

  reviews: any[];

  mainCategory: Category;
  category: Category;
  subCategory?: Category;

  productCost: number;
  price: number;
  discount_price: number;

  taxMethod: string;

  description: string;
  short_description: string;

  thumbnail: string;
  images: string[];

  tags: string[];

  stock: number;
  quantity: number;

  folder: string;

  is_available: boolean;
  is_featured: boolean;
  is_active: boolean;
  isDeleted: boolean;
  is_stockout: boolean;

  total_sale: number;
  rating: number;
  total_reviews: number;

  variants: any[];
  hasVariants: boolean;

  meta_title: string;
  meta_description: string;
  meta_keywords: string[];

  faq: any[];

  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  id: string;
  name: string;
  slug: string;
}

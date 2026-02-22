export interface Product {
  _id: string;
  id: string;
  name: string;
  code: string;
  slug: string;
  reviews: any[];
  mainCategory: string;
  category: string;
  productCost: number;
  price: number;
  taxMethod: string;
  description: string;
  short_description: string;
  thumbnail: string;
  images: string[];
  discount_price: number;
  tags: string[];
  stock: number;
  quantity: number;
  folder: string;
  is_available: boolean;
  is_featured: boolean;
  is_active: boolean;
  total_sale: number;
  rating: number;
  faq: any[];
  variants: Variant[];
  hasVariants: boolean;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  total_reviews: number;
  is_stockout: boolean;
}

export interface Variant {
  name: string;
  values: VariantValue[];
}

export interface VariantValue {
  name: string;
  value: string;
  quantity: number;
}

export interface RelatedProduct {
  _id: string;
  name: string;
  slug: string;
  reviews: any[];
  price: number;
  thumbnail: string;
  discount_price: number;
  rating: number;
  category: string;
  mainCategory: string;
}

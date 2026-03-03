export interface IProductDetailsResponse {
  success: boolean;
  message: string;
  data: {
    product: IProductDetails;
    relatedProducts: IRelatedProduct[];
  };
}

/* ===================== PRODUCT DETAILS ===================== */

export interface IProductDetails {
  _id: string;
  name: string;
  code: string;
  slug: string;

  reviews: IReview[];

  mainCategory: string; // category id
  category: string; // category id

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
  isDeleted: boolean;

  total_sale: number;
  rating: number;

  faq: IFaq[];
  variants: IVariant[];
  hasVariants: boolean;

  meta_title: string;
  meta_description: string;
  meta_keywords: string[];

  createdAt: string;
  updatedAt: string;

  __v: number;

  total_reviews: number;
  is_stockout: boolean;

  id: string;
}

/* ===================== RELATED PRODUCT ===================== */

export interface IRelatedProduct {
  _id: string;
  name: string;
  slug: string;
  reviews: IReview[];

  price: number;
  thumbnail: string;
  discount_price: number;
  rating: number;

  category: string;
  subCategory?: string;
  mainCategory: string;
}

/* ===================== SUPPORTING TYPES ===================== */

export interface IReview {
  // Define properly if review structure exists
  [key: string]: any;
}

export interface IFaq {
  question?: string;
  answer?: string;
  [key: string]: any;
}

export interface IVariant {
  // Define properly if variant structure exists
  [key: string]: any;
}

export interface ShopProductsResponse {
  success: boolean;
  message: string;
  data: ShopProductsData;
}

export interface ShopProductsData {
  data: ShopProduct[];
  meta: PaginationMeta;
  filterOptions: FilterOptions;
}

export interface ShopProduct {
  _id: string;
  name: string;
  code: string;
  slug: string;
  reviews: Review[];
  price: number;
  thumbnail: string;
  discount_price: number;
  rating: number;
  category: string;
  reviewCount: number;
  subCategory?: string;
  mainCategory: string;
}

export interface Review {
  [key: string]: any;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface FilterOptions {
  priceRange: PriceRange;
  variants: Record<string, any>;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface CategoryItem {
  _id?: string;
  name?: string;
  image?: string;
  slug?: string;
  categories?: CategoryWrapper[];
  serial?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface CategoryWrapper {
  category: Category;
  serial: number;
  _id: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  subCategories: SubCategoryWrapper[];
  mainCategory: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SubCategoryWrapper {
  subCategory: SubCategory;
  serial: number;
  _id: string;
}

export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  category: string;
}

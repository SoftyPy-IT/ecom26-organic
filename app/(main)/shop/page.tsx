import { getAllProducts, getProductBySlug } from '@/actions/quires/product.api';
import Shop from './__components/Shop';
import DataNotFound from '@/app/components/shared/DataNotFound';
import { getAllCategories } from '@/actions/quires/categories.api';
import { highlightProductBySlug } from '@/actions/quires/highlighProduct.api';

interface PageProps {
  searchParams: Promise<{
    searchTerm: string;
    limit: string;
    page: string;
    sort: string;
    range: string;
  }>;
}

export default async function page({ searchParams }: PageProps) {
  const { searchTerm, limit, page, sort, range } = await searchParams;

  const query = new URLSearchParams();
  if (searchTerm) query.set('searchTerm', searchTerm);
  if (limit) query.set('limit', limit);
  if (page) query.set('page', page);
  if (sort) query.set('sort', sort);
  if (range) query.set('range', range);

  const { data } = await getAllProducts(query.toString());
  const { data: categoryData } = await getAllCategories();
  const { data: productData } = await highlightProductBySlug('69a6858120bda1bb3a8127b4');

  if (!data) {
    return <DataNotFound />;
  }


  return <Shop products={data} categoryData={categoryData} productData={productData?.products} />;
}

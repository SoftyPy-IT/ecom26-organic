import Container from '@/app/components/shared/Container'
import { getProductsByCategory } from '@/actions/quires/product.api';
import Shop from '../../shop/__components/Shop';
import { getAllCategories } from '@/actions/quires/categories.api';
import { highlightProductBySlug } from '@/actions/quires/highlighProduct.api';
import DataNotFound from '@/app/components/shared/DataNotFound';

interface Props {
  params: Promise<{ cat: string }>;
  searchParams: Promise<{ search: string, filter: string, sort: string, page: string, limit: string }>;
}

export default async function page({ params, searchParams }: Props) {
  const { cat } = await params;
  const category = await getProductsByCategory(`main=${cat}`);
  const { data: categoryData } = await getAllCategories();
  const { data: productData } = await highlightProductBySlug('69a6858120bda1bb3a8127b4');

  if (!category || category.data.length === 0 || !categoryData || categoryData.length === 0 || !productData || productData.products.length === 0) {
    return <DataNotFound />;
  }

  return (
    <Container>
      <Shop products={category} categoryData={categoryData} productData={productData?.products} />
    </Container>
  )
}

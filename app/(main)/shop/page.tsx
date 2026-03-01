import { getAllProducts } from '@/actions/quires/product.api';
import Shop from './__components/Shop';
import Loader from '@/app/components/shared/Loader';

export default async function page() {
  const { data } = await getAllProducts();

  if (!data) {
    return <Loader />;
  }

  return <Shop products={data} />;
}

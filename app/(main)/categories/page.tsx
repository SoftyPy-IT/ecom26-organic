import { getAllCategories } from '@/actions/quires/categories.api';
import Categories from './__components/Categories';

export default async function page() {
  const { data } = await getAllCategories();
  
  return <Categories payload={data} />;
}

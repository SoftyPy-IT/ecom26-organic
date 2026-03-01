import SectionHeader from '../shared/SectionHeader';
import CategoryCard from '../cards/CategoryCard';
import SeeMore from '../buttons/SeeMore';
import { getAllCategories } from '@/actions/quires/categories.api';
import { TCategory } from '@/app/redux/types/TCategory';

export default async function Category() {
  const { data } = await getAllCategories();
  return (
    <div className="px-2 2xl:px-0">
      <SectionHeader title="Categories" subtitle="Explore our categories" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {data.slice(0, 4).map((category: TCategory) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
      <SeeMore href="/categories" title="View All Categories" />
    </div>
  );
}

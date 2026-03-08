import CategoryCard from '@/app/components/cards/CategoryCard';
import Container from '@/app/components/shared/Container';
import SectionHeader from '@/app/components/shared/SectionHeader';
import { TCategory } from '@/app/redux/types/TCategory';

interface CategoriesProps {
  payload: TCategory[];
}
export default function Categories({ payload }: CategoriesProps) {
  return (
    <Container className="px-2 2xl:px-0">
      <div className="pb-10">
        <SectionHeader title="All Categories" subtitle="Categories" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {payload.map((category: TCategory) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    </Container>
  );
}

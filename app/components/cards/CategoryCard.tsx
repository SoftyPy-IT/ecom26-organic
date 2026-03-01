import { TCategory } from '@/app/redux/types/TCategory';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  category: TCategory;
}

export default function CategoryCard({ category }: Props) {
  return (
    <div className=" relative w-full h-full aspect-square overflow-hidden group cursor-pointer">
      <Link href={`/shop?category=${category.slug}`}>
        {/* Category Image */}
        <Image
          src={category.image || '/placeholder.png'}
          alt={category.name || 'Category Image'}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/50 transition-colors duration-300" />

        {/* Category Name and Items */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pointer-events-none">
          <h3 className="text-2xl lg:text-3xl font-bold">{category?.name || 'Unnamed Category'}</h3>
          <p className="text-base lg:text-xl font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category?.productCount || 0} Items
          </p>
        </div>
      </Link>
    </div>
  );
}

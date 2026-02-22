import Image from "next/image";
import Link from "next/link";

interface Props {
  category: {
    id: number;
    name: string;
    image: string;
    items: number;
  };
}

export default function CategoryCard({ category }: Props) {
  return (
    <div className=" relative w-full h-full aspect-square overflow-hidden group cursor-pointer">
      <Link href={`/shop?category=${category.name}`}>
        {/* Category Image */}
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/50 transition-colors duration-300" />

        {/* Category Name and Items */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pointer-events-none">
          <h3 className="text-4xl font-bold">{category?.name}</h3>
          <p className="text-xl font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category?.items} Items
          </p>
        </div>
      </Link>
    </div>
  )
}

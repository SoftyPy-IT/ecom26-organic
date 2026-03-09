import { IProduct } from '@/app/redux/types/THighlighted';
import Image from 'next/image';
import Link from 'next/link';

interface BestSellerCardProps {
  product: IProduct;
}

export default function BestSellerCard({ product }: BestSellerCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="flex items-center gap-6 border rounded-lg border-gray-200 hover:border-[#81b03f] hover:shadow-[#81b03f]/60 hover:shadow-lg transition-all duration-300 p-2"
    >
      {/* Image */}
      <div className="relative h-24 w-24 shrink-0 overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-base font-medium text-gray-800 line-clamp-2">{product.name}</h3>

        <p className="mt-2 text-lg font-semibold text-primary">৳ {product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

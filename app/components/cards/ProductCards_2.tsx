import { ShopProduct } from '@/app/redux/types/TShop';
import { Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardsProps {
  payload: ShopProduct;
}

export default function ProductCards_2({ payload }: ProductCardsProps) {
  return (
    <div className="group relative flex gap-6 border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#81b03f] hover:shadow-md">
      {/* Wishlist Icon */}
      <button className="absolute right-4 top-4 text-gray-400 hover:text-[#81b03f] transition">
        <Heart size={18} />
      </button>

      {/* Image Section */}
      <div className="relative w-40 h-40 shrink-0">
        <Image
          src={payload?.thumbnail || '/placeholder.png'}
          alt={payload?.name || 'Product Image'}
          fill
          sizes="160px"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{payload?.name}</h3>

          <p className="mt-2 text-lg font-medium text-[#81b03f]">${payload?.price}</p>

          
        </div>

        {/* Add to Cart */}
        <div className="mt-4">
          <Link
            href={`/shop/${payload?._id}`}
            className="inline-flex items-center gap-2 bg-[#81b03f] px-2 py-2 text-sm font-medium text-white transition hover:bg-[#6d9434]"
          >
            <ShoppingCart size={16} />
            ADD TO CART
          </Link>
        </div>
      </div>
    </div>
  );
}

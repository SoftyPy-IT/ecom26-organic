import { ShopProduct } from '@/app/redux/types/TShop';
import { Heart, Search, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardsProps {
  payload: ShopProduct;
}

export default function ProductCards_1({ payload }: ProductCardsProps) {
  return (
    <div className="group relative flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-slate-50">
        <Image
          src={payload?.thumbnail || '/placeholder.png'}
          alt={payload?.name || 'Product Image'}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

        {/* Action buttons — slide up from bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <Link href={`/shop/${payload?._id}`}>
            <button
              title="Quick view"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-md hover:bg-[#81b03f] hover:text-white transition-colors duration-150"
            >
              <Search size={15} strokeWidth={2} />
            </button>
          </Link>
          <button
            title="Add to wishlist"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-md hover:bg-red-500 hover:text-white transition-colors duration-150"
          >
            <Heart size={15} strokeWidth={2} />
          </button>
          <button
            title="Add to cart"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-md hover:bg-[#81b03f] hover:text-white transition-colors duration-150"
          >
            <ShoppingCart size={15} strokeWidth={2} />
          </button>
        </div>

      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-3.5">

        {/* Name */}
        <h3 className="text-lg font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#81b03f] transition-colors duration-200">
          {payload?.name}
        </h3>

        {/* Rating row (optional — renders if rating exists) */}
        {payload?.rating != null && (
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < Math.round(payload.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-200 fill-slate-200'
                }
              />
            ))}
            <span className="text-[10px] text-slate-400 ml-0.5">({payload.rating})</span>
          </div>
        )}

        {/* Divider */}
        <div className="h-px w-full bg-slate-100" />

        {/* Price row */}
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-slate-800">${payload?.price}</span>

        </div>
      </div>
    </div>
  );
}

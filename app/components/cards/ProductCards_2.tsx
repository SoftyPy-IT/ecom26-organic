import { ShopProduct } from '@/app/redux/types/TShop';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardsProps {
  payload: ShopProduct;
}

export default function ProductCards_2({ payload }: ProductCardsProps) {

  return (
    <div className="group relative flex gap-4 sm:gap-6 bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg hover:shadow-slate-200/60 hover:border-slate-200 transition-all duration-300">
      {/* Wishlist */}
      <button
        title="Add to wishlist"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-300 hover:bg-red-50 hover:text-red-500 transition-all duration-150"
      >
        <Heart size={16} strokeWidth={2} />
      </button>

      {/* Image */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 overflow-hidden rounded-xl bg-slate-50">
        <Image
          src={payload?.thumbnail || '/placeholder.png'}
          alt={payload?.name || 'Product Image'}
          fill
          sizes="(max-width: 640px) 112px, 144px"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between min-w-0 pr-6">
        <div className="flex flex-col gap-1.5">
         
          {/* Name */}
          <h3 className="text-sm sm:text-base font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#81b03f] transition-colors duration-200">
            {payload?.name}
          </h3>

          {/* Rating */}
          {payload?.rating != null && (
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className={
                    i < Math.round(payload.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-slate-200 text-slate-200'
                  }
                />
              ))}
              <span className="text-[10px] text-slate-400 ml-0.5">({payload.rating})</span>
            </div>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-bold text-slate-800">${payload?.price}</span>
          </div>

          <div className="h-4 w-px bg-slate-200" />

          <Link
            href={`/shop/${payload?._id}`}
            className="
              inline-flex items-center gap-1.5 rounded-xl bg-[#81b03f] px-3 py-2
              text-xs font-semibold uppercase tracking-wide text-white shadow-sm
              shadow-[#81b03f]/30 hover:bg-[#6d9434] hover:shadow-md
              hover:shadow-[#81b03f]/20 active:scale-95 transition-all duration-150
            "
          >
            <ShoppingCart size={13} strokeWidth={2.2} />
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}

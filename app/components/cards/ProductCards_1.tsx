import { Heart,Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardsProps {
  title: string;
  image: string;
  price: number;
}

export default function ProductCards_1({
  title,
  image,
  price,
}: ProductCardsProps) {
  return (
    <div className="group border border-gray-300 hover:border-[#81b03f] transition-all duration-300 p-3 bg-white">

      <div className="flex flex-col items-center space-y-3">

        {/* Image */}
        <div className="relative w-full h-full aspect-square overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold">{title}</h3>

        {/* Price / Actions Wrapper */}
        <div className="relative h-8 flex items-center justify-center w-full">

          {/* Price (Hide on hover) */}
          <p className="absolute text-lg font-semibold text-[#81b03f] transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
            ${price}
          </p>

          {/* Buttons (Show on hover) */}
          <div className="absolute flex gap-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Link href={`/shop/1`}>
            <button title="view" className="p-2 bg-gray-100 rounded-full hover:bg-[#81b03f] hover:text-white transition">
              <Search size={18} />
            </button>
            </Link>
            <button title="add to wishlist" className="p-2 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition">
              <Heart size={18} />
            </button>
            <button title="add to cart" className="p-2 bg-gray-100 rounded-full hover:bg-[#81b03f] hover:text-white transition">
              <ShoppingCart size={18} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

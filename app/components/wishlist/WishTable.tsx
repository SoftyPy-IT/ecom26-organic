"use client";
import { removeFromWishList } from "@/app/redux/features/wishlist/wishListSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hook";
import Image from "next/image";
import Link from "next/link";


export default function WishTable() {
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((state) => state.wishList)
  return (
    <div className="py-6">
      {/* Scroll container */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[900px] w-full border border-gray-200 bg-white">
          <thead className="bg-gray-50 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Main Category</th>
              <th className="px-6 py-4 text-left">Action</th>
              <th className="px-6 py-4 text-left">Remove</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {items.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 shrink-0">
                      <Image
                        src={product.thumbnail}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <span className="font-medium text-gray-800">
                      {product.name}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  ${product.price.toFixed(2)}
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  {product.mainCategory}
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <Link href={`/shop/${product.slug}`}>
                    <button className="border px-4 py-2 text-xs uppercase tracking-widest bg-[#81b03f] border-[#81b03f] text-white shadow hover:shadow-lg hover:bg-[#81b03f] hover:border-[#81b03f] transition">
                      Shop Now
                    </button>
                  </Link>
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <button onClick={() => dispatch(removeFromWishList(product.id))} className="text-gray-400 hover:text-red-500">
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

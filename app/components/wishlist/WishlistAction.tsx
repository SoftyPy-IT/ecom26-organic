"use client";

import Link from "next/link";
import { clearWishList } from "@/app/redux/features/wishlist/wishListSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hook";

export default function WishlistAction() {
  const dispatch = useAppDispatch();

  const itemsCount = useAppSelector(
    (state) => state.wishList.items.length
  );

  if (!itemsCount) return null;

  return (
    <div className="flex justify-between gap-5 pb-5">
      <button
        onClick={() => dispatch(clearWishList())}
        className="border border-red-500 px-5 py-2 text-xs tracking-widest uppercase hover:bg-red-500 hover:text-white transition"
      >
        Clear Wishlist
      </button>

      <Link
        href="/shop"
        className="border border-[#81b03f] px-5 py-2 text-xs tracking-widest uppercase hover:bg-[#81b03f] hover:text-white transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

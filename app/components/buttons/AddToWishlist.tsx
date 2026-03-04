"use client";

import { Heart } from "lucide-react";
import { addToWishList } from "@/app/redux/features/wishlist/wishListSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hook";
import { ShopProduct } from "@/app/redux/types/TShop";
import { useMemo, useCallback } from "react";

interface AddToWishlistProps {
  product: ShopProduct;
}

export default function AddToWishlist({ product }: AddToWishlistProps) {
  const dispatch = useAppDispatch();

  const wishlistItems = useAppSelector((state) => state.wishList.items);

  const isInWishlist = useMemo(
    () => wishlistItems.some((item) => item.id === product._id),
    [wishlistItems, product._id]
  );

  const handleAdd = useCallback(() => {
    if (isInWishlist) return;

    dispatch(
      addToWishList({
        id: product._id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
        mainCategory: product.mainCategory,
      })
    );
  }, [dispatch, isInWishlist, product]);

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={isInWishlist}
      aria-label={isInWishlist ? "Already in wishlist" : "Add to wishlist"}
      title={isInWishlist ? "Already added to wishlist" : "Add to wishlist"}
      className={`flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-colors duration-200
        ${isInWishlist
          ? "bg-white text-red-500 cursor-not-allowed"
          : "bg-white text-slate-600 hover:bg-red-500 hover:text-white"
        }`}
    >
      <Heart size={15} strokeWidth={2} />
    </button>
  );
}

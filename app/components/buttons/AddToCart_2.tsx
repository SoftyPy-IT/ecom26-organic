"use client";

import { addToCart } from "@/app/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hook";

interface AddToCartProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export default function AddToCart_2({
  id,
  name,
  price,
  quantity,
  thumbnail,
}: AddToCartProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const isInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart({ id, name, price, quantity, thumbnail }));
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={isInCart}
      aria-label={isInCart ? "Already in cart" : "Add to cart"}
      className={`px-6 py-3  text-white transition-colors duration-200
        ${isInCart ? "bg-gray-400 cursor-not-allowed" : "bg-[#81b03f] hover:bg-[#6a992f]"}`}
    >
      {isInCart ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}

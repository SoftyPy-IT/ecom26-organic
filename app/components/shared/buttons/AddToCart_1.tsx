"use client";

import { addToCart } from "@/app/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hook";
import { ShoppingCart } from "lucide-react";

interface AddToCartProps {
  id: string;
  code: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export default function AddToCartButton({
  id,
  code,
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
      dispatch(addToCart({ id, code, name, price, quantity, thumbnail }));
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={isInCart}
      aria-label={isInCart ? "Already in cart" : "Add to cart"}
      title={isInCart ? "Already in cart" : "Add to cart"}
      className={`flex h-9 w-9 items-center bg-white justify-center rounded-full shadow-md transition-colors duration-150
        ${isInCart
          ? " text-[#81b03f] cursor-not-allowed"
          : " text-[#81b03f] hover:bg-[#81b03f] hover:text-white"
        }`}
    >
      <ShoppingCart size={15} strokeWidth={2} />
    </button>
  );
}

"use client";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hook";
import { removeFromCart } from "@/app/redux/features/cart/cartSlice";
import Link from "next/link";
import { setCartModal } from "@/app/redux/features/modal/modalSlice";

export default function Cart() {
  const dispatch = useAppDispatch();
  const { isCartOpen } = useAppSelector((state) => state.modal)
  const { items, subTotal, totalPrice, shippingCharge } = useAppSelector((state) => state.cart);

  return (
    <div className="flex flex-col justify-between">
      {/* Cart Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            {/* Image */}
            <div className="relative w-20 h-20 shrink-0 border bg-white">
              <Image
                src={item.thumbnail}
                alt={item.name}
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.price} ৳
              </p>
              <p className="text-red-500 text-sm font-medium">
                x{item.quantity}
              </p>
            </div>

            {/* Remove */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-gray-400 hover:text-red-500 text-lg"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div>
        {/* Divider */}
        <div className="border-t my-6"></div>

        {/* Summary */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>{subTotal} ৳</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping Ch</span>
            <span>{shippingCharge} ৳</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span className="text-[#81b03f]">
              {totalPrice} ৳
            </span>
          </div>
        </div>

        {/* Checkout Button */}
        <Link href="/checkout" >
          <button onClick={() => dispatch(setCartModal(!isCartOpen))} className="w-full mt-6 bg-[#81b03f] text-white py-3 font-medium hover:bg-[#81b03f] transition">
            CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
}

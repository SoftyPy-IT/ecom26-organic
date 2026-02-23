"use client";

import Image from "next/image";
import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Cheery",
      price: 18,
      quantity: 2,
      image:
        "https://freebw.com/templates/oragnive-v1/images/best-sell-01.jpg",
    },
    {
      id: 2,
      title: "Asparagus",
      price: 12,
      quantity: 1,
      image:
        "https://freebw.com/templates/oragnive-v1/images/best-sell-02.jpg",
    },
  ]);

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col justify-between">
      {/* Cart Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            {/* Image */}
            <div className="relative w-20 h-20 shrink-0 border bg-white">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.price}$
              </p>
              <p className="text-red-500 text-sm font-medium">
                x{item.quantity}
              </p>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeItem(item.id)}
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
            <span>{subtotal}$</span>
          </div>

          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span className="text-[#81b03f]">
              {subtotal}$
            </span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="w-full mt-6 bg-[#81b03f] text-white py-3 font-medium hover:bg-[#81b03f] transition">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

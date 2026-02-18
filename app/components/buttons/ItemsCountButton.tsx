"use client";
import React, { useState } from "react";

interface ItemsCountButtonProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export default function ItemsCountButton({
  initialValue = 1,
  min = 1,
  max,
  onChange,
}: ItemsCountButtonProps) {
  const [count, setCount] = useState<number>(initialValue);

  const increase = () => {
    if (max !== undefined && count >= max) return;
    const newValue = count + 1;
    setCount(newValue);
    onChange?.(newValue);
  };

  const decrease = () => {
    if (count <= min) return;
    const newValue = count - 1;
    setCount(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex items-center gap-3 bg-[#f7f6f2] p-2">
      <button
        onClick={decrease}
        className="h-8 w-8 border border-[#81b03f] rounded-full"
        disabled={count <= min}
      >
        -
      </button>

      <span className="min-w-[30px] text-center font-medium">
        {count}
      </span>

      <button
        onClick={increase}
        className="h-8 w-8 border border-[#81b03f] rounded-full"
        disabled={max !== undefined && count >= max}
      >
        +
      </button>
    </div>
  );
}

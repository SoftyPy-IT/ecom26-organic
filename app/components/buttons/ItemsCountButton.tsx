"use client";
import { Minus, Plus } from "lucide-react";;

interface ItemsCountButtonProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
}

export default function ItemsCountButton({
  quantity,
  setQuantity,
  min = 1,
  max,
}: ItemsCountButtonProps) {


  const increase = () => {
    if (max !== undefined && quantity >= max) return;
    const newValue = quantity + 1;
    setQuantity(newValue);
  };

  const decrease = () => {
    if (quantity <= min) return;
    const newValue = quantity - 1;
    setQuantity(newValue);
  };

  return (
    <div className="flex items-center gap-3 bg-[#f7f6f2] p-2">
      <button
        disabled={quantity <= min}
        onClick={decrease}
        className="flex items-center justify-center h-6 w-6 border disabled:bg-gray-300 hover:bg-[#81b03f] hover:text-white disabled:border-gray-300 border-[#81b03f] rounded-full"
      >
        <Minus />
      </button>

      <span className="min-w-[30px] text-center font-medium">
        {quantity}
      </span>

      <button
        disabled={max !== undefined && quantity >= max}
        onClick={increase}
        className="flex items-center justify-center h-6 w-6 border hover:bg-[#81b03f] hover:text-white disabled:border-gray-300 border-[#81b03f] rounded-full"
      >
        <Plus />
      </button>
    </div>
  );
}

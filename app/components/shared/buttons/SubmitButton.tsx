import { Loader2 } from "lucide-react";

interface Props {
  title?: string;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
}

export default function SubmitButton({ title = "Submit", disabled = false, className = "", isLoading = false }: Props) {
  return (
    <div className={`w-full uppercase ${className}`}>
      <button
        type="submit"
        disabled={disabled || isLoading}
        className="bg-[#81b03f] text-white px-6 py-3 text-sm  font-medium hover:bg-gray-800 transition"
      >
        {isLoading ? <Loader2 className="animate-spin" /> : title}
      </button>
    </div>
  )
}

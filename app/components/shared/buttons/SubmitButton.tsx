
interface Props {
  title?: string;
  disabled?: boolean;
  className?: string;
}

export default function SubmitButton({ title = "Submit", disabled = false, className = "" }: Props) {
  return (
    <div className={`w-full uppercase ${className}`}>
      <button
        type="submit"
        disabled={disabled}
        className="bg-[#81b03f] text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition"
      >
        {title}
      </button>
    </div>
  )
}

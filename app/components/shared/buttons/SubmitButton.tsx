
interface Props {
  title?: string;
}

export default function SubmitButton({ title = "Submit" }: Props) {
  return (
    <div className="w-full uppercase">
      <button
        type="submit"
        className="bg-[#81b03f] text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition"
      >
        {title}
      </button>
    </div>
  )
}

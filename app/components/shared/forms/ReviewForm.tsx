export default function ReviewForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          className="w-full border border-[#81b03f] px-4 py-3 focus:ring-2 focus:ring-[#81b03f] outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Rating
        </label>
        <select className="w-full border border-[#81b03f] px-4 py-3 focus:ring-2 focus:ring-[#81b03f] outline-none">
          {[5, 4, 3, 2, 1].map((rate) => (
            <option key={rate} value={rate} className='text-yellow-500'>
              {"★".repeat(rate)}{" "}
              {"☆".repeat(5 - rate)} ({rate})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Review
        </label>
        <textarea
          rows={4}
          className="w-full border border-[#81b03f] px-4 py-3 focus:ring-2 focus:ring-[#81b03f] outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-[#81b03f] text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition"
      >
        Submit Review
      </button>
    </form>
  )
}

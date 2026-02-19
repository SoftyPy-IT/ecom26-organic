
export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2">
      <button className="rounded-md border px-3 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100">
        Prev
      </button>
      <button className="rounded-md border px-3 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100">
        1
      </button>
      <button className="rounded-md border px-3 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100">
        2
      </button>
      <button className="rounded-md border px-3 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100">
        3
      </button>
      <button className="rounded-md border px-3 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100">
        Next
      </button>
    </div>
  );
}

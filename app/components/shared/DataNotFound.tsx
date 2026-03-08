"use client";

import { useRouter } from "next/navigation";

export default function DataNotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-semibold text-center">Data Not Found</h2>

      <p className="text-center text-gray-500">
        Sorry, we could not find the data you are looking for. Please try again later.
      </p>

      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-[#81b03f] border-[#81b03f] text-white rounded hover:bg-[#6e9635] transition"
      >
        Go Back
      </button>
    </div>
  );
}

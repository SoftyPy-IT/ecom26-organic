"use client";
export default function error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-600 text-lg">Sorry, something went wrong. Please try again later.</p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-6 px-4 py-2 bg-[#81b03f] border-[#81b03f] text-white rounded hover:bg-[#81b03f] hover:border-[#81b03f] transition"
      >
        Go Home
      </button>
    </div>
  )
}

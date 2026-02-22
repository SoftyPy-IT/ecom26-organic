"use client";
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-600 text-lg">Page not found</p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-[#81b03f] text-white rounded hover:bg-[#81b03f]"
      >
        Go Home
      </Link>
    </div>
  )
}

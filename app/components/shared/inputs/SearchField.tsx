import React from 'react'

export default function SearchField() {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search here..."
        className="
      w-full
      px-4 py-2
      border
      border-green-600
      text-gray-900
      placeholder-gray-400
      focus:outline-none
      focus:ring-2 focus:ring-green-400
      focus:border-green-500
      transition
      duration-200
    "
      />
    </div>

  )
}

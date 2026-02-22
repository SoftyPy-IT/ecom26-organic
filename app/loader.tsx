"use client";

import Loader from "./components/shared/Loader";

export default function loader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader />
    </div>
  )
}

"use client";
import { Loader as LoaderIcon } from "lucide-react";

export default function Loader() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center min-h-50">
     <LoaderIcon className="animate-spin text-[#81b03f]" size={34} />
    </div>
  );
}

"use client";

import { useEffect } from "react";

interface Props {
  title: string;
  position: "top" | "bottom" | "left" | "right";
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export default function SheetContainer({
  title,
  position,
  open,
  onOpenChange,
  children,
}: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  const base =
    "fixed bg-white shadow-2xl transition-all duration-300 ease-out z-[999]";

  const positions = {
    right: `
      top-0 right-0 h-full w-full sm:w-[420px]
      ${open ? "translate-x-0" : "translate-x-full"}
    `,
    left: `
      top-0 left-0 h-full w-full sm:w-[420px]
      ${open ? "translate-x-0" : "-translate-x-full"}
    `,
    top: `
      top-0 left-0 w-full max-h-[70vh]
      rounded-b-2xl
      ${open ? "translate-y-0" : "-translate-y-full"}
    `,
    bottom: `
      bottom-0 left-0 w-full max-h-[70vh]
      rounded-t-2xl
      ${open ? "translate-y-0" : "translate-y-full"}
    `,
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => onOpenChange(false)}
        className={`
          fixed inset-0 z-998 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Sheet */}
      <div
        className={`
          ${base}
          transform
          ${positions[position]}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>

          <button
            onClick={() => onOpenChange(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {children}
        </div>
      </div>
    </>
  );
}

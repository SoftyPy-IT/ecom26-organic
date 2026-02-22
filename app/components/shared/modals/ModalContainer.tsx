"use client";

import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function ModalContainer({
  open,
  onOpenChange,
  children,
  size = "md",
}: ModalProps) {
  // Close on ESC
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

  // Modal size classes
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => onOpenChange(false)}
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Modal */}
      <div
        className={`
          fixed inset-0 z-50 flex items-center justify-center
          transition-all duration-300
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        <div
          className={`
            bg-white rounded-2xl shadow-2xl w-full mx-4
            ${sizeClasses[size]} transition-all duration-300
          `}
        >
          {children}
        </div>
      </div>
    </>
  );
}

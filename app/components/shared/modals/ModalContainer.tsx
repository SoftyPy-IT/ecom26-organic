'use client';

import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
  const [show, setShow] = useState(open);

  useEffect(() => {
    if (open) setShow(true);
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  // Hide after animation
  const handleAnimationEnd = () => {
    if (!open) setShow(false);
  };

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => onOpenChange(false)}
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0"}
        `}
        onTransitionEnd={handleAnimationEnd}
      />

      {/* Modal */}
      <div
        className={`
          fixed inset-0 z-50 flex items-center justify-center p-4
          transition-all duration-300
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
        aria-modal="true"
        role="dialog"
        onTransitionEnd={handleAnimationEnd}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            bg-white rounded-2xl shadow-2xl w-full ${sizeClasses[size]}
            max-h-[90vh] overflow-y-auto p-6 relative
            transition-transform duration-300
          `}
        >
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Modal Content */}
          {children}
        </div>
      </div>
    </>
  );
}

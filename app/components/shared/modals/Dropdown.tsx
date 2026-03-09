"use client";

import { setDropdownModal } from "@/app/redux/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hook";
import React, { useEffect, useRef, useState } from "react";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export default function Dropdown({ trigger, children }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { isDropdownOpen } = useAppSelector((state) => state.modal);

  const toggle = () => dispatch(setDropdownModal(!isDropdownOpen));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        dispatch(setDropdownModal(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <section ref={ref}>
      <div className="relative inline-block" >
        <div onClick={toggle} className="cursor-pointer hover:text-green-400">
          {trigger}
        </div>

        <div
          onClick={toggle}
          className={`absolute right-0 mt-5 min-w-[160px] max-w-[90vw] w-max bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50 transition-transform duration-200 ease-out ${isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

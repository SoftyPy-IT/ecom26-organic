'use client'

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { navItems } from "../../header/navitems";
import { useAppDispatch } from "@/app/redux/hooks/hook";
import { setSearchModal } from "@/app/redux/features/modal/modalSlice";

export default function SearchField() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  // Memoized filtering
  const filteredRoutes = useMemo(() => {
    if (!debouncedQuery) return [];

    return navItems.filter((route) =>
      route.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  const handleNavigate = (path: string) => {
    router.push(path);
    dispatch(setSearchModal(false));
    setQuery("");
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredRoutes.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev === null || prev === filteredRoutes.length - 1 ? 0 : prev + 1
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) =>
        prev === null || prev === 0 ? filteredRoutes.length - 1 : prev - 1
      );
    }

    if (e.key === "Enter" && activeIndex !== null) {
      handleNavigate(filteredRoutes[activeIndex].href);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search pages..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActiveIndex(null);
        }}
        onKeyDown={handleKeyDown}
        className="w-full border border-[#81b03f]/40 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Search Results */}
      {debouncedQuery && (
        <div className="mt-3 bg-white shadow-lg overflow-hidden">
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map((route, index) => (
              <button
                key={route.href}
                onClick={() => handleNavigate(route.href)}
                className={`w-full text-left px-4 py-2 transition
                  ${index === activeIndex
                    ? "bg-green-50 text-green-600"
                    : "hover:bg-gray-100"
                  }`}
              >
                {route.name}
              </button>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-gray-500">
              No pages found
            </p>
          )}
        </div>
      )}
    </div>
  );
}

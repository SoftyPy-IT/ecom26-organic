'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { useCallback, useState } from 'react';

interface QueryActionProps {
  isRange?: boolean;
  isFilter?: boolean;
  isSearch?: boolean;
}

export default function QueryAction({
  isRange = true,
  isFilter = true,
  isSearch = true,
}: QueryActionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [focused, setFocused] = useState<string | null>(null);

  const search = searchParams.get('searchTerm') || '';
  const sort = searchParams.get('sort') || '';
  const range = Number(searchParams.get('range') || 0);

  const updateQuery = useCallback(
    (key: string, value: string | number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const rangePercent = Math.min(100, Math.max(0, range));

  return (
    <div className="w-full">
      {/* Main container */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        {/* Search Input */}
        {isSearch && (
          <div
            className={`
              group relative flex flex-1 items-center overflow-hidden
              rounded-xl border bg-white transition-all duration-200
              ${
                focused === 'search'
                  ? 'border-slate-400 shadow-md shadow-slate-100 ring-4 ring-slate-100'
                  : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md hover:shadow-slate-50'
              }
            `}
          >
            <Search
              size={16}
              className={`absolute left-3.5 shrink-0 transition-colors duration-150 ${
                focused === 'search' ? 'text-slate-600' : 'text-slate-400'
              }`}
            />
            <input
              type="text"
              value={search}
              onFocus={() => setFocused('search')}
              onBlur={() => setFocused(null)}
              onChange={(e) => updateQuery('searchTerm', e.target.value)}
              placeholder="Search products..."
              className="
                h-11 w-full bg-transparent pl-9 pr-4 text-sm font-medium
                text-slate-800 placeholder:text-slate-400
                focus:outline-none
              "
            />
            {search && (
              <button
                onClick={() => updateQuery('searchTerm', '')}
                className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 transition-colors"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 2l6 6M8 2l-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Sort Select */}
        {isFilter && (
          <div
            className={`
              relative shrink-0 overflow-hidden rounded-xl border bg-white transition-all duration-200
              ${
                focused === 'sort'
                  ? 'border-slate-400 shadow-md shadow-slate-100 ring-4 ring-slate-100'
                  : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md hover:shadow-slate-50'
              }
            `}
          >
            <ArrowUpDown
              size={15}
              className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-150 ${
                focused === 'sort' ? 'text-slate-600' : 'text-slate-400'
              }`}
            />
            <select
              value={sort}
              onFocus={() => setFocused('sort')}
              onBlur={() => setFocused(null)}
              onChange={(e) => updateQuery('sort', e.target.value)}
              className="
                h-11 w-full cursor-pointer appearance-none bg-transparent
                pl-9 pr-8 text-sm font-medium text-slate-700
                focus:outline-none sm:w-44
              "
            >
              <option value="">Sort: Popular</option>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="name">Name A–Z</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Range Slider — full width below */}
      {isRange && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
          <div className="mb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <SlidersHorizontal size={13} />
              <span>Price Range</span>
            </div>
            <span className="rounded-lg bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-700">
              ${range.toLocaleString()}
            </span>
          </div>

          {/* Track + thumb */}
          <div className="relative flex items-center">
            <div className="relative h-1.5 w-full rounded-full bg-slate-100">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-linear-to-r from-slate-400 to-slate-600 transition-all duration-100"
                style={{ width: `${rangePercent}%` }}
              />
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={range}
              onChange={(e) => updateQuery('range', e.target.value)}
              className="
                absolute inset-0 h-full w-full cursor-pointer opacity-0
              "
            />
          </div>

          <div className="mt-1.5 flex justify-between text-[10px] font-medium text-slate-400">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      )}
    </div>
  );
}

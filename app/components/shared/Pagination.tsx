'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  currentPageItemCount: number;
  pageLimit: number;
  siblingCount?: number;
}

export default function Pagination({
  totalPages,
  currentPage,
  currentPageItemCount,
  pageLimit,
  siblingCount = 1,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', String(page));
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const pages = useMemo<(number | 'ellipsis')[]>(() => {
    const totalNumbers = siblingCount * 2 + 5;
    if (totalPages <= totalNumbers) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const left = Math.max(2, currentPage - siblingCount);
    const right = Math.min(totalPages - 1, currentPage + siblingCount);
    const result: (number | 'ellipsis')[] = [];

    result.push(1);
    if (left > 2) result.push('ellipsis');
    for (let i = left; i <= right; i++) result.push(i);
    if (right < totalPages - 1) result.push('ellipsis');
    result.push(totalPages);

    return result;
  }, [totalPages, currentPage, siblingCount]);

  if (totalPages <= 1) return null;

  const isNextDisabled = currentPage >= totalPages || currentPageItemCount < pageLimit;
  const isPrevDisabled = currentPage <= 1;

  return (
    <nav
      className="flex flex-col items-center gap-3 mt-8 sm:flex-row sm:justify-between"
      aria-label="Pagination"
    >
      {/* Page info */}
      <p className="text-xs font-medium text-slate-400 tracking-wide order-2 sm:order-1">
        Page <span className="text-slate-600 font-semibold">{currentPage}</span> of{' '}
        <span className="text-slate-600 font-semibold">{totalPages}</span>
      </p>

      {/* Controls */}
      <div className="flex items-center gap-1 order-1 sm:order-2">
        {/* Prev */}
        <button
          onClick={() => goToPage(Math.max(1, currentPage - 1))}
          disabled={isPrevDisabled}
          aria-label="Previous Page"
          className="
            flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200
            bg-white text-slate-500 shadow-sm transition-all duration-150
            hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 hover:shadow
            disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white
            disabled:hover:border-slate-200 disabled:hover:shadow-sm
          "
        >
          <ChevronLeft size={16} strokeWidth={2} />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1 mx-1">
          {pages.map((page, idx) =>
            page === 'ellipsis' ? (
              <span
                key={`ellipsis-${idx}`}
                className="flex h-9 w-7 items-end justify-center pb-1.5 text-sm font-medium text-slate-300 select-none"
              >
                ···
              </span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`
                  relative flex h-9 min-w-9 items-center justify-center rounded-lg
                  px-2 text-sm font-medium transition-all duration-150
                  ${
                    page === currentPage
                      ? 'bg-slate-800 text-white shadow-md shadow-slate-200 scale-105'
                      : 'border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 hover:shadow'
                  }
                `}
              >
                {page}
                {page === currentPage && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-white/40" />
                )}
              </button>
            )
          )}
        </div>

        {/* Next */}
        <button
          onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
          disabled={isNextDisabled}
          aria-label="Next Page"
          className="
            flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200
            bg-white text-slate-500 shadow-sm transition-all duration-150
            hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 hover:shadow
            disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white
            disabled:hover:border-slate-200 disabled:hover:shadow-sm
          "
        >
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>
    </nav>
  );
}

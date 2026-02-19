import { Grid3x2, Menu, Search } from "lucide-react";

interface QueryActionProps {
  search?: string;
  setSearch?: (value: string) => void;
  sort?: string;
  setSort?: (value: string) => void;
  view?: "list" | "grid";
  setView?: (value: "list" | "grid") => void;
  range?: number;
  setRange?: (value: number) => void;
}

export default function QueryAction({
  search = "",
  setSearch,
  sort = "",
  setSort,
  setView,
  range = 0,
  setRange,
}: QueryActionProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4">

      {/* Search */}
      {setSearch && (
        <div className="relative w-full">
          <label htmlFor="search" className="sr-only">
            Search products
          </label>

          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-sm shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />

          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      )}

      <div className="flex items-center gap-3">

        {/* Sort */}
        {setSort && (
          <div>
            <label htmlFor="sort" className="sr-only">
              Sort products
            </label>

            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 bg-white py-2.5 pl-4 pr-8 text-sm shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Sort by popularity</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="name">Name</option>
            </select>
          </div>
        )}

        {/* View Toggle */}
        {setView && (
          <div className="flex gap-2 overflow-hidden">
            <button
              type="button"
              onClick={() => setView("list")}
              aria-label="List view"
              className="p-2 hover:text-[#81b03f] border border-gray-300"
            >
              <Menu size={26} />
            </button>

            <button
              type="button"
              onClick={() => setView("grid")}
              aria-label="Grid view"
              className="p-2 hover:text-[#81b03f] border border-gray-300"
            >
              <Grid3x2 size={26} />
            </button>
          </div>
        )}

        {/* Range Filter */}
        {setRange && (
          <div className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="range" className="text-lg font-semibold text-gray-600 uppercase">
              Filter by price
            </label>

            <input
              id="range"
              type="range"
              value={range}
              onChange={(e) => setRange(Number(e.target.value))}
            />
          </div>
        )}
      </div>
    </div>
  );
}

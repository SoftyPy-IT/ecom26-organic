"use client";

import { useMemo, useState } from "react";
import { featuredProducts } from "@/app/components/Featured/FeaturedProducts";
import Container from "@/app/components/shared/Container";
import QueryAction from "@/app/components/shared/QueryAction";
import CategoryItems from "@/app/components/category/CategoryItems";
import BestSellers from "@/app/components/products/BestSellers";
import ProductCards_1 from "@/app/components/cards/ProductCards_1";
import ProductCards_2 from "@/app/components/cards/ProductCards_2";
import Pagination from "@/app/components/shared/Pagination";

const categoryItems = [
  { id: 1, name: "Fruits", total: 10 },
  { id: 2, name: "Vegetables", total: 10 },
  { id: 3, name: "Grains", total: 10 },
  { id: 4, name: "Dairy", total: 10 },
  { id: 5, name: "Beverages", total: 10 },
];

export default function Page() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [range, setRange] = useState(1000);

  const filteredProducts = useMemo(() => {
    let products = [...featuredProducts];

    if (search) {
      products = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (range) {
      products = products.filter((p) => p.price <= range);
    }

    if (sort === "name") {
      products.sort((a, b) => a.title.localeCompare(b.title));
    }

    return products;
  }, [search, sort, range]);

  return (
    <Container className="px-2 2xl:px-0 py-8">

      {/* Top Filter Bar */}
      <QueryAction
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        view={view}
        setView={setView}
      />

      <div className="flex flex-col md:flex-row gap-4 py-4 items-start md:justify-between">

        {/* Sidebar */}
        <aside className="md:w-3/12 w-full lg:col-span-3 md:sticky md:top-24 self-start">
          <QueryAction range={range} setRange={setRange} />
          <CategoryItems title="Category" items={categoryItems} />
          <BestSellers title="Best Sellers" />
        </aside>

        {/* Products Section */}
        <section
          className={`md:w-9/12 w-full ${view === "grid"
            ? "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            : "flex flex-col gap-4"
            }`}
        >
          {filteredProducts.map((item) =>
            view === "grid" ? (
              <ProductCards_1
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ) : (
              <ProductCards_2
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            )
          )}

          <div className="col-span-full flex justify-center pt-4">
            <Pagination />
          </div>
        </section>
      </div>
    </Container>
  );
}

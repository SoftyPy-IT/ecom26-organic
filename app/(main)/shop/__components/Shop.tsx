'use client';

import ProductCards_1 from '@/app/components/cards/ProductCards_1';
import ProductCards_2 from '@/app/components/cards/ProductCards_2';
import CategoryItems from '@/app/components/category/CategoryItems';
import BestSellers from '@/app/components/products/BestSellers';
import Container from '@/app/components/shared/Container';
import Pagination from '@/app/components/shared/Pagination';
import QueryAction from '@/app/components/shared/QueryAction';
import { ShopProductsData } from '@/app/redux/types/TShop';
import { useState } from 'react';

const categoryItems = [
  { id: 1, name: 'Fruits', total: 10 },
  { id: 2, name: 'Vegetables', total: 10 },
  { id: 3, name: 'Grains', total: 10 },
  { id: 4, name: 'Dairy', total: 10 },
  { id: 5, name: 'Beverages', total: 10 },
];

interface ShopProps {
  products: ShopProductsData;
}

export default function Shop({ products }: ShopProps) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [range, setRange] = useState(1000);

  const product = products?.data;

  return (
    <Container className="px-2 2xl:px-0 py-8">
      <div>
        <QueryAction
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
          view={view}
          setView={setView}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 py-4 items-start md:justify-between">
        {/* Sidebar */}
        <aside className="md:w-3/12 w-full lg:col-span-3 md:sticky md:top-24">
          <QueryAction range={range} setRange={setRange} />
          <CategoryItems title="Category" items={categoryItems} />
          <BestSellers title="Best Sales" />
        </aside>

        {/* Products Section */}
        <section
          className={`md:w-9/12 w-full ${
            view === 'grid'
              ? 'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'
              : 'grid grid-cols-1 lg:grid-cols-2 gap-4'
          }`}
        >
          {product?.map((item) =>
            view === 'grid' ? (
              <ProductCards_1 key={item._id} payload={item} />
            ) : (
              <ProductCards_2 key={item._id} payload={item} />
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

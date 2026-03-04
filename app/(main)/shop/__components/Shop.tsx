'use client';
import ProductCards_1 from '@/app/components/cards/ProductCards_1';
import ProductCards_2 from '@/app/components/cards/ProductCards_2';
import CategoryItems from '@/app/components/category/CategoryItems';
import BestSellers from '@/app/components/products/BestSellers';
import Container from '@/app/components/shared/Container';
import Pagination from '@/app/components/shared/Pagination';
import QueryAction from '@/app/components/shared/QueryAction';
import { ShopProductsData } from '@/app/redux/types/TShop';
import React from 'react';
import ViewMode from './ViewMode';
import { TCategory } from '@/app/redux/types/TCategory';
import { ISection } from '@/app/redux/types/THighlighted';

interface ShopProps {
  products: ShopProductsData;
  categoryData?: TCategory[];
  productData?: ISection;
}

export default function Shop({ products, categoryData, productData }: ShopProps) {
  const product = products?.data;
  const [view, setView] = React.useState<'grid' | 'list'>('grid');

  return (
    <Container className="px-2 2xl:px-0 py-8">
      <QueryAction isRange={false} />
      <div className="flex flex-col md:flex-row gap-4 py-4 items-start md:justify-between">
        {/* Sidebar */}
        <aside className="md:w-3/12 w-full lg:col-span-3 md:sticky md:top-24">
          <div className="flex items-center justify-between gap-2">
            <QueryAction isFilter={false} isSearch={false} />
            <ViewMode view={view} setView={setView} />
          </div>
          {categoryData && <CategoryItems title="Category" payload={categoryData} />}
          {productData && <BestSellers title="Best Sales" products={productData?.products} />}
        </aside>

        {/* Products Section */}
        <div className="md:w-9/12 w-full lg:col-span-9">
          <div>
            <div
              className={`grid gap-6 ${view === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 2xl:grid-cols-2'}`}
            >
              {product?.map((item) =>
                view === 'grid' ? (
                  <ProductCards_1 key={item._id} payload={item} />
                ) : (
                  <ProductCards_2 key={item._id} payload={item} />
                )
              )}
            </div>

            <div className="col-span-full flex justify-center pt-4">
              <Pagination
                totalPages={products.meta.totalPages}
                currentPage={products.meta.page}
                currentPageItemCount={products.data.length}
                pageLimit={products.meta.limit}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';

import OfferedCard from '../cards/OfferedCard';
import SectionTitle from '../shared/SectionTitle';
import { IProduct } from '@/app/redux/types/THighlighted';

interface OfferedProductsProps {
  title1?: string;
  title2?: string;
  subtitle?: string;
  products?: IProduct[];
  rows?: number;
  preview?: number;
  autoplayDelay?: number;
}

export default function OfferedProducts({
  title1 = 'Products',
  title2 = 'Products',
  subtitle = 'Products',
  products = [],
  rows = 3,
  preview = 1,
  autoplayDelay = 3000,
}: OfferedProductsProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-10">
      <div className="flex items-center justify-between py-4">
        <div>
          <SectionTitle title1={title1} title2={title2} subtitle={subtitle} />
        </div>
        <div className="">
          <div className="flex">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="h-8 w-12 rounded-s-full border border-gray-300 flex items-center justify-center hover:bg-[#81b03f] hover:text-white transition"
              aria-label="Previous Slide"
            >
              ←
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="h-8 w-12 rounded-e-full border border-gray-300 flex items-center justify-center hover:bg-[#81b03f] hover:text-white transition"
              aria-label="Next Slide"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Grid */}
      <Swiper
        modules={[Autoplay, Grid]}
        spaceBetween={20}
        slidesPerView={preview}
        grid={{
          rows: rows,
          fill: 'row',
        }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {products.map((product: IProduct) => (
          <SwiperSlide key={product._id} className="flex justify-center">
            <OfferedCard
              image={product?.thumbnail}
              title={product?.name}
              slug={product?.slug}
              price={product?.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

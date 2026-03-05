'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import Image from 'next/image';
import MagnifierImage from './MagnifierImage';
import { IProductDetails } from '@/app/redux/types/TProductDetails';
import ProductReviews from '../shared/ProductReviews';
import ItemsCountButton from '../shared/buttons/ItemsCountButton';
import AddToCart_2 from '../shared/buttons/AddToCart_2';


interface ViewDetailsProps {
  payload: IProductDetails;
}

export default function ViewDetails({ payload }: ViewDetailsProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const {
    _id,
    name,
    code,
    rating,
    price,
    description,
    short_description,
    stock,
    images,
    thumbnail,
    discount_price,
  } = payload;

  const productImages = images?.length ? images : [thumbnail];


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Swiper
            style={
              {
                '--swiper-navigation-color': '#81b03f',
                '--swiper-pagination-color': '#81b03f',
              } as any
            }
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mainSwiper"
          >
            {productImages.map((img, index) => (
              <SwiperSlide key={index}>
                <MagnifierImage src={img} alt={name} zoom={2.5} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={Math.min(productImages.length, 6)}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbSwiper mt-4"
          >
            {productImages.map((img, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <div
                  className={`relative aspect-video ${productImages.length > 1 ? '' : 'h-20'} border hover:border-[#81b03f]`}
                >
                  <Image src={img} alt={name} fill className="object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="space-y-6">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          </div>

          <div>
            {discount_price > 0 ? (
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-primary">${discount_price}</span>
                <span className="line-through text-gray-400">${price}</span>
              </div>
            ) : (
              <div className="text-2xl font-semibold text-primary">${price}</div>
            )}
          </div>
          <div>
            <h3 className="text-lg text-justify font-semibold mb-2">Description</h3>
            <div>{short_description}</div>
          </div>

          {/* Product Info */}
          <div className="border border-[#81b03f] rounded-lg p-4 bg-gray-50 space-y-2 text-sm">
            <InfoRow label="Product Code" value={code} />
            <InfoRow label="Stock" value={stock} />
            <InfoRow label="Customer Rating" value={`${rating} ★`} />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-2">
            <ItemsCountButton min={1} max={stock} quantity={quantity} setQuantity={setQuantity} />
            <AddToCart_2 id={_id} code={code} name={name} price={price} quantity={quantity} thumbnail={thumbnail} />
          </div>
        </div>
      </div>
      <ProductReviews description={description} reviews={payload.reviews || []} />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between">
      <span className="font-medium text-gray-700">{label}</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );
}

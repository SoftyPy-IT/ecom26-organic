"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import ItemsCountButton from '../buttons/ItemsCountButton';
import AddToCard from '../buttons/AddToCard';
import MagnifierImage from './MagnifierImage';

interface ImageItem {
  _id: string;
  image: string;
  thumbnailUrl?: string;
  images?: ImageItem[];
}

interface Props {
  title: string;
  subtitle: string;
  base_image: ImageItem;
  rating?: number;
  price?: number;
  description: string;
  category: string;
  serial: string;
  stock: number;
  weight: string;
}

export default function ViewDetails({
  title,
  subtitle,
  base_image,
  description,
  category,
  serial,
  stock,
  weight,
  price,
  rating = 0,
}: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const images: ImageItem[] = [base_image, ...(base_image.images || [])];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div className="">
        {/* Main Swiper */}
        <Swiper
          style={{ '--swiper-navigation-color': '#81b03f', '--swiper-pagination-color': '#81b03f' } as any}
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mainSwiper"

        >
          {images.map((img) => (
            <SwiperSlide key={img._id}>
              <MagnifierImage src={img.image} alt={title} zoom={2.5} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={Math.min(images.length, 10)}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbSwiper mt-4"
        >
          {images.map((img) => (
            <SwiperSlide key={img._id} className="cursor-pointer">
              <div className='relative aspect-video border hover:border-[#81b03f]'>
                <Image
                  src={img.thumbnailUrl || img.image}
                  alt={title}
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        {/* Title & Subtitle */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && (
            <h2 className="text-lg text-gray-500 mt-1">{subtitle}</h2>
          )}
        </div>

        {/* Price */}
        {price && (
          <div className="text-2xl font-semibold text-primary">
            ${price}
          </div>
        )}

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Product Description</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Product Information */}
        <div className="border border-[#81b03f] rounded-lg p-4 bg-gray-50 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Category</span>
            <span className="text-gray-600">{category}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Serial Number</span>
            <span className="text-gray-600">{serial}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Stock Availability</span>
            <span className="text-gray-600">{stock}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Weight</span>
            <span className="text-gray-600">{weight}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Customer Rating</span>
            <span className="text-yellow-500 font-semibold">
              {rating} ★
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-2">
          <ItemsCountButton />
          <AddToCard />
        </div>
      </div>
    </div>
  );
}

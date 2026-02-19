'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '../shared/Container';

const slides = [
  {
    title: 'Fresh Organic Food',
    subtitle: 'Delivered to Your Door',
    description:
      'Discover farm-fresh vegetables, fruits, and organic products grown with love and delivered straight from nature.',
    image: 'https://freebw.com/templates/oragnive-v1/images/bg-slide-01.jpg',
  },
  {
    title: 'Farm-to-Table Goodness',
    subtitle: 'Natural & Healthy',
    description: 'Eat clean, live green! Our products are sourced directly from local farms.',
    image: 'https://freebw.com/templates/oragnive-v1/images/bg-slide-02.jpg',
  }
];

export default function Banner() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{
          clickable: true,
        }}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Container className="relative w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              />


              {/* Content */}
              <div className="relative z-10 mx-auto h-screen flex flex-col items-center justify-center gap-6 px-6 py-16 md:flex-row md:gap-12 md:py-24">
                {/* Left Text */}
                <div className="max-w-xl">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#81b03f]">
                    100% Natural & Fresh
                  </p>

                  <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                    {slide.title}
                    <span className="block text-[#81b03f]">{slide.subtitle}</span>
                  </h1>

                  <p className="mb-8">{slide.description}</p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/shop"
                      className="rounded-full hover:shadow-lg bg-[#81b03f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#81b03f]"
                    >
                      Shop Now
                    </Link>

                    <Link
                      href="/about"
                      className="rounded-full bg-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-[#81b03f] hover:text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Right empty for future images */}
                <div className="hidden md:block flex-1"></div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

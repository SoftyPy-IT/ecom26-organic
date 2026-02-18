"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../cards/TestimonialCard";
import Container from "../shared/Container";
import SectionHeader from "../shared/SectionHeader";

export default function Testimonial() {
  const swiperRef = useRef<SwiperType | null>(null);

  const testimonialData = [
    {
      name: "John Doe",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus placerat. Nullam nec metus placerat. Nullam nec metus placerat. ",
      rating: 5,
      image: "https://freebw.com/templates/oragnive-v1/images/avatar-01.jpg",
    },
    {
      name: "Jane Doe",
      message:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      rating: 4,
      image: "https://freebw.com/templates/oragnive-v1/images/avatar-02.jpg",
    },
    {
      name: "Mike Smith",
      message:
        "Suspendisse potenti. Fusce in risus ac ligula facilisis sodales. Suspendisse potenti. Fusce in risus ac ligula facilisis sodales.",
      rating: 5,
      image: "https://freebw.com/templates/oragnive-v1/images/avatar-03.jpg",
    },
  ];

  return (
    <section className="py-10 bg-[#f7f6f2]">
      <Container className="px-2 2xl:px-0">
        <SectionHeader title="Testimonials" subtitle="What our customers say" />
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={testimonialData.length > 1} // only loop if more than 1
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {testimonialData.map((t, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <TestimonialCard
                image={t.image}
                name={t.name}
                message={t.message}
                rating={t.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

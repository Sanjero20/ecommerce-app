"use client";

import { useRef } from "react";
import ReviewCard from "./ui/ReviewCard";
import { Icon } from "@/components/ui/Icon";
import { CUSTOMER_REVIEWS } from "@/data/customer-reviews";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import leftArrow from "../../../../public/icons/arrow-left.svg";
import rightArrow from "../../../../public/icons/arrow-right.svg";

const CustomerReviews = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section>
      <div className="mb-8 mt-16 flex items-end justify-between">
        <h2 className="">our happy customers</h2>

        {/* Arrow Keys */}
        <div className="flex gap-4">
          <button onClick={handlePrevSlide}>
            <Icon src={leftArrow} />
          </button>

          <button onClick={handleNextSlide}>
            <Icon src={rightArrow} />
          </button>
        </div>
      </div>

      {/* Review Card List*/}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={25}
        breakpoints={{
          320: {
            slidesPerView: 1, // Mobile
          },
          640: {
            slidesPerView: 2, // Tablet
          },
          768: {
            slidesPerView: 3, // Desktop
          },
        }}
        navigation
        scrollbar={{ draggable: true }}
      >
        {CUSTOMER_REVIEWS.map((review, index) => (
          <SwiperSlide className="" key={index}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerReviews;

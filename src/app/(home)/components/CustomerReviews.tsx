"use client";

import ReviewCard from "./ui/ReviewCard";
import { CUSTOMER_REVIEWS } from "@/data/customer-reviews";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

const CustomerReviews = () => {
  // const {} = useSwiper();

  return (
    <section>
      <div>
        <h2 className="mb-8 mt-16">our happy customers</h2>

        {/* Arrow Keys */}
        <div>
          {/*  */}
          {/*  */}
        </div>
      </div>

      {/* Review Card List*/}

      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={25}
        slidesPerView={3}
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

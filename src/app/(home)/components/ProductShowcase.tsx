"use client";

import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import { Product } from "@/types/index.types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

interface Props {
  title: string;
  products: Product[];
}

const ProductShowcase = ({ title, products }: Props) => {
  return (
    <div className="flex flex-col gap-8 px-4 py-12">
      <h2 className="mb-4 text-center">{title}</h2>

      <Swiper
        className="w-full"
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
            slidesPerView: 4, // Desktop
          },
        }}
        navigation
        scrollbar={{ draggable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button className="mx-auto w-full sm:max-w-48" variant="outline">
        View All
      </Button>
    </div>
  );
};

export default ProductShowcase;

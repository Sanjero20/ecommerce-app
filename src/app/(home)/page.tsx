import HeroSection from "./components/Hero";
import Brands from "./components/Brands";
import ProductShowcase from "./components/ProductShowcase";

import { NEW_ARRIVALS } from "@/data/new-arrivals";
import { TOP_SELLING_PRODUCTS } from "@/data/top-selling";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Brands />

      <ProductShowcase title="new arrivals" products={NEW_ARRIVALS} />
      <hr className="container" />
      <ProductShowcase title="top selling" products={TOP_SELLING_PRODUCTS} />
    </div>
  );
};

export default HomePage;

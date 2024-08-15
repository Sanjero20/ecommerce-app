import HeroSection from "./components/Hero";
import Brands from "./components/Brands";
import ProductShowcase from "./components/ProductShowcase";

import { NEW_ARRIVALS } from "@/data/new-arrivals";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Brands />

      <ProductShowcase title="new arrivals" products={NEW_ARRIVALS} />
      <hr className="container" />
      <ProductShowcase title="top selling" products={NEW_ARRIVALS} />
    </div>
  );
};

export default HomePage;

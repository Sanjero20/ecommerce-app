import HeroSection from "./components/Hero";
import Brands from "./components/Brands";
import ProductShowcase from "./components/ProductShowcase";

import { NEW_ARRIVALS } from "@/data/new-arrivals";
import { TOP_SELLING_PRODUCTS } from "@/data/top-selling";
import DressStyle from "./components/DressStyle";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Brands />

      <div className="container">
        <ProductShowcase title="new arrivals" products={NEW_ARRIVALS} />
        <hr />
        <ProductShowcase title="top selling" products={TOP_SELLING_PRODUCTS} />
        <DressStyle />
      </div>
    </div>
  );
};

export default HomePage;

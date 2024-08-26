import { NEW_ARRIVALS } from "@/data/new-arrivals";
import { TOP_SELLING_PRODUCTS } from "@/data/top-selling";

import HeroSection from "./components/Hero";
import Brands from "./components/Brands";
import ProductShowcase from "./components/ProductShowcase";
import DressStyle from "./components/DressStyle";
import CustomerReviews from "./components/CustomerReviews";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Brands />

      <div className="container">
        <ProductShowcase
          title="new arrivals"
          products={NEW_ARRIVALS}
          href="/new-arrivals"
        />
        <hr />
        <ProductShowcase
          title="top selling"
          products={TOP_SELLING_PRODUCTS}
          href="/top-selling"
        />
        <DressStyle />
        <CustomerReviews />
      </div>
    </div>
  );
};

export default HomePage;

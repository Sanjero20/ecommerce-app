import Image from "next/image";
import HeroSection from "./components/Hero";

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      {/* Brands */}
      <section className="min-h-24 bg-black"></section>
    </div>
  );
};

export default HomePage;

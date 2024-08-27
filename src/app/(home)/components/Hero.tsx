import Image from "next/image";

import heroImage from "../../../../public/images/hero-desktop.png";
import heroMobile from "../../../../public/images/hero-mobile.png";
import Button from "@/components/ui/Button";
import Link from "next/link";

const STATISTICS = [
  {
    data: "200+",
    title: "International Brands",
  },
  {
    data: "2000+",
    title: "High-Quality Products",
  },
  {
    data: "30,000+",
    title: "Happy Customers",
  },
];

const HeroSection = () => {
  return (
    <section className="relative flex h-full flex-col justify-center bg-hero lg:flex-row">
      {/* left */}
      <div className="container z-[2] flex h-full flex-col py-4 lg:absolute lg:flex-row">
        <div className="flex flex-col gap-6 lg:w-1/2 lg:justify-center">
          <h1 className="font-integral text-4xl uppercase lg:text-6xl">
            find clothes that matches your style
          </h1>

          <p className="text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link href={"/products"} className="w-full md:w-48">
            <Button variant="primary" className="w-full">
              Shop Now
            </Button>
          </Link>
          {/* Statistics */}
          <div className="flex w-full flex-wrap justify-center gap-8 gap-y-4 lg:justify-start">
            {STATISTICS.map((stats, index) => (
              <div key={index}>
                <p className="font-satoshi text-2xl font-bold lg:text-4xl">
                  {stats.data}
                </p>
                <p className="text-xs text-black/60 sm:text-base">
                  {stats.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Image */}
      <Image
        src={heroImage}
        alt="hero.png"
        style={{ width: "auto", height: "auto" }}
        unoptimized
        className="hidden h-full min-h-96 w-full lg:block"
      />

      {/* Hero image for mobile */}
      <div className="relative flex justify-center lg:hidden">
        <Image
          src={heroMobile}
          alt="hero.png"
          className="h-auto w-full"
          style={{ width: "auto", height: "auto" }}
          unoptimized
        />
      </div>
    </section>
  );
};

export default HeroSection;

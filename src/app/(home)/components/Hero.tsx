import Image from "next/image";

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
    <section className="relative flex min-h-screen flex-col bg-hero lg:flex-row">
      <div className="container z-[2] flex flex-col py-4 lg:flex-row">
        {/* left */}
        <div className="flex flex-col gap-6 lg:w-1/2 lg:justify-center">
          <h1 className="font-integral text-4xl uppercase lg:text-6xl">
            find clothes that matches your style
          </h1>

          <p className="text-black/60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="w-full rounded-full bg-primary p-4 text-white md:w-48">
            Shop Now
          </button>

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
        fill
        src="/images/hero-desktop.png"
        alt="hero.png"
        unoptimized
        className="hidden lg:block"
      />

      {/* Hero image for mobile */}
      <div className="relative lg:hidden">
        <Image
          height={450}
          width={1000}
          src="/images/hero-mobile.png"
          alt="hero.png"
          unoptimized
        />
      </div>
    </section>
  );
};

export default HeroSection;

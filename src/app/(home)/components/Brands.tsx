import Image from "next/image";
import { BRANDS_LOGO } from "@/data/brands-logo";

const Brands = () => {
  return (
    <section className="bg-black py-8">
      <div className="container flex flex-wrap justify-center gap-4 md:justify-between">
        {BRANDS_LOGO.map((logo, index) => (
          <Image
            key={index}
            src={logo.url}
            alt={logo.brand}
            className="h-6 w-fit sm:h-8"
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;

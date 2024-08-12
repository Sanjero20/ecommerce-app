import Card from "@/components/ui/Card";
import { NEW_ARRIVALS } from "@/data/new-arrivals";
import Image from "next/image";

const NewArrivals = () => {
  return (
    <div className="container flex flex-col gap-4 px-4 py-8">
      <h2 className="mb-4 text-center font-integral text-3xl uppercase lg:text-5xl">
        new arrivals
      </h2>

      {/*  */}
      <div className="flex snap-x gap-8 overflow-x-scroll md:overflow-x-auto">
        {NEW_ARRIVALS.map((product) => (
          <Card
            key={product.name}
            className="relative h-60 min-w-56 p-4 lg:h-72 lg:min-w-64"
          >
            <Image src={product.src} alt={product.name} />
          </Card>
        ))}
      </div>

      <button className="mx-auto w-full rounded-full border border-gray-300 bg-transparent p-4 sm:max-w-48">
        View All
      </button>

      <hr />
    </div>
  );
};

export default NewArrivals;

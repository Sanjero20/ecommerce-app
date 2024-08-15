import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/index.types";

interface Props {
  title: string;
  products: Product[];
}

const ProductShowcase = ({ title, products }: Props) => {
  return (
    <div className="container flex flex-col gap-4 px-4 py-8">
      <h2 className="mb-4 text-center font-integral text-3xl uppercase lg:text-5xl">
        {title}
      </h2>

      <div className="flex snap-x gap-8 overflow-x-scroll md:overflow-x-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="mx-auto w-full rounded-full border border-gray-300 bg-transparent p-4 sm:max-w-48">
        View All
      </button>
    </div>
  );
};

export default ProductShowcase;

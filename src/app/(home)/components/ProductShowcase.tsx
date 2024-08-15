import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import { Product } from "@/types/index.types";

interface Props {
  title: string;
  products: Product[];
}

const ProductShowcase = ({ title, products }: Props) => {
  return (
    <div className="container flex flex-col gap-8 px-4 py-12">
      <h2 className="mb-4 text-center font-integral text-3xl uppercase lg:text-5xl">
        {title}
      </h2>

      <div className="flex snap-x gap-8 overflow-x-scroll md:overflow-x-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Button className="mx-auto w-full sm:max-w-48" variant="outline">
        View All
      </Button>
    </div>
  );
};

export default ProductShowcase;

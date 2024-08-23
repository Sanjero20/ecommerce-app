import { Product } from "@/types/index.types";
import Card from "./ui/Card";
import Image from "next/image";
import StarRating from "./StarRating";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const discountedPrice =
    product.discount &&
    product.price - product.price * (product.discount / 100);

  return (
    <div className="flex h-full w-full flex-col gap-1">
      <Card className="flex h-72 min-w-56 items-center justify-center overflow-hidden p-2 lg:min-w-64">
        <Image src={product.src} alt={product.name} />
      </Card>

      <p className="font-bold">{product.name}</p>

      <div className="flex gap-2">
        <StarRating rating={product.rating} />
        <p>{product.rating.toFixed(1)}/5</p>
      </div>

      <div className="flex items-center gap-2 text-2xl font-bold">
        {product.discount ? (
          <>
            <p>${discountedPrice}</p>
            <span className="text-black/40 line-through">
              ${product.price.toFixed()}
            </span>

            {/* Badge */}
            <span className="w-14 rounded-full bg-red-100 py-1 text-center text-xs text-red-400">
              -{product.discount}%
            </span>
          </>
        ) : (
          <p>${product.price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

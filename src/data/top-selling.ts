import { Product } from "@/types/index.types";

import product1 from "../../public/images/top-selling/1.png";
import product2 from "../../public/images/top-selling/2.png";
import product3 from "../../public/images/top-selling/3.png";
import product4 from "../../public/images/top-selling/4.png";

export const TOP_SELLING_PRODUCTS: Product[] = [
  {
    id: 0,
    name: "Vertical Striped Shirt",
    src: product1,
    rating: 5,
    price: 232,
  },
  {
    id: 1,
    name: "Courage Graphic T-shirt",
    src: product2,
    rating: 4,
    price: 145,
  },
  {
    id: 2,
    name: "Loose Fit Bermuda Shorts",
    src: product3,
    rating: 3,
    price: 80,
  },
  {
    id: 3,
    name: "Faded Skinny Jeans",
    src: product4,
    rating: 4.5,
    price: 210,
  },
];

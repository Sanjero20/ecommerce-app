import product1 from "../../public/images/new-arrivals/1.png";
import product2 from "../../public/images/new-arrivals/2.png";
import product3 from "../../public/images/new-arrivals/3.png";
import product4 from "../../public/images/new-arrivals/4.png";

import { Product } from "@/types/index.types";

export const NEW_ARRIVALS: Product[] = [
  {
    id: 0,
    name: "T-Shirt with Tape Details",
    src: product1,
    rating: 4.5,
    price: 120,
  },
  {
    id: 1,
    name: "Skinny Fit Jeans",
    src: product2,
    rating: 3.5,
    price: 260,
    discount: 20,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    src: product3,
    rating: 4.5,
    price: 180,
  },
  {
    id: 3,
    name: "Sleeve Striped T-shirt",
    src: product4,
    rating: 4.5,
    price: 160,
    discount: 30,
  },
];

import { StaticImageData } from "next/image";
import product1 from "../../public/images/new-arrivals/1.png";
import product2 from "../../public/images/new-arrivals/2.png";
import product3 from "../../public/images/new-arrivals/3.png";
import product4 from "../../public/images/new-arrivals/4.png";

type Product = {
  name: string;
  src: StaticImageData;
  rating: number;
  price: number;
  discount?: number;
};

export const NEW_ARRIVALS: Product[] = [
  {
    name: "T-Shirt with Tape Details",
    src: product1,
    rating: 4.5,
    price: 120,
  },
  {
    name: "Skinny Fit Jeans",
    src: product2,
    rating: 3.5,
    price: 260,
    discount: 20,
  },
  {
    name: "Checkered Shirt",
    src: product3,
    rating: 4.5,
    price: 180,
  },
  {
    name: "Sleeve Striped T-shirt",
    src: product4,
    rating: 4.5,
    price: 160,
    discount: 30,
  },
];

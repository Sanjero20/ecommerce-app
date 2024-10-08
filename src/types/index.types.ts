import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  src: StaticImageData;
  rating: number;
  price: number;
  discount?: number;
};

export type Review = {
  rating: number;
  name: string;
  content: string;
};

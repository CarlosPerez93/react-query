import { Product } from "../..";

export type Products = {
  product: Product;
  fullDescription?: boolean;
  preFetchProduct?: (id: number) => void;
};

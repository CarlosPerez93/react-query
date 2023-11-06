import { useQueryClient } from "@tanstack/react-query";
import { productActions } from "../products";

export const usePrefetchProduct = () => {
  const querytClient = useQueryClient();
  const prefetchProduct = (id: number) => {
    querytClient.prefetchQuery(["product", id], () =>
      productActions.getProductById(id)
    );
  };
  return prefetchProduct;
};

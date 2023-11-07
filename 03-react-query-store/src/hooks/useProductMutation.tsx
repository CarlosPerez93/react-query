import { productActions } from "../products";
import { useMutation } from "@tanstack/react-query";

export const useProductMutation = () => {
  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onSuccess: () => {
      console.log("created Product");
    },
    onSettled: () => {
      console.log("on Settled");
    },
  });

  return mutation;
};

export default useProductMutation;

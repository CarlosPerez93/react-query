import { productActions } from "../products";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["products", { filterKey: data.category }]);
    },
  });

  return mutation;
};

export default useProductMutation;

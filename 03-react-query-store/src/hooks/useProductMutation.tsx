import { Product, productActions } from "../products";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onSuccess: (data) => {
      //queryClient.invalidateQueries(["products", { filterKey: data.category }]);
      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: data.category }],
        (old) => {
          if (!old) return [data];

          return [...old, data];
        }
      );
    },
  });

  return mutation;
};

export default useProductMutation;

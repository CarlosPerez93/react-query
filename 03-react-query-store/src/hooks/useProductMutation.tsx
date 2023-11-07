import { Product, ProductLike, productActions } from "../products";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,

    onMutate: (data) => {
      console.log("mutating optimistic update");

      const optimisticProduct = { id: Math.random(), ...data };
      queryClient.setQueryData<ProductLike[]>(
        ["products", { filterKey: data.category }],
        (old) => {
          if (!old) return [optimisticProduct];

          return [...old, optimisticProduct];
        }
      );

      return {
        optimisticProduct,
      };
    },

    onSuccess: (product, variables, context) => {
      console.log({ product, variables, context });

      //queryClient.invalidateQueries(["products", { filterKey: data.category }]);
      queryClient.removeQueries(["product", context?.optimisticProduct.id]);
      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: product.category }],
        (old) => {
          if (!old) return [product];

          return old.map((cacheProduct) => {
            return cacheProduct.id === context?.optimisticProduct.id
              ? product
              : cacheProduct;
          });
        }
      );
    },
  });

  return mutation;
};

export default useProductMutation;

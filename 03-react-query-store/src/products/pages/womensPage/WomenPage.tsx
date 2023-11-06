import { ProductList } from "../../components/productList/ProductList";

import { useProducts } from "../..";

export const WomensPage = () => {
  const { isLoading, products } = useProducts({
    filterKey: "women's clothing",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>
      {isLoading && <p>loading...</p>}
      <ProductList products={products} />
    </div>
  );
};

export default WomensPage;

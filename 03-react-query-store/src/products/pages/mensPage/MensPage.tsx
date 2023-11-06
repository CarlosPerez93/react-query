import { ProductList } from "../../components/productList/ProductList";
import { useProducts } from "../../../hooks/useProducts";

export const MensPage = () => {
  const { isLoading, products } = useProducts({ filterKey: "men's clothing" });
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>
      {isLoading && <p>loading...</p>}
      <ProductList products={products} />
    </div>
  );
};

export default MensPage;

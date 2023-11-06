import { FC } from "react";
import { ProductList } from "../../components/productList/ProductList";
import { MensPageDefaultProps, MensPageProps } from "./mensPage.type";
import { useProducts } from "../../../hooks/useProducts";

export const MensPage: FC<MensPageProps> = () => {
  const { isLoading, products } = useProducts({ filterKey: "men's clothing" });
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>
      {isLoading && <p>loading...</p>}
      <ProductList products={products} />
    </div>
  );
};

MensPage.propTypes = MensPageProps;
MensPage.defaultProps = MensPageDefaultProps;

export default MensPage;

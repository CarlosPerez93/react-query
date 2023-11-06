import { FC } from "react";
import { ProductList } from "../../components/productList/ProductList";
import {
  WomenPageProps,
  WomensPageDefaultProps,
  WomensPageProps,
} from "./womensPage.type";
import { useProducts } from "../..";

export const WomensPage: FC<WomenPageProps> = () => {
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

WomensPage.propTypes = WomensPageProps;
WomensPage.defaultProps = WomensPageDefaultProps;

export default WomensPage;

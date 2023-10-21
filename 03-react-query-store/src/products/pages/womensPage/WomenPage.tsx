import { FC } from "react";
import { ProductList } from "../../components/productList/ProductList";
import {
  WomenPageProps,
  WomensPageDefaultProps,
  WomensPageProps,
} from "./womensPage.type";

export const WomensPage: FC<WomenPageProps> = () => {
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      <ProductList />
    </div>
  );
};

WomensPage.propTypes = WomensPageProps;
WomensPage.defaultProps = WomensPageDefaultProps;

export default WomensPage;

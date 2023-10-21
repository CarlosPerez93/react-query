import { FC } from "react";
import { ProductList } from "../../components/productList/ProductList";
import {
  CompleteListPageDefaultProps,
  CompleteListPageProps,
} from "./completeListPage.type";

export const CompleteListPage: FC<CompleteListPageProps> = () => {
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      <ProductList />
    </div>
  );
};

CompleteListPage.propTypes = CompleteListPageProps;
CompleteListPage.defaultProps = CompleteListPageDefaultProps;

export default CompleteListPage;

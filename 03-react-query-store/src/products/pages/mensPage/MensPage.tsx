import { FC } from "react";
import { ProductList } from "../../components/productList/ProductList";
import { MensPageDefaultProps, MensPageProps } from "./mensPage.type";

export const MensPage: FC<MensPageProps> = () => {
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      <ProductList />
    </div>
  );
};

MensPage.propTypes = MensPageProps;
MensPage.defaultProps = MensPageDefaultProps;

export default MensPage;

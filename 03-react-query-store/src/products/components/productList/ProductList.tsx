import { FC } from "react";
import { ProductCard } from "../productCard/ProductCard";
import { ProductListProps, ProductListDefualtProps } from "./productList.type";

export const ProductList: FC<ProductListProps> = () => {
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

ProductList.propTypes = ProductListProps;
ProductList.defaultProps = ProductListDefualtProps;

export default ProductCard;

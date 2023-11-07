export { productsApi } from "../api/productsApi";

export {
  useProduct,
  useProducts,
  usePrefetchProduct,
  useProductMutation,
} from "../hooks";

export {
  MensPage,
  Error404,
  NewProduct,
  ProductById,
  StoreLayout,
  WomensPage,
  CompleteListPage,
} from "./pages";

export { ProductCard, ProductList } from "./components";

export * as productActions from "../services/actions";

export type { Product, ProductLike } from "./../interfaces/products";

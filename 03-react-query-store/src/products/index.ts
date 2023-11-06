export { productsApi } from "../api/productsApi";

export { useProduct } from "../hooks/useProduct";
export { useProducts } from "../hooks/useProducts";

export { MensPage } from "./pages/mensPage";
export { Error404 } from "./pages/Error404/";
export { NewProduct } from "./pages/newProduct";
export { ProductById } from "./pages/productById";
export { StoreLayout } from "./layout/StoreLayout";
export { ProductCard } from "./components/productCard";
export { WomensPage } from "./pages/womensPage/WomenPage";
export { CompleteListPage } from "./pages/completeListPage";

export * as productActions from "../services/actions";

export type { Product } from "./../interfaces/products";

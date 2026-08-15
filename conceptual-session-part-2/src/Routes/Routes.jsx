import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Products from "../Pages/products/Products";
import ProductsDetails from "../Pages/products/ProductsDetails";
import Cart from "../Pages/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        loader: () => fetch("FurnitureData.json"),
        path: '/',
        Component: Home,
      },
      {
        path: 'allProducts',
        Component: Products
      },{
        path: '/cart',
        Component: Cart
      },
      {
        path: '/product/:id',
        Component: ProductsDetails
      },
      { path: "*", Component: ErrorPages },
    ],
  },{ path: "*", Component: ErrorPages }
]);

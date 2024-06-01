import config from "../config/config";

import DefaultLayout from "../layout/DefaultLayout";

import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.routes.productDetails,
    component: ProductDetails,
    layout: DefaultLayout,
  },
];

export { publicRoutes };

import config from "../config/config";

import DefaultLayout from "../layout/DefaultLayout";

import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Coffee from "../pages/Coffee";

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
  {
    path: config.routes.coffee,
    component: Coffee,
    layout: DefaultLayout,
  },
];

export { publicRoutes };

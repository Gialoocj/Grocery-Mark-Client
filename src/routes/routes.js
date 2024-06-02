import config from "../config/config";

import DefaultLayout from "../layout/DefaultLayout";

import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Coffee from "../pages/Coffee";
import Tea from "../pages/Tea/Tea";
import Cacao from "../pages/Cacao/Cacao";
import Payment from "../pages/Payment/Payment";

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
  {
    path: config.routes.tea,
    component: Tea,
    layout: DefaultLayout,
  },
  {
    path: config.routes.cacao,
    component: Cacao,
    layout: DefaultLayout,
  },
  {
    path: config.routes.payment,
    component: Payment,
    layout: DefaultLayout,
  },
];

export { publicRoutes };

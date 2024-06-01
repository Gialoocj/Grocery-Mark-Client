import config from "../config/config";

import Home from "../pages/Home/Home";
import DefaultLayout from "../layout/DefaultLayout";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
];

export { publicRoutes };

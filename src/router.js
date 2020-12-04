import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home";
import DcHeros from "./pages/DcHeros";
import Chat from "./pages/Chat";
import store from "./store/index";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  {
    path: "/chat",
    component: Chat,
    meta: {middleware: 'auth'}
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

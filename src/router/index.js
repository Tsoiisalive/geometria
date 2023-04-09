import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  base: process.env.VUE_APP_ROUTER_BASE_URL,
  history: createWebHistory(process.env.VUE_APP_ROUTER_BASE_URL),
  routes,
});

export default router;

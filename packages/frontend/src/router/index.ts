import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    name: "DefaultLayout",
    children: [
      {
        path: "/",
        name: "IndexPage",
        component: () =>
          import(/* webpackChunkName: "index" */ "@/pages/index.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

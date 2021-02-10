import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    name: "DefaultLayout",
    children: [
      {
        path: "/",
        name: "Index",
        component: () =>
          import(/* webpackChunkName: "index" */ "@/pages/index.vue")
      },
      {
        path: "/post/:id",
        name: "PostView",
        props: true,
        component: () =>
          import(/* webpackChunkName: "post__view" */ "@/pages/post/_id.vue")
      },
      {
        path: "/auth/login",
        name: "AuthLogin",
        props: true,
        component: () =>
          import(/* webpackChunkName: "auth__login" */ "@/pages/auth/login.vue")
      },
      {
        path: "/auth/register",
        name: "AuthRegister",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "auth__register" */ "@/pages/auth/register.vue"
          )
      },
      {
        path: "/account/settings",
        name: "AccountSettings",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "account__settings" */ "@/pages/account/settings.vue"
          )
      },
      {
        path: "/admin",
        name: "AdminIndex",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "admin__index" */ "@/pages/admin/index.vue"
          )
      },
      {
        path: "/admin/post/list",
        name: "AdminPostList",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "admin__post_list" */ "@/pages/admin/post/list.vue"
          )
      },
      {
        path: "/admin/post/edit/:id",
        name: "AdminPostEdit",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "admin__post_edit" */ "@/pages/admin/post/edit/_id.vue"
          )
      },
      {
        path: "/admin/post/create",
        name: "AdminPostCreate",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "admin__post_create" */ "@/pages/admin/post/create.vue"
          )
      },
      {
        path: "/admin/user/list",
        name: "AdminUserList",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "admin__user_list" */ "@/pages/admin/user/list.vue"
          )
      },
      {
        path: "/admin/user/edit/:id",
        name: "AdminUserEdit",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "admin__user_edit" */ "@/pages/admin/user/edit/_id.vue"
          )
      },
      {
        path: "/admin/user/create",
        name: "AdminUserCreate",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "admin__user_create" */ "@/pages/admin/user/create.vue"
          )
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

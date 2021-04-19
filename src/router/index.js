import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
      },
      {
        path: "/profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
      },
      {
        path: "/pelatihan",
        component: () =>
          import(/* webpackChunkName: "pelatihan" */ "../views/Pelatihan.vue"),
      },
      {
        path: "/riwayat",
        component: () =>
          import(/* webpackChunkName: "riwayat" */ "../views/Riwayat.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

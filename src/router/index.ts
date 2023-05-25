import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Products from "../components/Products.vue";
import ProductCreate from "../components/Create.vue";
import ProductView from "../components/View.vue";
import ProductEdit from "../components/Edit.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: '/products',
    name: 'products' ,
    component : Products,

  },
  {
    path: '/view',
    name: 'productView' ,
    component :ProductView

  },

  {
    path: '/create',
    name: 'productCreate' ,
    component :ProductCreate

  },
  {
    path: '/products/:id/Edit',
    name: 'productEdit' ,
    component :ProductEdit

  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

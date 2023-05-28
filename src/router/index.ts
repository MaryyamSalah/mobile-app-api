import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
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
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

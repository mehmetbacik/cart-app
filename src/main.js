import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import ProductItems from "./components/ProductItems.vue";
import CompletedCart from "./components/CompletedCart.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/style.css";

const routes = [
  { path: "/", component: ProductItems, name: "ProductItems" },
  {
    path: "/completed",
    component: CompletedCart,
    name: "CompletedCart",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

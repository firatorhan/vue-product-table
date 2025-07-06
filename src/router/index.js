import Vue from "vue";
import VueRouter from "vue-router";
import ProducsView from "../views/ProducsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: ProducsView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

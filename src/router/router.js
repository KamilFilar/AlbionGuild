import { createRouter, createWebHistory } from "vue-router";
// Components
import Home from "./../views/home/Home.vue";
import PageNotFound from "./../views/pageNotFound/PageNotFound.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

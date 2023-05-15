import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Homepage.vue")
  },

  {
    path: "/Sport",
    name: "Sport",
    component: ()=> import("@/views/SportsArticle.vue")
  },
  {
    path: "/photography",
    name: "Photography",
    component: ()=> import("@/views/PhotographyArticle.vue")
  },
  {
    path: "/arts",
    name: "Arts",
    component: ()=> import("@/views/ArtsArticle.vue")
  },
  {
    path: "/contact",
    name: "Contact Us",
    component: ()=> import("@/views/ContactUs.vue")
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
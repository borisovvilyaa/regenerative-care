import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutCompanyView from "../views/AboutView.vue";
import RegenerativeCareView from "../views/RegenerativeCareView.vue";
import DoctorsView from "../views/DoctorsView.vue";
import FAQView from "../views/FAQView.vue";
import ContactsView from "../views/ContactsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-company",
    name: "about-company",
    component: AboutCompanyView,
  },
  {
    path: "/regenerative-care",
    name: "regenerative-care",
    component: RegenerativeCareView,
  },
  {
    path: "/doctors",
    name: "doctors",
    component: DoctorsView,
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

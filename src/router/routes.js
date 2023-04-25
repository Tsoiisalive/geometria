import DashboardPage from "@/pages/DashboardPage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import PortfolioPage from "@/pages/PortfolioPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";
import ServicePage from "@/pages/ServicePage.vue";

const routes = [
  {
    path: "/",
    component: DashboardPage,
    name: "Dashboard",
  },
  {
    path: "/contacts",
    component: ContactsPage,
    name: "Contacts",
  },
  {
    path: "/portfolio",
    component: PortfolioPage,
    name: "Portfolio",
  },
  {
    path: "/services",
    component: ServicesPage,
    name: "Services",
  },
  {
    path: "/services/:id",
    component: ServicePage,
    name: "Service",
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/ErrorNotFound.vue"),
  },
];

export default routes;

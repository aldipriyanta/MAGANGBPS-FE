import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/login.vue";
import Dashboard from "../pages/Dashboard.vue";
import MatriksKegiatan from "../pages/MatriksKegiatan.vue";
import RekapHonor from "../pages/RekapHonor.vue";
import RincianHonorMitra from "../pages/RincianHonorMitra.vue";
import HonorBulananDetail from "../pages/HonorBulananDetail.vue";
import DatabaseMitra from "../pages/DatabaseMitra.vue";
import EvaluasiMitra from "../pages/EvaluasiMitra.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { public: true } 
  },
  { path: "/dashboard", component: Dashboard },
  { path: "/matrikskegiatan", component: MatriksKegiatan },
  { path: "/rekaphonor", component: RekapHonor },
  { path: "/rincianhonor", component: RincianHonorMitra },
  { path: "/honorbulanan/:month", component: HonorBulananDetail, props: true },
  { path: "/databasemitra", component: DatabaseMitra },
  { path: "/evaluasimitra", component: EvaluasiMitra },

  { path: "/", redirect: "/login" },
  { path: "/home", redirect: "/login" }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!to.meta.public && !isLoggedIn) {
    next('/login');
  }
  else if (to.path === '/login' && isLoggedIn) {
    next('/dashboard');
  }
  else {
    next();
  }
});

export default router;
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import MatriksKegiatan from "../pages/MatriksKegiatan.vue";
import RekapHonor from "../pages/RekapHonor.vue";
import RincianHonorMitra from "../pages/RincianHonorMitra.vue";
import HonorBulananDetail from "../pages/HonorBulananDetail.vue";
import DatabaseMitra from "../pages/DatabaseMitra.vue";
import EvaluasiMitra from "../pages/EvaluasiMitra.vue";

const routes = [
  { path: "/home", alias: "/", redirect: "/dashboard" },
  { path: "/dashboard", component: Dashboard },
  { path: "/matrikskegiatan", component: MatriksKegiatan },
  { path: "/rekaphonor", component: RekapHonor },
  { path: "/rincianhonor", component: RincianHonorMitra },
  { path: "/honorbulanan/:month", component: HonorBulananDetail, props: true,},
  { path: "/databasemitra", component: DatabaseMitra },
  { path: "/evaluasimitra", component: EvaluasiMitra },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
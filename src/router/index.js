import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import MatriksKegiatan from '../pages/MatriksKegiatan.vue';
import RekapHonorMitra from '../pages/RekapHonorMitra.vue';
import HonorMitraBulanan from '../pages/HonorMitraBulanan.vue';
import DatabaseMitra from '../pages/DatabaseMitra.vue';
import EvaluasiMitra from '../pages/EvaluasiMitra.vue';

const routes = [
  { path: '/home', alias: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/matrikskegiatan', component: MatriksKegiatan },
  { path: '/rekaphonormitra', component: RekapHonorMitra },
  { path: '/honormitrabulanan', component: HonorMitraBulanan },
  { path: '/databasemitra', component: DatabaseMitra },
  { path: '/evaluasimitra', component: EvaluasiMitra }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
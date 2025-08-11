import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/dashboard.vue';
import MatriksKegiatan from '../views/MatriksKegiatan.vue';
import RekapHonorMitra from '../views/RekapHonorMitra.vue';
import HonorMitraBulanan from '../views/HonorMitraBulanan.vue';
import DatabaseMitra from '../views/DatabaseMitra.vue';
import EvaluasiMitra from '../views/EvaluasiMitra.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/matrikskegiatan', component: MatriksKegiatan },
  { path: '/rekaphonormitra', component: RekapHonorMitra },
  { path: '/honormitrabulanan', component: HonorMitraBulanan },
  { path: '/databasemitra', component: DatabaseMitra },
  { path: '/evaluasi-mitra', component: EvaluasiMitra }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
<template>
  <div class="databasemitra">
    <h1>Data Mitra BPS Kota Malang</h1>
    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>ID Mitra</th>
          <th>Nama Mitra</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mitra in mitras" :key="mitra.id">
          <td>{{ mitra.id }}</td>
          <td>{{ mitra.id_mitra }}</td>
          <td>{{ mitra.nama_mitra }}</td>
        </tr>
      </tbody>
    </table>

    <!-- pagination control -->
    <div class="flex gap-8 items-center" style="margin-top:12px;">
      <div>
        <button :disabled="!pagination.prev_page_url" @click="goTo(pagination.current_page - 1)">Prev</button>
        <button :disabled="!pagination.next_page_url" @click="goTo(pagination.current_page + 1)">Next</button>
      </div>
      <div>
        Halaman {{ pagination.current_page }} / {{ pagination.last_page }}
        • Per halaman
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "../config/api";
import { ref, onMounted } from "vue";

export default {
  name: "DatabaseMitra",
  setup() {
    const mitras = ref([]);
    const perPage = ref(100); // default 100 / halaman
    const pagination = ref({
      current_page: 1,
      per_page: 100,
      total: 0,
      last_page: 1,
      next_page_url: null,
      prev_page_url: null,
    });

    async function fetchMitras(page = 1, perPage = 100) {
      const { data } = await api.get('/mitra', {
        params: { page, per_page: perPage } // ← per_page (pakai underscore)
      })
      mitras.value = data.data
      pagination.value = data.pagination
    }
    console.log(localStorage.getItem('token'));


    function goTo(p) {
      // clamp aman
      if (p < 1) return;
      if (pagination.value.last_page && p > pagination.value.last_page) return;
      fetchMitras(p);
    }

    onMounted(() => fetchMitras(1));

    return { mitras, pagination, perPage, goTo };
  },
};
</script>

<style scoped>
.databasemitra {
  font-family: "Segoe UI", sans-serif;
}

.databasemitra h1 {
  color: #0d3b66;
  margin-bottom: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th {
  background: #0d3b66;
  color: white;
}

td,
th {
  padding: 8px;
  text-align: left;
}
</style>
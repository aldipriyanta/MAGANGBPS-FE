<template>
  <div class="databasemitra">
    <h1>Data Mitra BPS Kota Malang</h1>

    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>ID Mitra</th>
          <th>Nama Mitra</th>
          <th>Kecamatan</th>
          <th>Jenis Kelamin</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="mitra in mitras" :key="mitra.id">
          <td>{{ mitra.id }}</td>
          <td>{{ mitra.id_mitra }}</td>
          <td>{{ mitra.nama_mitra }}</td>
          <td>{{ mitra.kecamatan }}</td>
          <td>{{ mitra.jenis_kelamin }}</td>
        </tr>
      </tbody>
    </table>

    <!-- debug raw data -->
    <!-- <pre>{{ mitras }}</pre> -->
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "DatabaseMitra",
  setup() {
    const mitras = ref([]);

    const fetchMitras = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/mitra");
        mitras.value = res.data.data;
        console.log(res.data);
      } catch (err) {
        console.error("Gagal fetch data mitra:", err);
      }
    };

    onMounted(fetchMitras);

    return { mitras };
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

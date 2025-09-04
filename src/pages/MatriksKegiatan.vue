<template>
  <div class="matrikskegiatan">
    <div class="teksmatriks">
      <h1>
        Matriks Kegiatan <br />
        BPS Kota Malang
      </h1>
    </div>

    <div class="pilihanfilter">
      <div class="filtergroup">
        <select v-model="pilihanTahun" class="filterinput">
          <option value="">Pilih Tahun</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <div class="filtergroup">
        <select v-model="pilihanTim" class="filterinput">
          <option value="">Pilih Tim</option>
          <option value="a">Distribusi dan Perusahaan</option>
          <option value="b">Neraca dan Analisis Statistik</option>
          <option value="c">Pengolahan dan TI</option>
          <option value="d">Statistik Pertanian, Industri dan PEK</option>
          <option value="e">Pengolahan dan TI</option>
        </select>
      </div>

      <div class="filtermitra">
        <input
          id="idmitra"
          v-model="cariidmitra"
          type="text"
          placeholder="Masukkan id mitra"
          class="cariidmitra"
        />
      </div>
      <div>
        <button class="resetbtn" @click="resetFilters">Reset Filter</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "MatriksKegiatan",

  setup() {
    const matan = ref([]);

    const fetchMatan = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/matriks_kegiatan");
        matan.value = res.data.data;
        console.log(res.data);
      } catch (err) {
        console.error("Gagal fetch data matriks kegiatan:", err);
      }
    };

    onMounted(fetchMatan);

    return { matan };
  },
};
</script>

<style scoped>
.matrikskegiatan {
  padding: 0px 0px 20px;
  font-family: "Segoe UI", sans-serif;
}

.teksmatriks {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}
.teksmatriks h1 {
  color: black;
  font-size: 3rem;
  font-weight: bold;
}

.pilihanfilter {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.filtergroup {
  flex: 1;
  min-width: 200px;
}

.filterinput {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  appearance: none;
  background-color: #f5f5f5;
}

.filterinput:focus {
  outline: none;
  border-color: #0d3b66;
  box-shadow: 0 0 0 2px rgba(13, 59, 102, 0.2);
}

/* filter mitra */
.filtermitra {
  min-height: 20px;
  min-width: 10px;
}

.filtermitra input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  appearance: none;
}

.filtermitra input:focus {
  outline: none;
  border-color: #0d3b66;
  box-shadow: 0 0 0 2px rgba(13, 59, 102, 0.2);
}

/* reset filter */
.resetbtn {
  padding: 10px 20px;
  background-color: #c00;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.resetbtn:hover {
  background-color: #a00;
}
</style>

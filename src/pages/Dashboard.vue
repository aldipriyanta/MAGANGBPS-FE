<template>
  <div class="dashboardcontainer">
    <div class="dash">
      <h1>Dashboard</h1>
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
        <select v-model="pilihanBulan" class="filterinput">
          <option value="">Pilih Bulan</option>
          <option value="Januari">Januari</option>
          <option value="Februari">Februari</option>
          <option value="Maret">Maret</option>
          <option value="April">April</option>
          <option value="Mei">Mei</option>
          <option value="Juni">Juni</option>
          <option value="Juli">Juli</option>
          <option value="Agustus">Agustus</option>
          <option value="September">September</option>
          <option value="Oktober">Oktober</option>
          <option value="November">November</option>
          <option value="Desember">Desember</option>
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

      <button class="resetbtn" @click="resetFilters">
        Reset Filter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      pilihanTahun: '',
      pilihanBulan: '',
      pilihanTim: ''
    };
  },
  methods: {
    resetFilters() {
      this.pilihanTahun = '';
      this.pilihanBulan = '';
      this.pilihanTim = '';
    }
  }
};
</script>

<style scoped>
.dashboardcontainer {
  padding: 50px 70px 20px;
  font-family: 'Segoe UI', sans-serif;
}

.dash {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.dash h1 {
  color: black;
  font-size: 3rem;
  font-weight: bold;
}

/* filter */
.pilihanfilter {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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
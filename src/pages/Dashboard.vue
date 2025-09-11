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

      <button class="resetbtn" @click="resetFilters">Reset Filter</button>
    </div>

    <div class="stat-container">
      <div class="stat">
        <div class="teksstat">Jumlah Kegiatan</div>
        <div class="valuestat">150</div> <!-- input data-->
      </div>

      <div class="stat">
        <div class="teksstat">Jumlah Mitra</div>
        <div class="valuestat">381</div> <!-- input data-->
      </div>

      <div class="stat">
        <div class="teksstat">Total Honor</div>
        <div class="valuestat">2,68M</div> <!-- input data-->
      </div>
    </div>

    <div class="tablehonor">
      <h2>10 Teratas Honor Mitra Perbulan</h2>
      <table class="value-tablehonor">
        <thead>
          <tr>
            <th>No</th>
            <th>Id_nama</th>
            <th>Kegiatan</th>
            <th>Honor</th>
          </tr>
        </thead>
        <tbody><!-- input data-->
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="tablechart-container">
      <div class="grid">
        <div class="table-container">
          <h3>Rincian Honor Per Kegiatan</h3>
          <table class="table-rincian">
            <thead>
              <tr>
                <th>Tim</th>
                <th>Kegiatan</th>
                <th>Honor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="index">
                <td>{{ item.tim }}</td>
                <td>{{ item.kegiatan }}</td>
                <td>{{ formatRupiah(item.honor) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="chart-container">
          <h3>Presentase Kegiatan Per Tim</h3>
          <chartkegiatan />
        </div>
      </div>
    </div>

    <div class="tablechart-container">
      <div class="grid">
        <div class="chart-container">
          <h3>Presentase Kegiatan Per Tim</h3>
          <chartmitra />
        </div>
        <div class="table-container">
          <h3>Rincian Honor Per Kegiatan</h3>
          <table class="table-rincian">
            <thead>
              <tr>
                <th>Tim</th>
                <th>Kegiatan</th>
                <th>Honor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="index">
                <td>{{ item.tim }}</td>
                <td>{{ item.kegiatan }}</td>
                <td>{{ formatRupiah(item.honor) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chartkegiatan from '../chart/chartkegiatan.vue';
import Chartmitra from '../chart/chartmitra.vue';

export default {
  name: 'RincianHonor',
  components: {
    Chartkegiatan,
    Chartmitra
  },
  data() {
    return {
      pilihanTim: '',
      pilihanTahun: '',
      pilihanBulan: '',
      data: [
        { tim: 'Statistik Rumah Tangga', kegiatan: 'Pendataan SERUTI TW IV', honor: 18200000 },
        { tim: 'Statistik Rumah Tangga', kegiatan: 'Pemutakhiran SUSENAS-SERUTI', honor: 3120000 },
        { tim: 'Statistik Rumah Tangga', kegiatan: 'Pendataan SAKERNAS Agustus', honor: 75900000 },
        { tim: 'Statistik Rumah Tangga', kegiatan: 'Pendataan SUSENAS Maret 2024', honor: 75900000 },
        { tim: 'Statistik Rumah Tangga', kegiatan: 'Pemutakhiran SUSENAS MSBP', honor: 3120000 },
        { tim: 'Statistik Rumah Tangga', kegiatan: 'Pendataan SPAK 2024', honor: 3300000 },
        { tim: 'Statistik Rumah Tangga', kegiatan: 'Pendataan SUPAS', honor: 90640000 }
      ],
    };
  },
  methods: {
    resetFilters() {
      this.pilihanTim = '';
      this.pilihanTahun = '';
      this.pilihanBulan = '';
    },
    formatRupiah(nominal) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
      }).format(nominal);
    }
  }
};
</script>

<style scoped>
.dashboardcontainer {
  padding: 0px 0px 20px;
  font-family: "Segoe UI", sans-serif;
}

.dash {
  height: 100px;
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
  /* margin-bottom: 30px; */
  flex-wrap: wrap;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  /* border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
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
  /* appearance: none; */
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

/* chart */
.stat-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  /* border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
}

.stat {
  flex: 1;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  min-width: 200px;
  /* background-color: #f5f7fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.teksstat {
  font-size: 0.9rem;
  color: #555;
  font-weight: bold;
  margin-bottom: 5px;
}

.valuestat {
  font-size: 1.2rem;
  font-weight: bold;
  color: #176cc1;
  padding: 10px;
  border-radius: 6px;
  background-color: #176cc1;
  color: white;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* tabel honor teratas */
.tablehonor {
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.value-tablehonor {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

h2,
h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: center;
}

.value-tablehonor th {
  background-color: #3b82f6;
  color: white;
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.value-tablehonor td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

.value-tablehonor tr:hover {
  background-color: #e6f2ff;
}

.tablechart-container {
  padding: 0px 10px;
  background-color: white;
  /* border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
}

.grid {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.table-container {
  flex: 1;
  min-width: 400px;
}

.table-rincian {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.table-rincian th {
  background-color: #3b82f6;
  color: white;
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table-rincian td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

.table-rincian tr:nth-child(even) {
  background-color: #f8f9fa;
}

.chart-container {
  flex: 1;
  min-width: 400px;
}
</style>

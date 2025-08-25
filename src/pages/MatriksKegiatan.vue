<template>
  <div class="matrikskegiatan">
    <div class="header">
      <h1>Matriks Kegiatan<br />BPS Kabupaten Lombok Tengah</h1>
      <div class="filters">
        <select v-model="selectedYear" class="filter-select">
          <option value="">Tahun</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>

        <select v-model="selectedTeam" class="filter-select">
          <option value="">Tim</option>
          <option value="VHTS">VHTS</option>
          <option value="SHPB">SHPB</option>
          <option value="STKU">STKU</option>
          <option value="VREST">VREST</option>
        </select>

        <select v-model="selectedName" class="filter-select">
          <option value="">Id_nama</option>
          <option value="Ubinan Sub I">Ubinan Sub I</option>
          <option value="Updating Pariwisata">Updating Pariwisata</option>
          <option value="SHPB Mingguan">SHPB Mingguan</option>
        </select>

        <button @click="resetFilters" class="reset-btn">Reset Filter</button>
      </div>
    </div>

    <!-- Monthly Grid -->
    <div class="months-grid">
      <!-- January -->
      <div class="month-column">
        <h2>Januari</h2>
        <div class="activity-card">
          <div class="scrollable-list">
            <div v-for="item in januaryActivities" :key="item" class="activity-item">
              {{ item }}
            </div>
          </div>
          <div class="pagination">
            <span>1 - 27 / 27</span>
            <button class="nav-btn"><</button>
            <button class="nav-btn">></button>
          </div>
        </div>
      </div>

      <!-- February -->
      <div class="month-column">
        <h2>Februari</h2>
        <div class="activity-card">
          <div class="scrollable-list">
            <div v-for="item in februaryActivities" :key="item" class="activity-item">
              {{ item }}
            </div>
          </div>
          <div class="pagination">
            <span>1 - 26 / 26</span>
            <button class="nav-btn"><</button>
            <button class="nav-btn">></button>
          </div>
        </div>
      </div>

      <!-- March -->
      <div class="month-column">
        <h2>Maret</h2>
        <div class="activity-card">
          <div class="scrollable-list">
            <div v-for="item in marchActivities" :key="item" class="activity-item">
              {{ item }}
            </div>
          </div>
          <div class="pagination">
            <span>1 - 26 / 26</span>
            <button class="nav-btn"><</button>
            <button class="nav-btn">></button>
          </div>
        </div>
      </div>

      <!-- April -->
      <div class="month-column">
        <h2>April</h2>
        <div class="activity-card">
          <div class="scrollable-list">
            <div v-for="item in aprilActivities" :key="item" class="activity-item">
              {{ item }}
            </div>
          </div>
          <div class="pagination">
            <span>1 - 35 / 35</span>
            <button class="nav-btn"><</button>
            <button class="nav-btn">></button>
          </div>
        </div>
      </div>

      <!-- May -->
      <div class="month-column">
        <h2>Mei</h2>
        <div class="activity-card">
          <div class="scrollable-list">
            <div v-for="item in mayActivities" :key="item" class="activity-item">
              {{ item }}
            </div>
          </div>
          <div class="pagination">
            <span>1 - 28 / 28</span>
            <button class="nav-btn"><</button>
            <button class="nav-btn">></button>
          </div>
        </div>
      </div>

      <!-- June -->
      <div class="month-column">
        <h2>Juni</h2>
        <div class="activity-card">
          <div class="scrollable-list">
            <div v-for="item in juneActivities" :key="item" class="activity-item">
              {{ item }}
            </div>
          </div>
          <div class="pagination">
            <span>1 - 37 / 37</span>
            <button class="nav-btn"><</button>
            <button class="nav-btn">></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Filters
const selectedYear = ref('')
const selectedTeam = ref('')
const selectedName = ref('')

// Reset filters
const resetFilters = () => {
  selectedYear.value = ''
  selectedTeam.value = ''
  selectedName.value = ''
}

// Activity data per month
const januaryActivities = [
  'VHTS',
  'Ubinan Sub I',
  'Survei Konstruksi Triwulan 4 2024',
  'Survei Galian BH Triwulanan',
  'Survei Air Bersih Triwulan 4 2024',
  'STKU'
]

const februaryActivities = [
  'VHTS',
  'Ubinan Sub I',
  'SHPB Mingguan',
  'SHPB',
  'SHP',
  'RPH'
]

const marchActivities = [
  'VHTS',
  'Updating Pariwisata',
  'Updating Direktori Pertambangan Energi',
  'Ubinan Sub I',
  'UDP',
  'SHPB Mingguan'
]

const aprilActivities = [
  'VHTS',
  'Updating Survei Ubinan Palawija Sub 2',
  'Updating Direktori konstruksi',
  'Updating Direktori Perusahaan konstruksi',
  'Survei Galian BH Triwulan I',
  'STKU'
]

const mayActivities = [
  'VREST UMK',
  'VN Horti',
  'VHTS',
  'VHTL',
  'VDTW',
  'Updating Survei Ubinan Palawija Sub 2'
]

const juneActivities = [
  'VREST',
  'VPEK',
  'VPBD',
  'VN Horti',
  'VHTS',
  'VHTL Bulan I'
]
</script>

<style scoped>
.matrikskegiatan {
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  color: #333;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: #0d3b66;
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: bold;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.filter-select {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 180px;
  background-color: white;
}

.reset-btn {
  padding: 10px 20px;
  background-color: #c0392b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.reset-btn:hover {
  background-color: #a53021;
}

.months-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.month-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.month-column h2 {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #0d3b66;
  font-weight: 600;
}

.activity-card {
  width: 100%;
  max-width: 320px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.scrollable-list {
  height: 200px;
  overflow-y: auto;
  background-color: #3498db;
  color: white;
  padding: 0;
  margin: 0;
}

.scrollable-list::-webkit-scrollbar {
  width: 6px;
}

.scrollable-list::-webkit-scrollbar-track {
  background: #2980b9;
  border-radius: 3px;
}

.scrollable-list::-webkit-scrollbar-thumb {
  background: #1e6398;
  border-radius: 3px;
}

.scrollable-list::-webkit-scrollbar-thumb:hover {
  background: #1a5276;
}

.activity-item {
  padding: 10px;
  border-bottom: 1px solid #2980b9;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.activity-item:hover {
  background-color: #2980b9;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #2c3e50;
  color: white;
  font-size: 0.8rem;
}

.nav-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.nav-btn:hover {
  background-color: #2980b9;
}
</style>
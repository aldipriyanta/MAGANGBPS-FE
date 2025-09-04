<template>
  <div class="boxteks">
    <div class="teks">
      <h1>
        Berdasarkan Peraturan Kepala Badan Pusat Statistik Nomor 115 Tahun 2024
        Tentang Standar Biaya Kegiatan Statistik, Honorarium Petugas Survei
        dengan Status Non PNS : <br /><br />
        1. Petugas Pendataan Lapangan (Survei) : Rp 3.116.000 <br />
        2. Petugas pemeriksaan Lapangan (Survei) : Rp 3.116.000 <br />
        3. Petugas Pengolahan (Survei) : Rp 2.882.000 <br />
        4. Petugas Pendataan Lapangan (Sensus) : Rp 4.362.000 <br />
        5. Petugas pemeriksaan Lapangan (Sensus) : Rp 4.830.000 <br />
        6. Petugas Pengolahan dan Pengawas Pegolahan (Sensus) : Rp 3.194.000
        <br />
      </h1>
    </div>
  </div>

  <div class="tabelfilter">
    <div class="filter">
      <button class="btninput" @click="onAddActivity">
        Input Kegiatan Mitra
      </button>

      <div class="input-group">
        <select id="idNama" v-model="selectedIdNama" class="pilih">
          <option value="">Id_nama</option>
        </select>
      </div>

      <div class="input-group">
        <select id="tahun" v-model="selectedTahun" class="pilih">
          <option value="">Pilih Tahun</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <button class="btnreset" @click="resetFilters">Reset Filter</button>
    </div>
  </div>

  <div class="tablecontainer">
    <table class="datatable">
      <thead>
        <tr>
          <th>No</th>
          <th>Id_nama</th>
          <th>Tim</th>
          <th>Kegiatan</th>
          <th>Honor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="5" class="texttabel">Memuat data...</td>
        </tr>
        <tr v-else-if="dataHonor.length === 0">
          <td colspan="5" class="texttabel">Tidak ada data ditemukan</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="rincian">
    <h2 class="judulrincian">Rincian kegiatan mitra</h2>
    <div class="tabelrincian">
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
          <!-- tabel -->
        </tbody>
      </table>
    </div>
  </div>

  <div class="tablebawah">
    <div class="tabel tabel1">
      <h3>
        Mitra yang Melebihi Honor Standar Biaya Kegiatan Statistik
        {{ formattedMonth }}
      </h3>
      <div class="card-content">
        <!-- tabel -->
      </div>
    </div>

    <div class="tabel tabel2">
      <h3>Mitra yang tidak memiliki kegiatan {{ formattedMonth }}</h3>
      <div class="card-content">
        <!-- tabel -->
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <div class="pagination">
    <span v-if="pagination">
      1 - {{ dataHonor.length }} / {{ pagination.total }}
    </span>
    <button class="pagebtn" @click="prevPage"><</button>
    <button class="pagebtn" @click="nextPage">></button>
  </div>
</template>

<script>
export default {
  name: "HonorBulananDetail",
  data() {
    return {
      selectedIdNama: "",
      selectedTahun: "",
      dataHonor: [],
      loading: false,
      pagination: {
        total: 0,
        currentPage: 1,
        perPage: 10,
      },
    };
  },
  computed: {
    month() {
      return this.$route.params.bulan?.toLowerCase() || "januari";
    },
    formattedMonth() {
      const months = {
        januari: "Januari",
        februari: "Februari",
        maret: "Maret",
        april: "April",
        mei: "Mei",
        juni: "Juni",
        juli: "Juli",
        agustus: "Agustus",
        september: "September",
        oktober: "Oktober",
        november: "November",
        desember: "Desember",
      };
      return months[this.month] || this.month;
    },
  },
  methods: {
    onAddActivity() {
      alert('Fitur "Input Kegiatan Mitra" akan segera tersedia!');
    },
    resetFilters() {
      this.selectedIdNama = "";
      this.selectedTahun = "";
    },
    prevPage() {
      if (this.pagination.currentPage > 1) {
        this.pagination.currentPage--;
      }
    },
    nextPage() {
      this.pagination.currentPage++;
    },
  },
};
</script>

<style scoped>
/* Informasi Standar Honor */
.boxteks {
  font-family: "Segoe UI", sans-serif;
}

.teks {
  height: 150px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
}

.teks h1 {
  color: black;
  font-size: 1rem;
  margin: 0;
  line-height: 1.6;
}

/* Filter Tabel Utama */
.tabelfilter {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.filter {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.btninput {
  padding: 10px 20px;
  background-color: #0d3b66;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.btninput:hover {
  background-color: #0a2f4a;
}

.input-group {
  flex: 1;
  min-width: 200px;
}

.pilih {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  appearance: none;
  background-color: white;
}

.pilih:focus {
  outline: none;
  border-color: #0d3b66;
  box-shadow: 0 0 0 2px rgba(13, 59, 102, 0.2);
}

.btnreset {
  padding: 10px 20px;
  background-color: #c00;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.btnreset:hover {
  background-color: #a00;
}

/* Tabel Utama */
.tablecontainer {
  overflow-x: auto;
}

.datatable {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.datatable th,
.datatable td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.datatable th {
  background-color: #0d3b66;
  color: white;
  font-weight: bold;
}

.datatable tr:hover {
  background-color: #f0f7ff;
}

.texttabel {
  text-align: center;
  color: #777;
  padding: 20px;
}

/* Rincian Kegiatan Mitra */
.rincian {
  margin-bottom: 20px;
}

.judulrincian {
  text-align: center;
  color: #0d3b66;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.tabelrincian table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.tabelrincian th,
.tabelrincian td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.tablebawah {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.tabel {
  flex: 1;
  min-width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.tabel.tabel1 {
  background-color: #e6f2ff;
  color: #c00;
  border: 1px solid #d9534f;
}

.tabel.tabel2 {
  background-color: #e6f2ff;
  color: #009688;
  border: 1px solid #5cb85c;
}

.tabel h3 {
  font-size: 1rem;
  margin-bottom: 15px;
  color: inherit;
}

.tabel .card-content {
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-height: 100px;
  text-align: left;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  color: #555;
  font-size: 0.9rem;
}

.pagebtn {
  padding: 5px 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.pagebtn:hover {
  background-color: #f0f0f0;
}
</style>

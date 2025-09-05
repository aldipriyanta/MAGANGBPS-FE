<template>
  <div class="boxteks">
    <div class="teksrekap">
      <h1>
        Berdasarkan Peraturan Kepala Badan Pusat Statistik Nomor 115 Tahun 2024
        Tentang Standar Biaya Kegiatan Statistik, Honorarium Petugas Survei
        dengan Status Non PNS : <br /><br />
        1. Petugas Pendataan Lapangan (Survei) : Rp 3.116.000 <br />
        2. Petugas pemeriksaan Lapangan (Survei) : Rp 3.116.000 <br />
        3. Petugas Pengolahan (Survei) : Rp 2.882.000 <br />
        4. Petugas Pendataan Lapangan (Sensus) : Rp 4.362.000 <br />
        5. Petugas pemeriksaan Lapangan (Sensus) : Rp 4.830.000 <br />
        6. Petugas Pengolahan dan Pengawas Pegolahan (Sensus) : Rp 3.194.000<br />
      </h1>
    </div>
  </div>

  <div class="tabelfilter">
    <div class="filter">
      <div class="filtergroup">
        <select id="idNama" v-model="pilihanIdNama" class="filterinput">
          <option value="">Id_nama</option>
        </select>
      </div>

      <div class="filtergroup">
        <select id="tahun" v-model="pilihanTahun" class="filterinput">
          <option value="">Pilih Tahun</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      <button class="btnreset" @click="resetFilters">Reset Filter</button>
    </div>
  </div>

  <div class="gridbulan">
    <div class="itembulan">
      <div class="labelbulan">Januari</div>
      <div class="valuebulan">111.524.500</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">Februari</div>
      <div class="valuebulan">332.410.500</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">Maret</div>
      <div class="valuebulan">162.068.408</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">April</div>
      <div class="valuebulan">101.499.500</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">Mei</div>
      <div class="valuebulan">110.691.500</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">Juni</div>
      <div class="valuebulan">207.120.500</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">Juli</div>
      <div class="valuebulan">243.638.500</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">Agustus</div>
      <div class="valuebulan">923.963.000</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">September</div>
      <div class="valuebulan">195.132.500</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">Oktober</div>
      <div class="valuebulan">68.824.000</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">November</div>
      <div class="valuebulan">120.707.500</div>
    </div>

    <div class="itembulan">
      <div class="labelbulan">Desember</div>
      <div class="valuebulan">89.703.000</div>
    </div>
  </div>

  <div class="tahunan">
    <div class="labeltahunan">Tahunan</div>
    <div class="valuetahunan">2.667.283.408</div>
  </div>


  <div class="rincian">
    <h2 class="judulrincian">Mitra Dengan Kegiatan "0"</h2>
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
</template>

<script>
export default {
  name: 'RekapHonor',
  data() {
    return {
      pilihanIdNama: "",
      pilihanTahun: ""
    }
  }
};
</script>

<style scoped>
.boxteks {
  font-family: "Segoe UI", sans-serif;
}

.teksrekap {
  height: 150px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
}

.teksrekap h1 {
  color: black;
  font-size: 1rem;
  margin: 0;
  line-height: 1.6;
}

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
  background-color: white;
}

.filterinput:focus {
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

/* grid */
.gridbulan {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.itembulan {
  text-align: center;
}

.labelbulan {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
}

.valuebulan {
  background-color: #3b82f6;
  color: white;
  padding: 10px;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tahunan {
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}

.labeltahunan {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
}

.valuetahunan {
  background-color: #10b981;
  color: white;
  padding: 15px;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* tabel rincian */
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
</style>
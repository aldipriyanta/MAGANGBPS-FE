<template>
  <div class="pilihanfilter">
    <div class="filtergroup">
      <select v-model="pilihanTahun" class="filterinput">
        <option value="">Pilih Tahun</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
    <div class="filtergroup">
      <select id="idNama" v-model="pilihanIdNama" class="filterinput">
        <option value="">Id_nama</option>
      </select>
    </div>
    <button class="resetbtn" @click="resetFilters">Reset Filter</button>
  </div>

  <div class="tablecontainer">
    <table class="tablehonor">
      <thead>
        <tr>
          <th>No</th>
          <th>Id_nama</th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>Mei</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Ags</th>
          <th>Sep</th>
          <th>Okt</th>
          <th>Nov</th>
          <th>Des</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RincianHonor',
  data() {
    return {
      pilihanTahun: "",
      pilihanTim: "",
      pilihanIdNama: "",
    };
  },
  methods: {
    resetFilters() {
      this.pilihanTahun = "";
      this.pilihanTim = "";
      this.pilihanIdNama = "";
    },
  }
};
</script>

<style scoped>
.pilihanfilter {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  padding: 20px;
  background-color: white;
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
  margin-left: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.resetbtn:hover {
  background-color: #a00;
}

.tablecontainer {
  margin-top: 30px;
}

.tablehonor {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.tablehonor th {
  background-color: #3b82f6;
  color: white;
  padding: 12px 15px;
  text-align: left;
  /* border-bottom: 1px solid #ddd; */
}

.tablehonor td {
  padding: 12px 15px;
  text-align: right;
  border-bottom: 1px solid #ddd;
}

/* .tablehonor tr:nth-child(even) {
  background-color: #f8f9fa;
} */

.tablehonor tr:hover {
  background-color: #e6f2ff;
}
</style>
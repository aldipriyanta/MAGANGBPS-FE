<template>
  <div class="evaluasicontainer">
    <div class="teksevaluasi">
      <h2>Berikan penilaian Bapak/Ibu dengan ketentuan sebagai berikut:</h2> 
      <p>1. Sangat Baik</p>
      <p>2. Baik</p>
      <p>3. Cukup</p>
      <p>4. Kurang</p>
      <p>5. Sangat Kurang</p>
    </div>
  </div>

  <div class="pilihanfilter">
    <div class="buttontambahpenilaian">
      Tambah penilaian
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
  </div>
</template>

<script>
export default {
  name: 'EvaluasiMitra',
  data() {
    return {
      cariidmitra: ''
    };
  }
};
</script>

<style scoped>
/* teks awal */
.evaluasicontainer {
  padding: 70px 70px 20px;
  font-family: 'Segoe UI', sans-serif;
  border-bottom: 1px solid #ddd;
}
.teksevaluasi {
  font-size: 1rem;
  height: 150px;
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: left;
}
.teksevaluasi p {
  margin: 0;
}

/* pilihan filter */
.pilihanfilter {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  padding: 30px;
  padding-left: 100px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* button tambah penilaian */
.buttontambahpenilaian {
  padding: 20px 40px;
  background-color: #0d3b66;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.3rem;
  transition: background-color 0.2s;
}

.buttontambahpenilaian:hover {
  background-color: #0a3660;
}

/* filter mitra */
.filtermitra {
  min-height: 20px;
  min-width: 10px;
}

.filtermitra input {
  width: 100%;
  padding: 21px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  appearance: none;
}

.filtermitra input:focus {
  outline: none;
  border-color: #0d3b66;
  box-shadow: 0 0 0 2px rgba(13, 59, 102, 0.2);
}
</style>
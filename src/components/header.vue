<template>
  <header class="header">
    <div class="sim">
      <div>
        <img src="/src/assets/sim.png" alt="Logo SIM" class="logosim" />
      </div>

      <div class="judulsim">
        Sistem Integrasi Mitra
      </div>
    </div>

    <div class="bps">
      <img src="/src/assets/logobps.png" alt="logopbs" class="logobps" />
      <div class="judulbps">
        Badan Pusat Statistik <br />
        Kota Malang
      </div>
      <div class="berakhlak">
        <img src="/src/assets/berakhlak.png" alt="logoberakhlak" class="logoberakhlak" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #176cc1;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 50px;
  z-index: 1000;
}

.sim {
  padding-left: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logosim {
  display: flex;
  width: 100%;
  max-width: 90px;
  height: auto;
  object-fit: contain;
}

.judulsim {
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  font-style: italic;
}

.bps {
  display: flex;
  flex-wrap: 10px;
  align-items: center;
  margin-left: 800px;
  justify-items: end;
}

.judulbps {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  font-style: italic;
  text-align: left;
  flex: auto;
  display: flex;
  margin-right: 10px;
}

.logobps {
  display: flex;
  max-height: 70px;
}

.logoberakhlak {
  display: flex;
  max-height: 45px;
  align-items: start;
}
</style>
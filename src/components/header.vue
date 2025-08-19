<template>
    <header class="header">
        <div class="sim">
            <img src="/src/assets/sim.png" alt="Logo SIM" class="logosim" />
        </div>

        <div class="judulsim">
            Sistem Integrasi Mitra
        </div>

    <div class="bps">
        <img src="/src/assets/logobps.png" alt="logopbs" class="logobps" />
        <div class="judulbps">
            Badan Pusat Statistik<br/>
            Kota Malang
        </div>
    </div>

    <div class="berakhlak">
        <img src="/src/assets/berakhlak.png" alt="logoberakhlak" class="logoberakhlak" />
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
  justify-content:flex-start;
  align-items: center;
  padding: 10px 20px;
  height: 60px;
  z-index: 1000;
}

.sim {
  padding-left: 60px;
  display: flex;
  align-items: center;
}

.logosim {
  width: 100%;
  max-width: 90px;
  height: auto;
  object-fit: contain;
} 

.judulsim {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  font-style: italic;
  padding-right: 800px;
}

.bps {
  display: flex;
  align-items: center;
}

.judulbps {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  font-style: italic;
  text-align: left;
  padding-right: 10px;
}

.logobps {
  max-height: 70px;
}

.logoberakhlak{
  max-height: 45px;
}
</style>
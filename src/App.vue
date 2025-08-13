<template>    

  <div class="appcontainer">
        <Header />

   <div class="contentwrapper">
        <Sidebar />
      <main class="maincontent">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Sidebar from './components/sidebar.vue';

export default {
  components: {
    Header,
    Sidebar
  }
};
</script>

<style>
header

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #140f0f;
}


.sidebar {
  width: 250px;
  background-color: #1a1a2e;
  color: white;
  transition: width 0.3s ease;
  overflow-y: auto;
  z-index: 1000;
}

.maincontent {
  flex: 1;
  padding: 90px 20px 20px;
  background-color: #af9f9f;
}


@media (max-width: 768px) {
  .sidebar {
    width: 60px;
  }

}
</style>
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
/* body */
/* body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background-color: #ffffff;
} */
/* body */

.sidebar {
  width: 250px;
  background-color: #176cc1;
  color: white;
  transition: width 0.3s ease;
  overflow-y: auto;
  z-index: 1000;
}

.maincontent {
  background-color: #ffffff;
}


@media (max-width: 768px) {
  .sidebar {
    width: 60px;
  }

}
</style>
<template>
  <div class="app-container">
    <sidebar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue';

export default {
  components: {
    sidebar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f7fa;
}

.app-container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  margin-left: 250px;
  padding: 20px;
  flex: 1;
  background-color: #f5f7fa;
  min-height: 100vh;
}

/* Responsif */
@media (max-width: 768px) {
  .main-content {
    margin-left: 60px;
  }
}
</style>
<template>
  <div class="appcontainer">
    <template v-if="!isLoginPage">
      <Header />
      <div class="contentwrapper">
        <Sidebar />
        <main class="maincontent">
          <router-view />
        </main>
      </div>
    </template>
    <router-view v-else />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Sidebar from "./components/sidebar.vue";

export default {
  components: {
    Header,
    Sidebar
  },
  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    }
  }
};
</script>

<style>
.appcontainer {
  font-family: 'Segoe UI', sans-serif;
  background-color: #ffffff;
}

.contentwrapper {
  display: flex;
}

.maincontent {
  flex: 1;
  padding: 70px 70px;
  background-color: #ffffff;
  padding-right: 20px;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #176cc1;
  color: white;
  transition: width 0.3s ease;
  overflow-y: auto;
  z-index: 1000;
}

@media (max-width: 768px) {
  .sidebar {
    width: 60px;
  }
}
</style>
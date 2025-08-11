<template>
  <aside :class="['sidebar', { collapsed: isCollapsed }]">
    
    <button class="toggle-btn" @click="toggleSidebar">
      {{ isCollapsed ? '☰' : '✕' }}
    </button>

    <nav>
      <ul>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/matrikskegiatan">Matriks Kegiatan</router-link>
        </li>
        <li>
          <router-link to="/rekaphonormitra">Rekap Honor Mitra</router-link>
        </li>
        <li>
          <router-link to="/honormitrabulanan">Honor Mitra Bulanan</router-link>
        </li>
        <li>
          <router-link to="/databasemitra">Database Mitra</router-link>
        </li>
        <li>
          <router-link to="/evaluasimitra">Evaluasi Mitra</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style src="../assets/sidebar.css"></style>
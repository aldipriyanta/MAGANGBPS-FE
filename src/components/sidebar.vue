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
      isCollapsed: true
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style>
.sidebar {
  height: 100vh;
  width: 220px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #176cc1;
  color: white;
  transition: width 0.3s ease-in-out;
  overflow-y: hidden;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-family: 'Segoe UI', sans-serif;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar ul {
  list-style: none;
  padding: 10px;
  margin: 0;
}

.sidebar ul li {
  padding: 5px ;
}

.sidebar ul li a {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.sidebar ul li a:hover {
  background-color: #16213e;
}

.sidebar.collapsed ul li a {
  padding: 15px 0;
  font-size: 0.1px;
  color: transparent;
  position: relative;
}

.sidebar.collapsed ul li a::after {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background: #aaa;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.toggle-btn {
  margin-top: 10px;
  margin-inline-start: 15px;
  background: #176cc1;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-btn:hover {
  background: #16213e;
}

@media (max-width: 768px) {
  .sidebar {
    width: 60px;
  }

  .sidebar .logo span,
  .sidebar ul li a span {
    display: none;
  }
}
</style>
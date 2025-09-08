<template>
  <aside :class="['sidebar', { collapsed: isCollapsed }]">
    <button class="togglebtn" @click="toggleButton">
      {{ isCollapsed ? "☰" : "✕" }}
    </button>
    <nav>
      <ul>
        <li>
          <button class="buttonsidebar" @click.prevent="handleClick('/dashboard')">
            <span class="icon">
              <font-awesome-icon :icon="['far', 'house']" />
            </span>
            <span class="text">Dashboard</span>
          </button>
        </li>
        <li>
          <button class="buttonsidebar" @click.prevent="handleClick('/matrikskegiatan')">
            <span class="icon">
              <font-awesome-icon icon="fa-regular fa-file-lines" />
            </span>Matriks Kegiatan
          </button>
        </li>

        <!-- dropdown rekaphonormitra (class dropdown/buttonsidebar)-->
        <li>
          <div class="dropdown" @click="toggleRekapHonor">
            <span class="arrow">{{ isRekapHonorOpen ? "▼" : "▶" }}</span>
            <span class="icon"><font-awesome-icon icon="fa-regular fa-folder-open" /></span>
            Rekap Honor Mitra
          </div>

          <ul v-if="isRekapHonorOpen" class="submenu">
            <li>
              <router-link to="/rekaphonor" class="submenuitem" @click="autoCollapse">
                Rekap Honor
              </router-link>
            </li>
            <li>
              <router-link to="/rincianhonor" class="submenuitem" @click="autoCollapse">
                Rincian Honor Mitra
              </router-link>
            </li>
          </ul>
        </li>

        <!-- dropdown honormitrabulanan -->
        <li>
          <div class="dropdown" @click="toggleHonorBulanan">
            <span class="arrow">{{ isHonorBulananOpen ? "▼" : "▶" }}</span>
            <span class="icon"><font-awesome-icon icon="fa-regular fa-calendar-days" /></span>
            <div class="tekshonor">Honor Mitra Bulanan</div>
          </div>

          <ul v-if="isHonorBulananOpen" class="submenu">
            <li v-for="month in months" :key="month">
              <router-link :to="`/honorbulanan/${month.toLowerCase()}`" class="submenu-item" @click="autoCollapse">
                {{ month }}
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          <button class="buttonsidebar" @click.prevent="handleClick('/databasemitra')">
            <span class="icon">
              <font-awesome-icon icon="fa-regular fa-user" />
            </span>Database Mitra
          </button>
        </li>
        <li>
          <button class="buttonsidebar" @click.prevent="handleClick('/evaluasimitra')">
            <span class="icon">
              <font-awesome-icon icon="fa-regular fa-star" />
            </span>Evaluasi Mitra
          </button>
        </li>
      </ul>
      <div class="logout">
        <button @click="logout"> Keluar
          {{ isCollapsed ? "" : "🚪" }}
        </button>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapsed: true,
      isSidebarOpen: true,
      isRekapHonorOpen: false,
      isHonorBulananOpen: false,
      months: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
    };
  },
  methods: {
    async handleClick(path) {
      if (this.isCollapsed) {
        this.isCollapsed = false;
      } else {
        await this.$router.push(path);
        this.autoCollapse();
      }
    },
    toggleButton() {
      this.isCollapsed = !this.isCollapsed;
      this.isHonorBulananOpen = false;
      this.isRekapHonorOpen = false;
    },
    toggleSidebar() {
      this.isCollapsed = false;
      this.isHonorBulananOpen = false;
      this.isRekapHonorOpen = false;
    },
    toggleRekapHonor() {
      this.isCollapsed = false;
      this.isRekapHonorOpen = !this.isRekapHonorOpen;
      this.isHonorBulananOpen = false;
    },
    toggleHonorBulanan() {
      this.isCollapsed = false;
      this.isHonorBulananOpen = !this.isHonorBulananOpen;
      this.isRekapHonorOpen = false;
    },
    autoCollapse() {
      this.isRekapHonorOpen = false;
      this.isHonorBulananOpen = false;
      this.isCollapsed = true;
    },
    logout() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');

      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #176cc1;
  color: white;
  transition: width 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 2px 0 8px rgba(149, 125, 125, 0);
  z-index: 1000;
  font-family: "Segoe UI", sans-serif;
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
  padding: 5px;
}

.sidebar ul li a {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.sidebar ul li a:hover {
  border-radius: 8px;
  background-color: #202d53;
}

.sidebar ul li a.router-link-active {
  background-color: #202d53;
}

.buttonsidebar {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: white;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.buttonsidebar:hover {
  background-color: #202d53;
}

.sidebar.collapsed .buttonsidebar {
  color: transparent;
  position: relative;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding-left: 9px;
  padding-right: 13px;
}

/* dropdown */
.dropdown {
  display: flex;
  align-items: center;
  padding: 10px 7px;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.dropdown:hover {
  background-color: #202d53;
}

.arrow {
  margin-right: 5px;
  font-size: 0.8rem;
}

/* submenu ini isi dari dropdown */
.submenu {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #176cc1;
  border-radius: 0 0 8px 8px;
}

.submenuitem {
  display: block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.2s;
  border-radius: 8px;
}

.submenuitem:hover {
  background-color: #16213e;
  border-radius: 8px;
}

.submenuitem.router-link-active {
  background-color: #16213e;
  border-radius: 8px;
}

/* sidebar collased */
/* .sidebar.collapsed ul li a {
  color: transparent;
  position: relative;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding-left: 9px;
  padding-right: 13px;
} */

.sidebar.collapsed .dropdown {
  color: transparent;
  position: relative;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding-left: 9px;
  padding-right: 13px;
}

.sidebar.collapsed.dropdown .router-link-active {
  background-color: #16213e;
  border-radius: 8px;
}

.sidebar.collapsed .dropdown .arrow {
  display: none;
}

/* button sidebar & logout*/
.togglebtn {
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

.togglebtn:hover {
  background: #202d53;
}


.logout {
  margin-top: auto;
  padding: 20px;
  text-align: center;
}

.logout button {
  width: 100%;
  padding: 10px;
  background-color: #c00;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
}

.logout button:hover {
  background-color: #a00;
}

/* icon */
font-awesome-icon {
  margin-right: 10px;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  color: white;
}

.icon {
  margin-right: 5px;
  align-items: center;
  width: 16px;
  height: 16px;
  color: white;
}

/* @media (max-width: 768px) {
  .sidebar {
    width: 60px;
  }
} */
</style>

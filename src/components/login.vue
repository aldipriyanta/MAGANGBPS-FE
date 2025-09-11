<template>
    <div class="login">
        <div class="loginbox">
            <div class="logo">
                <img src="../assets/logobps.png" alt="Logo BPS" />
            </div>

            <h2>Login</h2>

            <form @submit.prevent="handleLogin">
                <div class="input">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="form.email" placeholder="Masukkan Email" required />
                </div>

                <div class="input">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="form.password" placeholder="Masukkan password" required />
                </div>

                <button type="submit" class="btnlogin">Login</button>

                <p v-if="error" class="error">{{ error }}</p>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: '',
      loading: false,
      logoutTimer: null
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.error = '';

      try {
        console.log("🔹 Data dikirim:", this.form);

        const response = await axios.post('http://127.0.0.1:8000/api/login', this.form);

        if (response.data.status === 'success') {
          if (response.data.access_token) {
            localStorage.setItem('role', response.data.user.role);
            localStorage.setItem('token', response.data.access_token);
          }
          localStorage.setItem('isLoggedIn', 'true');

          const loginTime = Date.now();
          localStorage.setItem('loginTime', loginTime);

          this.startSessionTimer();
          this.$router.push('/dashboard');
        } else {
          this.error = response.data.message || 'Login gagal';
        }
      } catch (err) {
        this.error = err.response?.data?.message || 'Gagal Login';
      } finally {
        this.loading = false;
      }
    },

    startSessionTimer() {
      if (this.logoutTimer) clearTimeout(this.logoutTimer);

    //   console.log("Memulai session timeout 5 menit...");

      this.logoutTimer = setTimeout(() => {
        // console.log("⚠ Session timeout tercapai, logout otomatis.");
        this.logout();
      }, 30 * 60 * 1000);

    //   console.log("Timer ID:", this.logoutTimer);

      window.addEventListener('mousemove', this.resetSessionTimer);
      window.addEventListener('keydown', this.resetSessionTimer);
    },

    resetSessionTimer() {
      if (this.logoutTimer) clearTimeout(this.logoutTimer);

    //   console.log("Reset session timer ke 5 menit lagi...");

      this.logoutTimer = setTimeout(() => {
        // console.log("Session timeout tercapai, logout otomatis.");
        this.logout();
      }, 30 * 60 * 1000);

    //   console.log("Timer baru ID:", this.logoutTimer);
    },

    logout() {
        console.log("🚪 Logout dijalankan. Membersihkan session...");

        // hentikan timer session
        if (this.logoutTimer) {
            clearTimeout(this.logoutTimer);
            this.logoutTimer = null;
        }

        // lepas event listener supaya tidak reset timer lagi
        window.removeEventListener('mousemove', this.resetSessionTimer);
        window.removeEventListener('keydown', this.resetSessionTimer);

        // hapus localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem('loginTime');

        console.log("isLoggedIn, token, loginTime dihapus dari localStorage");

        this.$router.push('/login');
        alert('Session habis, silakan login kembali.');
    }
  }
};
</script>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f2f5;
    font-family: 'Segoe UI', sans-serif;
}

.loginbox {
    width: 100%;
    max-width: 400px;
    padding: 30px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.logo img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
}

h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.input {
    margin-bottom: 15px;
    text-align: left;
}

.input label {
    display: block;
    margin-bottom: 5px;
    color: #555;
    font-size: 0.9rem;
}

.input input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    box-sizing: border-box;
}

.input input:focus {
    outline: none;
    border-color: #176cc1;
    box-shadow: 0 0 0 2px rgba(23, 108, 193, 0.2);
}

.btnlogin {
    width: 100%;
    padding: 12px;
    background-color: #176cc1;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.2s;
}

.btnlogin:hover {
    background-color: #145a9d;
}

.error {
    color: #c00;
    font-size: 0.9rem;
    margin-top: 10px;
}
</style>
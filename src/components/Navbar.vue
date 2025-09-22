<template>
  <nav class="navbar navbar-expand-lg shadow navbar-glass fixed-top" id="navbarfor">
    <div class="container">
      <router-link class="navbar-brand fw-bold d-flex align-items-center" to="/">
        <i class="bi bi-globe2 me-2"></i>
        VSGRPS Web Solutions
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/">
              <i class="bi bi-house-door-fill me-1"></i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/about">
              <i class="bi bi-info-circle-fill me-1"></i> About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/services">
              <i class="bi bi-gear-fill me-1"></i> Services
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const navbarCollapse = document.getElementById('navbarNav')
  const navbarToggler = document.querySelector('.navbar-toggler')
  const navLinks = document.querySelectorAll('#navbarNav .nav-link')

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Only trigger if navbar is open (mobile)
      if (navbarCollapse?.classList.contains('show')) {
        // Collapse navbar
        (window as any).bootstrap.Collapse.getInstance(navbarCollapse)?.hide()
        // Trigger navbar toggler click for any animation
        (navbarToggler as HTMLElement)?.click()
      }
    })
  })
})
</script>

<style scoped>
#navbarfor { transition: background-color 0.3s ease, box-shadow 0.3s ease; }

.navbar-glass {
  background: rgba(135, 206, 250, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 8px;
  padding: 0.4rem 0.5rem; 
  font-family: 'Outfit', sans-serif;
  color: black;
  font-size: 0.95rem;
}

.navbar-glass.scrolled {
  background: rgba(135, 206, 250, 0.45);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.nav-link.router-link-active { font-weight: 600; color: #ffbc42 !important; }
.nav-link:hover { color: #ffd369 !important; transition: color 0.2s ease-in-out; }
.navbar-brand i, .nav-link i { font-size: 1rem; }

.navbar-toggler { border: none !important; outline: none !important; box-shadow: none !important; }
.navbar-toggler:hover, .navbar-toggler:focus { border: none !important; outline: none !important; box-shadow: none !important; }
</style>

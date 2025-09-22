<template>
  <footer class="footer-glass py-4 mt-5">
    <div class="container">
      <div class="row align-items-center text-center text-md-start">
        <!-- Brand & Info -->
        <div class="col-md-6 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
          <i class="bi bi-globe2 fs-4 me-2"></i>
          <span class="fw-bold fs-6">VSGRPS Web Solutions</span>
        </div>

        <!-- Social Links -->
        <div class="col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
          <a href="#" class="text-dark fs-5"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-dark fs-5"><i class="bi bi-twitter"></i></a>
          <a href="#" class="text-dark fs-5"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="text-dark fs-5"><i class="bi bi-github"></i></a>
        </div>
      </div>

      <hr class="my-3 border-dark">

      <!-- Copyright & Links -->
      <div class="row text-center text-md-start">
        <div class="col-md-6 mb-2 mb-md-0">
          <small class="text-dark">© 2025 VSGRPS Web Solutions. All rights reserved.</small>
        </div>
        <div class="col-md-6">
          <small>
            <a href="#" class="text-dark me-2">Privacy Policy</a> |
            <a href="#" class="text-dark ms-2">Terms of Service</a>
          </small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer-glass {
  background: rgba(135, 206, 250, 0.3); /* sky blue with transparency */
  backdrop-filter: blur(8px);           /* subtle blur */
  -webkit-backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 1rem 0.5rem;
  font-family: 'Outfit', sans-serif;
}

.footer-glass a {
  transition: color 0.2s ease-in-out;
  color: black;
}

.footer-glass a:hover {
  color: #ffbc42; /* golden accent on hover */
}

.footer-glass hr {
  opacity: 0.3;
  border-color: black;
}

.footer-glass i {
  color: black;
}
</style>

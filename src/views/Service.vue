<template>
  <div class="container py-5 mt-5 services-section">
    <h1 class="display-4 text-center mb-5">Our Services</h1>
    <div class="row g-4">
      <div class="col-md-4" v-for="(service, index) in services" :key="index">
        <div class="card service-card h-100 shadow-sm border-0 text-center p-4 rounded-3">
          <div class="card-body d-flex flex-column align-items-center justify-content-center">
            <i :class="service.icon + ' service-icon mb-3'"></i>
            <h5 class="card-title fw-semibold mb-2">{{ service.name }}</h5>
            <p class="card-text text-muted fs-7">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const services = [
  { name: 'Web Development', description: 'Custom websites with modern tech.', icon: 'bi bi-laptop' },
  { name: 'App Development', description: 'Mobile apps for Android & iOS.', icon: 'bi bi-phone' },
  { name: 'UI/UX Design', description: 'Beautiful and user-friendly interfaces.', icon: 'bi bi-palette' },
  { name: 'SEO & Marketing', description: 'Grow your online visibility.', icon: 'bi bi-graph-up' },
  { name: 'E-commerce Solutions', description: 'Professional online stores.', icon: 'bi bi-bag' },
  { name: 'Consulting', description: 'Expert advice for your digital strategy.', icon: 'bi bi-lightbulb' },
]
</script>

<style scoped>
.services-section h1 {
  color: #000;
  font-weight: 700;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
}
.service-card:hover .service-icon {
  transform: scale(1.2);
}

.card-title {
  font-size: 1.1rem;
  color: #000;
}

.card-text {
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .service-icon {
    font-size: 2.5rem;
  }
  .card-title {
    font-size: 1rem;
  }
  .card-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .service-icon {
    font-size: 2rem;
  }
  .card-title {
    font-size: 0.95rem;
  }
  .card-text {
    font-size: 0.75rem;
  }
}
</style>

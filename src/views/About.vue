<template>
  <div class="container py-5 mt-5 about-us-section">
    <h1 class="display-4 text-center mb-4">About Us</h1>
    <p class="lead text-center mb-5">
      VSGRPS Web Solutions delivers professional web, app, and design solutions for your business. 
      We combine creativity, technology, and strategy to help brands achieve measurable growth.
    </p>

    <div class="row align-items-center mb-5">
      <div class="col-md-6 mb-4">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
          class="img-fluid rounded shadow about-image" 
          alt="About Us">
      </div>
      <div class="col-md-6">
        <h3>Our Mission</h3>
        <p>Deliver innovative and scalable web solutions to help businesses grow and thrive in a digital world.</p>
        
        <h3>Our Vision</h3>
        <p>Be a trusted digital partner for companies globally, empowering them with modern technology and design.</p>

        <h3>Our Approach</h3>
        <p>We prioritize user-centric design, agile development, and measurable results for every project we undertake.</p>
      </div>
    </div>

    <!-- Core Values -->
    <div class="text-center mb-4">
      <h2 class="fw-bold mb-3">Core Values</h2>
      <p class="text-muted mb-5" style="max-width: 650px; margin:auto;">
        Our guiding principles that shape our culture and drive our success.
      </p>
    </div>
    <div class="row g-4">
      <div class="col-md-4" v-for="(value,i) in coreValues" :key="i">
        <div class="card h-100 border-0 shadow-sm text-center p-3 p-md-4 rounded-3 value-card">
          <i :class="`${value.icon} fs-2 text-primary mb-2`"></i>
          <h5 class="fw-semibold mb-2 fs-6">{{ value.title }}</h5>
          <p class="text-muted fs-7">{{ value.description }}</p>
        </div>
      </div>
    </div>

   
  </div>
</template>

<script lang="ts" setup>
const coreValues = [
  { icon: 'bi bi-lightbulb-fill', title: 'Innovation', description: 'We create modern solutions using the latest technology.' },
  { icon: 'bi bi-people-fill', title: 'Collaboration', description: 'We work closely with clients to achieve their goals.' },
  { icon: 'bi bi-award-fill', title: 'Excellence', description: 'We deliver high-quality results for every project.' }
]
</script>

<style scoped>
.about-us-section {
  border-radius: 15px;
  padding: 50px 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.about-us-section h1, .about-us-section h2, .about-us-section h3 {
  color: #000;
}

.about-us-section p.lead, .about-us-section p {
  color: #495057;
  font-size: 1rem;
}

.about-image {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-image:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.value-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
</style>

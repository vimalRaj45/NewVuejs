<template>
  <div class="home-page" role="main">

    <!-- Hero Carousel -->
    <section class="hero-section position-relative overflow-hidden">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000">
        <div class="carousel-indicators position-absolute top-0 start-50 translate-middle-x mt-4 z-2">
          <button 
            v-for="(slide, index) in slides" 
            :key="index" 
            type="button" 
            :data-bs-target="'#heroCarousel'"
            :data-bs-slide-to="index" 
            :class="{ active: index === 0 }"
            :aria-label="`Go to slide ${index + 1}`"
            class="rounded-pill"
          ></button>
        </div>

        <div class="carousel-inner">
          <div 
            v-for="(slide, index) in slides" 
            :key="index" 
            :class="['carousel-item', { active: index === 0 }]" 
            role="group" 
            :aria-label="`Slide ${index + 1}: ${slide.title}`"
          >
            <div class="carousel-image-container">
              <img 
                :src="slide.img" 
                class="d-block w-100 carousel-img" 
                :alt="slide.title" 
                loading="lazy"
                decoding="async"
              />
              <div class="image-overlay"></div>
            </div>
            <div class="carousel-caption text-center text-md-start animate__animated animate__fadeInUp">
              <span class="badge bg-white text-primary fw-bold mb-2 px-3 py-1 rounded-pill fs-xsmall">Featured</span>
              <h1 class="fw-bold mb-2 carousel-title">{{ slide.title }}</h1>
              <p class="mb-3 opacity-90 carousel-text">{{ slide.text }}</p>
              <router-link 
                :to="slide.link" 
                class="btn btn-gradient rounded-pill px-4 py-2 fw-semibold carousel-btn"
              >
                {{ slide.buttonText }} 
                <i :class="`${slide.icon} ms-1`" aria-hidden="true"></i>
              </router-link>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" aria-label="Previous slide">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" aria-label="Next slide">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>

    <!-- Features Section -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5 pb-3">
      <span class="badge bg-primary text-white px-3 py-1 mb-3 fs-6 rounded-pill">Why Choose Us</span>
      <h2 class="fw-bold mb-2 fs-3">We Craft Digital Excellence</h2>
      <p class="text-muted mx-auto mb-4" style="max-width:600px; font-size:0.85rem;">
        Trusted by startups and enterprises alike, we deliver scalable, future-proof digital solutions that drive measurable results.
      </p>
    </div>
    <div class="row g-3 g-md-4">
      <div class="col-md-4" v-for="(feature,i) in features" :key="i">
        <div class="card h-100 text-center p-3 p-md-4 border-0 shadow-sm rounded-3 transition">
          <div class="mb-3">
            <i :class="`${feature.icon} fs-2 text-primary mb-2`"></i>
            <h5 class="fw-semibold mb-2 fs-6">{{ feature.title }}</h5>
            <p class="text-muted mb-3 fs-7">{{ feature.description }}</p>
            <a href="#" class="btn btn-sm btn-outline-primary rounded-pill fs-7">
              Learn More <i class="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    <!-- Stats / Trust Indicators -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-md-4">
            <div class="display-4 fw-bold text-primary">500+</div>
            <div class="text-muted">Projects Delivered</div>
          </div>
          <div class="col-md-4">
            <div class="display-4 fw-bold text-success">98%</div>
            <div class="text-muted">Client Satisfaction</div>
          </div>
          <div class="col-md-4">
            <div class="display-4 fw-bold text-info">5+</div>
            <div class="text-muted">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5 py-md-6 text-center text-white position-relative overflow-hidden">
      <div class="container position-relative">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="display-5 fw-bold mb-3">Ready to Transform Your Digital Presence?</h2>
            <p class="lead mb-5 opacity-90">
              Let's build something amazing together. Our team is ready to bring your vision to life.
            </p>
            <router-link 
              to="/contact" 
              class="btn btn-lg btn-gradient rounded-pill px-5 py-3 fw-semibold"
            >
              Get Started <i class="bi bi-rocket ms-2" aria-hidden="true"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const features = [
  { 
    icon: 'bi bi-people-fill text-primary', 
    title: 'Expert Team', 
    description: 'Certified developers and designers with 5+ years of industry experience crafting scalable solutions.' 
  },
  { 
    icon: 'bi bi-brush text-info', 
    title: 'Modern Design', 
    description: 'UI/UX crafted for engagement, conversion, and accessibility — mobile-first and pixel-perfect.' 
  },
  { 
    icon: 'bi bi-currency-dollar text-success', 
    title: 'Affordable Pricing', 
    description: 'Transparent, value-driven pricing with no hidden fees. ROI-focused packages for every budget.' 
  },
]

const slides = [
  { 
    img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=80', 
    title: 'Elevate Your Digital Strategy', 
    text: 'End-to-end web & app development tailored to your business goals.',
    buttonText: 'Explore Services',
    link: '/services',
    icon: 'bi bi-arrow-right'
  },
  { 
    img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80', 
    title: 'Stunning, Responsive Designs', 
    text: 'Beautiful interfaces that captivate users and drive conversions.',
    buttonText: 'View Portfolio',
    link: '/portfolio',
    icon: 'bi bi-grid'
  },
  { 
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80', 
    title: 'Grow With Confidence', 
    text: 'Scalable solutions built for performance, security, and long-term success.',
    buttonText: 'Talk to Experts',
    link: '/contact',
    icon: 'bi bi-rocket'
  }
]
</script>
<style scoped>
/* Global */
.home-page {
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding-top: 52px;
  scroll-behavior: smooth;
}

/* X-Small font size utility */
.fs-xsmall {
  font-size: 0.7rem !important;
}

/* Hero Section */
.hero-section {
  margin-top: -52px; /* compensate for fixed navbar */
  padding-top: 52px;
  position: relative;
  overflow: hidden;
}

.carousel-img {
  height: 650px;
  object-fit: cover;
  filter: brightness(0.9);
  transition: transform 0.5s ease;
}
.carousel-item.active .carousel-img {
  transform: scale(1.02);
}

.carousel-image-container {
  position: relative;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, rgba(0,0,0,0.75), rgba(0,0,0,0.4));
  z-index: 1;
}

/* Carousel caption */
.carousel-caption {
  bottom: 50%;
  transform: translateY(50%);
  color: #fff;
  padding: 0.5rem 1rem;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  z-index: 2;
}

/* Carousel text styles */
.carousel-title {
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.carousel-text {
  font-size: clamp(0.7rem, 2vw, 0.9rem);
  margin-bottom: 1rem;
  opacity: 0.9;
  line-height: 1.4;
}

.carousel-btn {
  font-size: clamp(0.7rem, 2vw, 0.85rem);
  padding: 0.4rem 1rem !important;
}

/* Center text on mobile */
@media (max-width: 768px) {
  .carousel-caption {
    align-items: center;
    text-align: center;
    bottom: 40%;
    padding: 0.5rem;
  }
}

/* Carousel indicators */
.carousel-indicators {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  z-index: 2;
}
.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.5);
  border: none;
  transition: all 0.3s ease;
}
.carousel-indicators .active {
  background-color: #fff;
  width: 20px;
  border-radius: 10px;
}

/* Buttons */
.btn-gradient {
  background: linear-gradient(90deg, #0d6efd, #6610f2);
  color: #fff;
  border: none;
  box-shadow: 0 0.3rem 1rem rgba(13, 110, 253, 0.3);
  transition: all 0.3s ease;
}
.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1.5rem rgba(13, 110, 253, 0.4);
  background: linear-gradient(90deg, #0b5ed7, #5a0cb2);
}


/* Stats Section */
.bg-white .display-4 {
  font-weight: 700;
  line-height: 1;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(120deg, #0d6efd, #6610f2, #7952b3);
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
  border-radius: 2rem;
  padding: 5rem 2rem;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
  text-align: center;
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
  z-index: 0;
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.cta-section .container { position: relative; z-index: 1; }

/* Responsive Hero */
@media (max-width: 992px) { .carousel-img{height:550px;} }
@media (max-width: 768px) { .carousel-img{height:450px;} }
@media (max-width: 576px) { 
  .carousel-img{height:350px;} 
  .carousel-title { font-size: clamp(1rem, 4vw, 1.5rem); }
  .carousel-text { font-size: clamp(0.65rem, 2vw, 0.8rem); }
  .carousel-btn { font-size: clamp(0.65rem, 2vw, 0.75rem); }
}

/* Accessibility */
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>
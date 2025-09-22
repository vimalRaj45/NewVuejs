import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 1️⃣ Create app instance
const app = createApp(App)

// 2️⃣ Disable Vue DevTools
app.config.devtools = false

// 3️⃣ Use router and mount
app.use(router).mount('#app')

// 4️⃣ Hide Vue DevTools global hook safely
setTimeout(() => {
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    try {
      Object.defineProperty(window, '__VUE_DEVTOOLS_GLOBAL_HOOK__', {
        value: null,
        writable: false,
        configurable: false
      })
    } catch (e) {
      // ignore errors
    }
  }
}, 0)

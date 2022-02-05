import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import vuetify from './plugins/vuetify.js' // path to vuetify export
import Navbar from './common/Navbar.vue'
import Footer from './common/Footter.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
Vue.config.productionTip = false
Vue.component('Navbar',Navbar)
Vue.component('Footer',Footer)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

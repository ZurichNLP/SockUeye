import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import textarea-autosize
import TextareaAutosize from 'vue-textarea-autosize'
Vue.use(TextareaAutosize)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({routes: Routes, mode: 'history'});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

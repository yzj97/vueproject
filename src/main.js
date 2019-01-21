import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

// import './assets/styles/NewGlobal.css'
import $ from 'jquery'

window.$ = $

import axios from './plugins/axios'
Vue.use(axios)

// console.log(axios)

import loading from './components/loading';

Vue.use(loading)

import 'animate.css'

import './assets/Scripts/font'






new Vue({
  data(){
    return {
      title:''
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

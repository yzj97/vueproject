import Vue from 'vue'
import axios from 'axios'
import store from '../store'
import * as types from '../store/types'

// Vue.use(axios);
// window.axios = axios
Vue.prototype.$http = axios

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log(types.VIRW_LOADING)
  store.dispatch(types.VIRW_LOADING,true)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.dispatch(types.VIRW_LOADING,false)
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default{
    install:function(Vue){
      Vue.prototype.$http = axios;
      window.axios = axios
    }
}
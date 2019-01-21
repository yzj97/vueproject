import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './components/home'
import activitys from './components/activitys'
import login from './components/login'
import cityList from './components/cityList'
import error from './components/error'
import giftAspx from './components/gift.aspx'
const  giftList = ()=> import('./components/giftlist')
import hotelAspx from './components/hotel.aspx'
import hotelAspxcheckInDate from './components/hotel.aspxcheckInDate'
import hotelInfoAspx from './components/hotelInfo.aspx'
const  hotelListAspxcheckInDate = ()=> import('./components/hotelList.aspxcheckInDate')
import NewsAspx from './components/News.aspx'
import appheader from './components/appheader'
import appfooter from './components/appfooter'
import help from './components/help'
import user from './components/user'
import reg from './components/reg'
import logout from './components/logout'




let routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:home},
  {path:'/activitys',component:activitys},
  {path:'/user',component:user},
  {path:'/appheader',component:appheader},
  {path:'/appfooter',component:appfooter},
  {path:'/login',component:login},
  {path:'/cityList',component:cityList},
  {path:'/giftAspx',component:giftAspx,name:"giftAspx"},
  {path:'/giftList',component:giftList,name:"giftList"},
  {path:'/help',component:help},
  {path:'/reg',component:reg},
  {path:'/hotelAspx',component:hotelAspx},
  {path:'/hotelAspxcheckInDate',component:hotelAspxcheckInDate,name:'hotelAspxcheckInDate'},
  {path:'/hotelInfoAspx',component:hotelInfoAspx},
  {path:'/hotelListAspxcheckInDate',component:hotelListAspxcheckInDate},
  {path:'/NewsAspx',component:NewsAspx,name:'NewsAspx'},
  {path:'/logout',component:logout},

  {path:'*',component:error}
]

export default new Router({
  routes,
  // scrollBehavior(to,from,savedPosition){
  //   return {x:0,y:0}
  // }
})

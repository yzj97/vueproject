
<template>
    <div>
      <appheader v-show='bHeader'></appheader>
      <loading v-show="bLoading"></loading>
     <transition
      enter-active-class="animated fadeIn"
     >
         <router-view></router-view>
     </transition>
      <appfooter v-show='bFooter'></appfooter>
    </div>
</template>

<script>

import home from './components/home'
// import activitys from './components/activitys.vue'
// import  from ''
import appheader from './components/appheader'
import appfooter from './components/appfooter'
// import giftAspx from './components/gift.aspx'
// import giftList from './components/giftlist'
// import hotelaspx from './components/hotel.aspx'
// import hotelListAspxcheckInDate from './components/hotelList.aspxcheckInDate'
// import hotelInfo from './components/hotelInfo.aspx'
// import login from './components/login'

import { mapGetters } from 'vuex'
import * as types from './store/types'

export default {
  name:"app",
  components:{appheader,appfooter,home},
  computed:mapGetters(['bLoading','bHeader','bFooter']),
  watch: {
    $route:{
      handler:function(to){
       let path = to.path
       if(/user|activitys|cityList|error|giftAspx|giftList|help|home|hotelAspx|hotelAspxcheckInDate|hotelInfoAspx|hotelListAspxcheckInDate|NewsAspx/.test(path)){
          this.$store.dispatch(types.VIRW_BHEADER,true)
          this.$store.dispatch(types.VIRW_BFOOTER,true)
       }
       if(/login|reg|logout/.test(path)){
         this.$store.dispatch(types.VIRW_BHEADER,false)
          this.$store.dispatch(types.VIRW_BFOOTER,false)
       }
       if(/user/.test(path)){
          this.$store.dispatch(types.VIRW_BHEADER,true)
          this.$store.dispatch(types.VIRW_BFOOTER,false)
       }
      }

    }
  }
}
</script>

<style>
</style>

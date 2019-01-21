<template>
<div>
  <div class="hello">
    <div class="container">
      <div style="padding:0 5px 0 0;">
        <ul class="unstyled defaultlist pt20">
          <li class="f">
            <router-link to="/cityList">
             <h3>预定酒店</h3>
              <figure class="jp_icon"></figure>
            </router-link>            
          </li>
          <li class="h">
            <router-link to="/activitys">
               <h3>最新活动</h3>
               <figure class="jd_icon"></figure>
            </router-link>
          </li>
        </ul>
        <ul class="unstyled defaultlist">
          <li class="a">
            <router-link to="/user">
               <h3>我的订单</h3>
              <figure class="hb_icon"></figure>
            </router-link>
          </li>
          <li class="p">
           <router-link to="/user">
              <h3>我的格子</h3>
              <figure class="mp_icon"></figure>
            </router-link>
          </li>
        </ul>
        <ul class="unstyled defaultlist">
          <li class="t">
            <router-link to="/giftList">
               <h3>礼品商城</h3>
              <figure class="hcp_icon"></figure>
            </router-link>
          </li>

          <li class="m">
            <router-link to="/help">
               <h3>帮助咨询</h3>
              <figure class="wdxc_icon"></figure>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- <swipe class="my-swipe">
  <swipe-item class="slide1"></swipe-item>
  <swipe-item class="slide2"></swipe-item>
  <swipe-item class="slide3"></swipe-item>
</swipe> -->
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe';


export default {
  name: "home",
  data(){
    return {
      list:[]
    }
  },
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
  mounted() {
    this.$root.title = '主页'
    // axios({
    //   url:'/data/giftlist.json'
    // }).then(
    //   res=>{
    //     this.list = res.data
    //     console.log(this.list)
    //     }
    // )
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 li{list-style: none;}

 .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
 /* *{margin: 0;padding: 0;} */
</style>

<template>
  <div>
    <div class="container">
      <ul class="giftlist unstyled">
        <li 
          v-for='item of list'
          :key = 'item.id'
        >
          <div class="imgbox">
            <router-link :to="{name:'giftAspx',params:{id:item.id}}">
              <img :src="item.img">
            </router-link>
          </div>
          <div class="desc">
            <router-link :to="{name:'giftAspx',params:{id:item.id}}">
               {{item.name}}
            </router-link>
          
            <br>
            <router-link :to="{name:'giftAspx',params:{id:item.id}}">
              {{item.scoer}}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
let top = 0;
export default {
  
  data(){
     return {
       list:[]
     }
  },
  destroyed() {
    top = document.documentElement.scrollTop
    console.log('destroyed',top)
  },
 mounted() {
   axios({
      url:'/data/giftlist.json'
    }).then(
      res=>{
        this.list = res.data
        }
    )
    this.$root.title = '礼品列表'  
 },
  updated() {
    document.documentElement.scrollTop = top
    console.log('updated',top)
  },


}
</script>
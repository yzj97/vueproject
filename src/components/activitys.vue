<template>
  <div>
    <div class="container width90">
      <ul class="unstyled activitylist">
        <li
           v-for='item of list'
          :key = 'item.id'
        >
          <router-link :to="{name:'NewsAspx',params:{id:item.id}}">
            <img :src="item.img">
            <p>{{item.msg}}</p>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  mounted() {
   axios({
      url:'/data/activitys.json'
    }).then(
      res=>{
        this.list = res.data
        }
    )
    this.$root.title = '活动'
 },
  
}
</script>



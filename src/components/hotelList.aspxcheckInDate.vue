<template>
  <div>
    <div class="container hotellistbg">
      <ul class="unstyled hotellist">
        <li 
        
        v-for=" item in this.list"
        :key='item.id'
        >
          <router-link :to="{name:'hotelAspxcheckInDate',params:{id:item.id}}">
            <img class="hotelimg fl" src="../assets/Images/calendar.png">
            <div class="inline">
              <h3>{{item.name}}</h3>
              <p>{{item.adress}}</p>
              <p>{{item.scoer}}</p>
            </div>
            <div class="clear"></div>
          </router-link>
          <ul class="unstyled">
            <li>
              <router-link :to="{name:'hotelAspxcheckInDate',params:{id:item.id}}">预订</router-link>
            </li>
            <li>
              <router-link :to="{name:'hotelAspxcheckInDate',params:{id:item.id}}">导航</router-link>
            </li>
            <li>
            <router-link :to="{name:'hotelAspxcheckInDate',params:{id:item.id}}" class="reality">实景</router-link>
            </li>
          </ul>
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
  mounted(){
    this.$http({
      url:"/data/hotlist.json"
    }).then(
      res=>{
        this.list = res.data
      }
    )
    this.$root.title = '酒店列表'
  }
}
</script>
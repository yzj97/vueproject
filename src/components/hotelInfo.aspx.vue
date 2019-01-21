<template>
  <div>
    <div class="container">
      <ul class="unstyled hotel-bar">
        <li class="first">
          <router-link to="/hotelAspxcheckInDate" >房型</router-link>
        </li>
        <li>
           <router-link to="/hotelInfoAspx" class="active">简介</router-link>
        </li>
        <li>
          <a href="javascript:;">地图</a>
        </li>
        <li>
          <a href="javascript:;">评论</a>
        </li>
      </ul>
      <div class="hotel-prompt">
        <span class="hotel-prompt-title">酒店图片</span>
        <div id="slider" style="margin-top: 10px;">
          <div>
            <img src="../assets/Images/calendar.png">
            <p>酒店外观</p>
          </div>

          <div>
            <img src="../assets/Images/calendar.png">
            <p>大堂</p>
          </div>

          <div>
            <img src="../assets/Images/calendar.png">
            <p>阳光大床房</p>
          </div>
        </div>
      </div>
      <div id="hotelinfo" class="hotel-prompt">
        <span class="hotel-prompt-title">酒店简介</span>
        <p>格子微酒店南宁南宁秀灵路店位于广西最著名大学广西大学东门旁，紧邻邕江边，周边超市、餐饮、银行等配套设施完善，出行便利。 酒店倡导低碳环保，客房内配有24小时热水、wifi网络、电视等设施，客房虽小，设施齐全。酒店服务周到细致，是您出行的不错选择。 酒店开业时间2012年12月。</p>
        <p></p>
        <p>电话：0771-3391588</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$root.title = '酒店简介'
  }
}
</script>
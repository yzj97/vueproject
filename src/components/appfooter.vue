<template>
<div>
  <div class="footer">
    <div class="gezifooter">
      <router-link to="/login" class="ui-link"> 立即登陆 </router-link>
      <font color="#878787">|</font>
      <router-link to="/reg" class="ui-link">免费注册</router-link>
      <font color="#878787">|</font>
      
      <a href="../www.gridinn.com/@display=pc" class="ui-link">电脑版</a>
    </div>
    <div class="gezifooter">
      <p style="color:#bbb;">格子微酒店连锁 &copy; 版权所有 2012-2014</p>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "appfooter",
}
</script>
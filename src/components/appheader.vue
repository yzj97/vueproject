<template>
    <div>
    <div class="header">
      <router-link to="/home" class="home">
        <span class="header-icon header-icon-home"></span>
        <span class="header-name">主页</span>
      </router-link>
      <div class="title" id="titleString">{{$root.title}}</div>
      <a href="javascript:history.go(-1);" class="back">
        <span class="header-icon header-icon-return"></span>
         <span class="header-name">返回</span>
      </a>
    </div>
    </div>
</template>
<script>
export default {
  name: "appheader",
}
</script>
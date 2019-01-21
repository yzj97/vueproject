<template>
    <div>
     <div class="container width90 pt20">
         <!-- <div class="box2">456</div> -->
        <img src="Images/help/0.jpg"/>
        <img src="Images/help/1.jpg"/>
        <img src="Images/help/2.jpg"/>
        <img src="Images/help/3.jpg"/>
        <img src="Images/help/4.jpg"/>
        <img src="Images/help/5.jpg"/>
    </div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.$root.title = '帮助'
    }
}
</script>
<style lang='scss'>
// @import '../assets/scss/base.scss';

    .container{
        padding-top: 60px;
        // .box{
           
        //     width: 100%;
        //     height: 60px;
        // }
    }
</style>
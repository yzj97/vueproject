<template>
    <div>
        <div class="container width90">
        <p class="newstitle">{{this.msg}}</p>
        <div style="font-size:11pt">哪家格子微分店是您最喜欢的呢？即日起至4月30日，在微信发送您最喜欢的分店与喜欢的理由即有机会获得免费房（共100间）</div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
        msg:''
       }
    },
    mounted() {
        axios({
            url:'/data/activitys.json'
        }).then(
            res=>{
                console.log(this)
                res.data.forEach(item => {
                    if(item.id == this.$route.params.id){
                       this.msg = item.msg
                    }
                })
            }
        )
        this.$root.title = '活动详情'
    },
}
</script>
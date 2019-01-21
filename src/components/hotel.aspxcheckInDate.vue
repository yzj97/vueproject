<template>
  <div>
    <div class="container">
      <ul class="unstyled hotel-bar">
        <li class="first">
           <router-link to="/hotelAspxcheckInDate" class="active">房型</router-link>
        </li>
        <li>
           <router-link to="/hotelInfoAspx">简介</router-link>
        </li>
        <li>
          <a href="#">地图</a>
        </li>
        <li>
          <a href="Hotelreview.aspx.html">评论</a>
        </li>
      </ul>
      <div id="BookRoom" class="tab-pane active fade in">
        <div class="detail-address-bar">
          <img alt src="../assets/Images/location_icon.png">
          <p>{{this.adress}}</p>
        </div>
        <div id="datetab" class="detail-time-bar">
          <img alt src="../assets/Images/calendar.png">
          <p>04月11日 - 04月12日</p>
          <span class="icon-down"></span>
        </div>
        <form action="hotel.aspx" method="GET">
          <div id="datebox" class="section none">
            <div class="filter clearfix">
              <p style="margin-bottom: 10px;display: block;">入住：
                <a id="datestart" href="javascript:void(0)">
                  <span class="ui-icon-down"></span>
                </a>
              </p>
              <br>
              <p>离开：
                <a id="dateend" href="javascript:void(0)">
                  <span class="ui-icon-down"></span>
                </a>
              </p>
            </div>
            <div id="datepicker_wrap">
              <div id="dp_start">
                <p>入住时间：</p>
                <div id="datepicker_start"></div>
              </div>
              <div id="dp_end">
                <p>离开时间：</p>
                <div id="datepicker_end"></div>
              </div>
            </div>
            <div class="result">
              <input type="submit" class="btn" value="确定修改">
              <span class="btn" id="datecancel">取消</span>
            </div>
            <input id="id" name="id" type="hidden" value="5">
            <input id="CheckInDate" name="CheckInDate" type="hidden" value="2014-4-11">
            <input id="CheckOutDate" name="CheckOutDate" type="hidden" value="2014-4-12">
          </div>
        </form>
        <ul class="unstyled roomlist">
          <li>
            <div class="roomtitle">
              <div class="roomname">上下铺</div>

              <div class="fr">
                <em class="orange roomprice">￥134 起</em>
                
                <a
                  href="login.aspx@page=_2Forderhotel.aspx&hotelid=5&roomtype=5&checkInDate=2014-4-11&checkOutDate=2014-4-12"
                  title="立即预定"
                  class="btn btn-success iframe"
                >预定</a>
              </div>
            </div>

            <a class="fl roompic" bigsrc="http://www.gridinn.com/photos/201304/20130411152105m.jpg">
              <img title="秀灵上下铺" src="../assets/Images/calendar.png">
            </a>
          </li>

          <li>
            <div class="roomtitle">
              <div class="roomname">榻榻米</div>

              <div class="fr">
                <em class="orange roomprice">￥124 起</em>
                
                <a
                  href="login.aspx@page=_2Forderhotel.aspx&hotelid=5&roomtype=4&checkInDate=2014-4-11&checkOutDate=2014-4-12"
                  title="立即预定"
                  class="btn btn-success iframe"
                >预定</a>
              </div>
            </div>

            <a class="fl roompic" bigsrc="http://www.gridinn.com/photos/201311/20131107115608m.jpg">
              <img title="榻榻米" src="../assets/Images/calendar.png">
            </a>
          </li>

          <li>
            <div class="roomtitle">
              <div class="roomname">阳光房</div>

              <div class="fr">
                <em class="orange roomprice">￥124 起</em>
                
                <span class="btn">满房</span>
              </div>
            </div>

            <a class="fl roompic" bigsrc="http://www.gridinn.com/photos/201304/20130411152015m.jpg">
              <img title="秀灵阳光" src="../assets/Images/calendar.png">
            </a>
            
            <a class="fl roompic" bigsrc="http://www.gridinn.com/photos/201307/20130729222733m.jpg">
              <img title="阳光房" src="../assets/Images/calendar.png">
            </a>
          </li>

          <li>
            <div class="roomtitle">
              <div class="roomname">阁楼房</div>

              <div class="fr">
                <em class="orange roomprice">￥144 起</em>
                
                <span class="btn">满房</span>
              </div>
            </div>

            <a class="fl roompic" bigsrc="http://www.gridinn.com/photos/201304/20130411151851m.jpg">
              <img title="秀灵阁楼" src="../assets/Images/calendar.png">
            </a>
            
            <a class="fl roompic" bigsrc="http://www.gridinn.com/photos/201307/20130729222806m.jpg">
              <img title="阁楼房" src="../assets/Images/calendar.png">
            </a>
          </li>

          <li>
            <div class="roomtitle">
              <div class="roomname">迷你房</div>

              <div class="fr">
                <em class="orange roomprice">￥103 起</em>
                
                <span class="btn">满房</span>
              </div>
            </div>

            <a class="fl roompic" bigsrc="http://www.gridinn.com/photos/201304/20130411151945m.jpg">
              <img title="秀灵迷你" src="../assets/Images/calendar.png">
            </a>
            
            <a class="fl roompic" bigsrc="http://www.gridinn.com/photos/201307/20130729222654m.jpg">
              <img title="迷你房" src="../assets/Images/calendar.png">
            </a>
          </li>
        </ul>
        <div
          style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
          class="hotel-prompt"
        >
          <span class="hotel-prompt-title" id="digxx">特别提示</span>
          <p>最早入住时间为中午12：00，如需提前入住请联系客服。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
     return {
       adress:'',
     }
  },
  mounted(){
    console.log(123)
    axios({
      url:'/data/hotlist.json'
    }).then(
      res => {
        res.data.forEach(item => {
          if(item.id == this.$route.params.id){
            this.adress = item.adress
          }
        })
      }
    )
    this.$root.title = '酒店详情'
  }
}
</script>

<style scoped>
    .section {
            background: #f3f3f3;
            font-size: 14px;
        }
        #datepicker_wrap {
            overflow: hidden;
            height: 0;
            -webkit-transition: height 200ms ease-in-out;
            background: #e1e1e1;
            -webkit-box-sizing:border-box;
            box-sizing:border-box;
        }
        #datepicker_wrap>div {
            display: none;
            padding: 5px 5px 25px 5px;
        }

        .filter {
            padding:10px 10px 0px;
        
        }
        .filter:after {
            content: '\0020';
            clear: both;
            display: block;
            height: 0;
            font-size: 0;
            line-height: 0;
        }

        .filter a {
            border: 1px solid #e1e1e1;
            text-decoration: none;
            color: #000;
            padding: 5px 26px 5px 5px;
            margin: 0 5px 0 0;
            position: relative;
            background: #fff;
        }
        .icon-down {
            background-image: url("http://gmu.baidu.com/demo/assets/icons-36-black.png");
            background-position: 	-216px 50%;
             width:18px;
            height: 18px;
            display: inline-block;
            -webkit-background-size: 776px 18px;
            background-size: 776px 18px;
            float: right;
              margin-top: 10px;
        }
        .icon-down-up {
            background-position: 	-180px 50%;
        }
        .filter a .ui-icon-down {
            position: absolute;
            top: 50%;
            right: 5px;
            background-image: url("http://gmu.baidu.com/demo/assets/icons-36-black.png");
            -webkit-background-size: 776px 18px;
            background-size: 776px 18px;
            width:18px;
            height: 18px;
            margin-top: -9px;
            background-position: 	-216px 50%;
        }
        .filter a.ui-state-active, .filter a.ui-state-hover {
            background: #fff;
        }
        .filter a.ui-state-active .ui-icon-down, .filter a.ui-state-hover .ui-icon-down {
            background-position: 	-180px 50%;
        }

        .filter a.search {
            float: right;
            padding: 5px;
            margin: 0;
        }
        .result {
            padding:10px 15px;
            text-align: left;
        }
</style>
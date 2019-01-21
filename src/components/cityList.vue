<template>
  <div>
    <div class="container width90 pt20">
      <form class="form-horizontal" action="HotelList.aspx" method="GET" id="form1">
        <ul class="search-group unstyled">
          <li>
            <div class="coupon-nav coupon-nav-style">
              <span class="search-icon location-icon"></span>
              <span class="coupon-label">选择城市：</span>
              <span class="coupon-input">
                <span style="font-size: 16px; line-height: 35px;" id="cityname">全部城市</span>
              </span>
            </div>
            <div class="citybox">
              <span cityId="0">全部</span>
              <span cityId="771">南宁</span>
              <span cityId="773">桂林</span>
              <span cityId="371">郑州</span>
            </div>
          </li>
          <li>
            <div class="coupon-nav coupon-nav-style">
              <span class="search-icon time-icon"></span>
              <span class="coupon-label">入住日期：</span>
              <span class="coupon-input">
                <a id="datestart" class="datebox" href="javascript:void(0)">
                  <span class="ui-icon-down"></span>
                </a>
              </span>
            </div>
            <div id="dp_start" class="none">
              <div id="datepicker_start"></div>
            </div>
          </li>
          <li>
            <div class="coupon-nav coupon-nav-style">
              <span class="search-icon time-icon"></span>
              <span class="coupon-label">离店日期：</span>
              <span class="coupon-input">
                <a id="dateend" class="datebox" href="javascript:void(0)">
                  <span class="ui-icon-down"></span>
                </a>
              </span>
            </div>
            <div id="dp_end" class="none">
              <div id="datepicker_end"></div>
            </div>
          </li>
        </ul>
        <input id="checkInDate" name="checkInDate" value="2014-04-11" type="hidden">
        <input id="checkOutDate" name="checkOutDate" value="2014-04-12" type="hidden">
        <input id="cityID" name="cityID" value="0" type="hidden">
        <div class="control-group tc">
          <button
            class="btn-large green button width80"
            style="padding-left:0px;padding-right: 0px;"
            id="btnOK"
          >
            <router-link to="/hotelListAspxcheckInDate">立即查找</router-link>
          </button>
        </div>
        <div class="control-group tc">
          <router-link to="/hotelListAspxcheckInDate">附近酒店</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
   this.$root.title = '酒店查询'
  }
}
</script>

 <style  scoped>
.section {
  background: #f3f3f3;
  font-size: 14px;
}
#datepicker_wrap {
  overflow: hidden;
  height: 0;
  -webkit-transition: height 200ms ease-in-out;
  background: #e1e1e1;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#datepicker_wrap > div {
  display: none;
  padding: 5px 5px 25px 5px;
}

.filter {
  padding: 10px;
}
.filter:after {
  content: "\0020";
  clear: both;
  display: block;
  height: 0;
  font-size: 0;
  line-height: 0;
}

a.datebox {
  border: 1px solid #e1e1e1;
  text-decoration: none;
  color: #000;
  padding: 5px 26px 5px 5px;
  margin: 0px 5px 0 0;
  position: relative;
  background: #fff;
  top: 5px;
}

.ui-icon-down {
  position: absolute;
  top: 50%;
  right: 5px;
  background-image: url("http://gmu.baidu.com/demo/assets/icons-36-black.png");
  -webkit-background-size: 776px 18px;
  background-size: 776px 18px;
  width: 18px;
  height: 18px;
  margin-top: -9px;
  background-position: -216px 50%;
}
.filter a.ui-state-active,
.filter a.ui-state-hover {
  background: #fff;
}
.filter a.ui-state-active .ui-icon-down,
.filter a.ui-state-hover .ui-icon-down {
  background-position: -180px 50%;
}

.filter a.search {
  float: right;
  padding: 5px;
  margin: 0;
}
.result {
  padding: 15px;
  text-align: left;
}
</style>	
			
<template>
  <div>
  <div class="bids">
    <div class="title" style="margin-top: -1px; text-align:center;">
      <span class="title-one">招标公告</span>
      <div style="width:548px;background-color: #f0f9ff;border: 1px solid #b6daff;">
        <span class="title-time">报名截止时间</span>
        <span class="title-more">
          more
          <i class="el-icon-caret-right"></i>
        </span>
      </div>
    </div>
    <div class="bids-content-box" style="padding-bottom: 3px;background-color: #FFFFFF;">

      <div class="bids-content" @click="bidsDetail()">
        <div class="bids-content-title">【集团总部】招标公</div>
        <div class="bids-content-time">2016-11-14 23:59</div>
        <el-button size="mini" class="bids-content-button">
          <div style="font-size:10px;margin-left:-5px;">已截止</div>
        </el-button>
      </div>

      <div class="bids-content">
        <div class="bids-content-title">【集团总部】招标公</div>
        <div class="bids-content-time">2016-11-14 23:59</div>
        <el-button size="mini" class="bids-content-button">
          <div style="font-size:10px;margin-left:-5px;">已截止</div>
        </el-button>
      </div>
      <div class="bids-content">
        <div class="bids-content-title">【集团总部】招标公</div>
        <div class="bids-content-time">2016-11-14 23:59</div>
        <el-button size="mini" class="bids-content-button">
          <div style="font-size:10px;margin-left:-5px;">已截止</div>
        </el-button>
      </div>
      <div class="bids-content">
        <div class="bids-content-title">【集团总部】招标公</div>
        <div class="bids-content-time">2016-11-14 23:59</div>
        <el-button size="mini" class="bids-content-button">
          <div style="font-size:10px;margin-left:-5px;">已截止</div>
        </el-button>
      </div>

    </div>

</div>



    <!-- 第二个 -->
    <div class="bids" style="margin-top: 20px;">
    <div class="title" style="margin-top: -1px; text-align: center;">
      <span class="title-one">中标公告</span>
      <div style="width:548px;background-color: #f0f9ff;border: 1px solid #b6daff;">
        <span class="title-time" style="margin-left: -20px;">中标单位</span>
        <span class="title-more">
          more
          <i class="el-icon-caret-right"></i>
        </span>
      </div>
    </div>

    <div class="bidstwo" style="background-color: #FFFFFF;height: 25px;line-height: 25px;">
      <el-col :span="7.5" style=" width:170px ;">【集团总部】招标公</el-col>
      <el-col :span="0.5"></el-col>
      <el-col :span="16" style="padding-left: 160px;"><div style="display: inline-block;padding-top: -2px;float: left;">2016-11</div></el-col>
    </div>
    <div class="bidstwo" style="background-color: #FFFFFF;height: 25px;line-height: 25px;">
      <el-col :span="7.5" style=" width:170px ;">【集团总部】招标公告微信测试</el-col>
      <el-col :span="0.5"></el-col>
      <el-col :span="16" style="padding-left: 160px;"><div style="display: inline-block;padding-top: -2px;float: left;">2016-11</div></el-col>
    </div>
    <div class="bidstwo" style="background-color: #FFFFFF;height: 25px;line-height: 25px;">
      <el-col :span="7.5" style=" width:170px ;">【集团总部】招标公告微信测试</el-col>
      <el-col :span="0.5"></el-col>
      <el-col :span="16" style="padding-left: 160px;"><div style="display: inline-block;padding-top: -2px;float: left;">2016-11</div></el-col>
    </div>
    <div class="bidstwo" style="background-color: #FFFFFF;height: 25px;line-height: 25px;">
      <el-col :span="7.5" style=" width:170px ;">【集团总部】招标公告微信测试</el-col>
      <el-col :span="0.5"></el-col>
      <el-col :span="16" style="padding-left: 160px;"><div style="display: inline-block;padding-top: -2px;float: left;">2016-11</div></el-col>
    </div>
  </div>
  </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {};
  },
  created:{
    // this.$http.get('/api/').then(function(reonse))
  },
  methods:{
    bidsDetail(){
       this.$router.push('/bids-detail')
    }
  }
};
</script>

<style scoped="scoped">
.bids {
  /* float: left; */
  margin-top: 55px;
  width: 34.375rem;
  /* 34.375rem  550px */
  border: 1px solid #b6daff;
}
.bids .title {
  width: 100%;
  font-size: 12px;
  line-height: 25px;
}
.bids .title-one {
  float: left;
  padding-bottom: 1px;
  width: 70px;
  height: 25px;
  display: inline-block;
  background-color: #0095ff;
}
.bids .title-time {
  background-color: #f0f9ff;
  display: inline-block;
  padding-left: 150px;
}
.bids .title-more {
  padding-right: 5px;
  float: right;
  color: #74abd6;
}

.bids .title-box {
  border: 1px solid #b6daff;
}
.bids table {
  border-collapse: 'collapse';
}
.bids table td {
  height: 25px;
  line-height: 25px;
}
.bids .td-blue {
  background-color: #f0f9ff;
}
.bids .bids-content {
  height: 25px;
  line-height: 25px;
  background-color: #ffffff;
}
.bids .bids-content-title{
  width: 325px;
  display: inline-block;
  float: left;
}
.bids .bids-content-time{
  display: inline-block;float: left;
}
.bids .bids-content-button{
  margin-left: 10px;width: 52px;height: 20px; margin-top: 2px;float: left;
}
</style>

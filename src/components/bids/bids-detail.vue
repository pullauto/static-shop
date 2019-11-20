<template>
  <div class="bids-detail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }" class="el-icon-location-outline">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>招标公告</el-breadcrumb-item>
      <el-breadcrumb-item>正文内容</el-breadcrumb-item>
      <span>
        <el-breadcrumb-item></el-breadcrumb-item>
      </span>
    </el-breadcrumb>
    <div class="content-box">
      <div class="title">
        施工
      </div>
      <div class="content">
        <div>
          <!-- <el-col :span="7"> -->
          <div class="content-left">
            <div>
              <div class="content-left">
                <p style="float: right;">报名截止时间：</p>
              </div>
              <div class="content-left">
                <p style="float: right;">所属公司：</p>
              </div>
              <div class="content-left">
                <p style="float: right;">公告内容：</p>
              </div>
              <div class="content-left">
                <p style="float: right;color: #f4f5f6;">内容：1</p>
              </div>
              <div class="content-left">
                <p style="float: right; color: #f4f5f6;">内容：2</p>
              </div>
              <div class="content-left">
                <p style="float: right;">发布日期：</p>
              </div>
              <div class="content-left">
                <p style="float: right;">招标负责人：</p>
              </div>
              <div class="content-left">
                <p style="float: right;">手机：</p>
              </div>
            </div>
          </div>



          <div class="content-right" style="margin-left: 20px; width: 400px;">
            <div>
              <div class="content-right" style="width: 600px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
            </div>
          </div>
          <!-- </el-col> -->
          <!-- <el-col :span="1" style="color: #f4f5f6;">1</el-col> -->
          <!-- <div class="content-right">
            <div>2015-02-09 23:59</div>
          </div> -->

        </div>
        <div style="text-align: center;margin-top: 40px;">
          <button style="width: 110px;height: 40px; background-color: #dc4040;">报名</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .bids-detail .el-breadcrumb {
    font-size: 13px;
  }

  .bids-detail .el-icon-arrow-right {
    height: 50px;
    line-height: 50px;
  }

  el-breadcrumb-item .icon {
    display: inline-block;
    /* width:30px ; */
  }

  .bids-detail .content-box .title {
    font-size: 13px;
    color: #0077cc;
    text-align: center;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border: 1px solid #cccccc;
    border-top: 2px solid #e28181;
  }

  .content-box .content {
    width: 100%;
    height: 400px;
    padding-top: 22px;
    border: 1px solid #cccccc;
  }

  .content .content-left {
    float: left;
    width: 17.1875rem;
    font-weight: bold;
    /* border: 1px solid #005EA1; */
    font-size: 13px;
  }

  .content .content-right {
    float: left;
    width: 17.1875rem;
    font-size: 13px;
  }

  .el-form-item__label {
    padding-left: -200px;
  }
</style>

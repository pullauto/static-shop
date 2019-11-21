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
              <div class="content-right" style="width: 600px;height: 42.8px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;height: 42.8px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px; height: 42.8px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;height: 42.8px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;height: 42.8px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;height: 42.8px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;height: 42.8px;">
                <p style="float: left;">2015-02-09 23:59：</p>
              </div>
              <div class="content-right" style="width: 600px;height: 42.8px;">
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
  @import url("bids-detail.css");
</style>

<template>
<div class="bids-detail">

  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }" class="el-icon-location-outline">
      <!-- <div class="icon"><i class="el-icon-location-outline"></i></div> -->
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item>招标公告</el-breadcrumb-item>
    <el-breadcrumb-item>正文内容</el-breadcrumb-item>
    <span><el-breadcrumb-item></el-breadcrumb-item></span>
  </el-breadcrumb>

  <div class="content-box">
    <div class="title">
      施工
    </div>
    <div class="content">
      <div>
        <el-col :span="7">
          <div class="content-left">
            报名截止时间：
          </div>
        </el-col>
        <el-col :span="1" style="color: #f4f5f6;">1</el-col>
         <div class="content-right">
           2015-02-09  23:59
         </div>
      </div>
      <!-- <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
          <div class="content-right">
            2015-02-09  23:59
          </div>
        </el-form-item>
      </el-form> -->
    </div>
  </div>
</div>
</template>

<script>
</script>

<style>
.bids-detail .el-breadcrumb{
    font-size:13px ;
  }
.bids-detail .el-icon-arrow-right{
  height: 50px;
  line-height: 50px;
}
el-breadcrumb-item .icon{
  display: inline-block;
  /* width:30px ; */
}
.bids-detail .content-box .title{
  font-size: 13px;
  color: #0077cc;
  text-align: center;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border:1px solid #cccccc ;
  border-top:2px solid #e28181;
}
.content-box .content{
  width: 100%;
  padding-top: 22px;
  border: 1px solid #cccccc;
}
.content .content-left{
  float: right;
  font-weight: bold;
  /* border: 1px solid #005EA1; */
  font-size: 13px;
}
.content .content-right{
  color: #ff0000;
  position: relative;
  magin-left:25px ;
  font-size: 13px;
}
.el-form-item__label{
  padding-left: -200px;
}
</style>

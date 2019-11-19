<template>
  <div class="public-header">
    <!-- <el-col :span="5"> -->
      <div class="public-header-img">
        <img src="../../assets/images/logo.jpg">
      </div>
    <!-- </el-col> -->

    <div class="public-header-title">
      <span><i class="el-icon-s-tools"></i>返回采招首页</span>
      <span><i class="el-icon-user-solid"></i>林森工程</span>
      <span><i class="el-icon-s-tools"></i>管理后台</span>
      <span><i class="el-icon-s-tools"></i>退出</span>
    </div>
  </div>
</template>

<script>
</script>

<style>
.public-header{
  margin: 0 auto;
  height: 100px;
  width: 1340px;
  line-height: 100px;
  background-color: #0071c1;
}
.public-header-img{
  float: left;
  height: 100px;
  margin-left: 190px;
}
.public-header-img img{
  height: 100px;
}
.public-header-title{
  display: inline-block;
  float: right;
  margin-right: 170px;
}
.public-header-title span{
  height: 97px;
  margin-right: 20px;
  font-size: 14px;
  color: white;
  border: 1px solid #0071c1;
  /* float: le; */
}
.public-header-title span i{
  margin-right:8px ;
}
</style>

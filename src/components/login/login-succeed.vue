<template>
<div class="login-succeed">
  <div class="header-pooto">
    <img src="../../assets/images/header-photo.jpg">
  </div>
  <div class="user">
    欢迎您，森林工程<span class="exit">[退出]</span>
  </div>
  <div class="message-photo">
    <el-col :span="12">
      <i class="el-icon-mobile"></i>   1
    </el-col>
    <el-col :span="12">
      <i class="el-icon-message"></i>   7
    </el-col>
  </div>
  <div class="mine-manage-center">
    <el-button><div style="position: relative;margin-left: 10px;bottom: 5px;">进入我的管理中心</div></el-button>
  </div>
</div>
</template>

<script>
</script>

<style>
.login-succeed{
  width: 255px;
  height: 215px;
  font-size: 13px;
  text-align: center;
  border: 1px solid #c2d7e7;
}
.login-succeed .header-pooto{
  margin-top: 10px;
  text-align: center;
}
.login-succeed .user .exit{
  margin-left:10px;
  color: #0095FF;
}
.header-pooto img{
  width: 92px;
  height: 92px;
  border-radius: 50%;
}
.message-photo{
  margin-top: 17px;
  font-size: 13px;
}
.message-photo .el-icon-mobile{
  width: 20px;
  /* height: 25px; */
  transform: scale(1.5);
}
/* .message-photo i{
  width: 20px;
  height: 25px;
} */
.message-photo .el-icon-message{
  width: 23px;
  /* height: 15px; */
  transform: scale(1.5);
}
.el-button{
  width: 190px;
  height: 30px;
  font-size: 13px;
  background-color: #0095ff;
  color: white;
  /* margin-bottom: 0px; */
  /* padding-bottom: 5px; */
  /* line-height: -40px; */
}
.mine-manage-center{
  /* margin-top: 20px; */
  position: relative;
  /* margin-bottom: -100px; */
  top: 20px;
}
/* .login-succeed */
</style>

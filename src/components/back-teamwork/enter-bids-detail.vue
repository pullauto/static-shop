<template>
<div class="bids-detail">
  <div class="header">

  </div>
  <div class="steps">
    <div class="steps-icon">
      <el-steps :active="1">
        <el-step title="" description=""></el-step>
        <el-step title="" description=""></el-step>
        <el-step title="" description=""></el-step>
        <el-step title="" description=""></el-step>
        <el-step title="" description=""></el-step>
        <el-step title="" description=""></el-step>
        <el-step title="" description=""></el-step>
      </el-steps>
    </div>
    <div class="steps-text">
      <div style="">
        <div :class="{'divaction':active==0}">接受邀请</div>
      </div>
      <div>
        <div :class="{'divaction':active==2}">入围通知</div>
      </div>
      <div>
        <div :class="{'divaction':active==3}">标书下载</div>
      </div>
      <div>
        <div :class="{'divaction':active==4}">答疑</div>
      </div>
      <div>
        <div :class="{'divaction':active==5}">回标</div>
      </div>
      <div>
        <div :class="{'divaction':active==6}">澄清</div>
      </div>
      <div :class="{'divaction':active==7}">投标结果</div>
    </div>
  </div>
  <div class="content">

  </div>
</div>
</template>

<script>
  export default {
    name:"enter-bids-detail",
    data(){
      return{
        active:1
      }
    }
  }
</script>

<style>


/* .el-step__title.is-wait */
.el-step__title.is-process,
.el-step__title.is-finish{
  margin-left: -10px;
}
/* .el-step__title.is-process{
  width: 75px;
  height: 30px;
  background-color: #0095FF;
  color: white;
} */
.el-step__title{
  font-size: 13px;
}
.el-steps--horizontal{
  height:25px ;
}


/* 步骤条 */
.steps{
  width: 740px;
  height: 105px;
  border: 1px solid #dae7f2;
  background-color: white;
}
.steps-icon{
  width: 90%;
  height: 25px;
  margin: 0 auto;
  /* margin-right: 20px; */
}
.steps-text{
  margin: 0 auto;
  border: 1px solid;
  width: 740px;
  height: 30px;
}
.steps-text div{
  width: 75px;
  height: 30px;
  float: left;s

  line-height: 30px;
}
.steps-text .divaction{
  width: 75px;
  height: 30px;
  background-color: #508efd;
  border-radius: 5px 5px 0px 0px;
}
</style>

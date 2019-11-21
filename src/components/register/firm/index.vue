<template>
  <div class="firm-index" style="">
    <!-- 步骤条 -->
    <div class="firm-step">
      <el-steps direction="vertical" :active="0" >
        <el-step title="基本信息"></el-step>
        <el-step title="产品服务类"></el-step>
        <el-step title="证件资料"></el-step>
        <el-step title="其他信息"></el-step>
      </el-steps>
    </div>
    <!-- <el-row type="flex" class="row-bg"> -->
      <!-- <el-col :span="2"></el-col> -->
      <!-- <el-col :span="20"> -->
        <el-row style="width: 550px; margin: 0 auto; margin-top:80px;">
          <basic-message></basic-message>
          <product-serve></product-serve>
          <license-data></license-data>
          <other-data v-on:goFirm="goFirm"></other-data>
        </el-row>

      <!-- </el-col> -->
      <!-- <el-col :span="5"></el-col> -->
    <!-- </el-row> -->

        <div v-if="active==2">
          <submit-message></submit-message>
        </div>

  </div>
</template>

<script>
import basicMessage from '@/components/register/firm/basic_message.vue';
import productServe from '@/components/register/firm/product_serve.vue';
import licenseData from '@/components/register/firm/license_data.vue';
import otherData from '@/components/register/firm/other_data.vue';
export default {
  name: 'firmIndex',
  data() {
    return {
      active: 0
    };
  },
  components: {
    basicMessage: basicMessage,
    productServe: productServe,
    licenseData: licenseData,
    otherData: otherData
  },
  methods:{
    goFirm(active){
      this.active=active
      console.log(active)
    },
    // goSubmit(active){
    //   this.$emit('goSubmit',item )
    // }
  }
};
</script>

<style scoped>
.firm-index{
  /* position: relative;
  top: 100px;
  left: -500px; */
  border: 1px solid #f6f7f9;
  width: 750px;
  /* height: 100px; */
}
.firm-index .el-form-item__label{
  font-size: 13px;
}
.firm-index  .el-col{
  font-size: 13px;
}
.row-bg{
  /* margin-top: 30px; */

}
.firm-step {
  margin-top: 50%;
  position: fixed;
  top: -70%;
  left: 80%;
  /* border: 1px solid; */
}
.firm-step .el-steps--vertical{
  height: 300px;
  width: 100px;
}
.el-step.is-vertical .el-step__title{
  font-size: 13px;
}
.el-upload__text{
    line-height: 13px;
  }
</style>

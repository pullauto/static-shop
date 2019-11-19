<template>
  <div class="firm-index">
    <el-row type="flex" class="row-bg">
      <el-col :span="2"></el-col>
      <el-col :span="17">
        <el-row>
          <basic-message></basic-message>
          <product-serve></product-serve>
          <license-data></license-data>
          <other-data></other-data>
        </el-row>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
    
    <!-- 步骤条 -->
    <div class="firm-step">
      <el-steps direction="vertical" :active="0" >
        <el-step title="基本信息"></el-step>
        <el-step title="产品服务类"></el-step>
        <el-step title="证件资料"></el-step>
        <el-step title="其他信息"></el-step>
      </el-steps>
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
  }
};
</script>

<style>
.firm-step {
  position: fixed;
}
</style>

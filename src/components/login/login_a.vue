<template>
  <div id="login_a">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div class="logina-box">
        <div class="login-box-data">
          <el-col :span="12">集团供应商登录</el-col>

          <el-input size="mini" class="input" type="text" v-model="ruleForm.username" placeholder="账号" autocomplete="off"></el-input>
          <el-input size="mini" class="input" type="password" v-model="ruleForm.pass" placeholder="密码" autocomplete="off"></el-input>
          <el-col :span="10"><el-input size="mini" class="input yzm" v-model.number="ruleForm.age" placeholder="验证码"></el-input></el-col>
          <div class="all-button">
            <el-col><div class="forgetPass">忘记密码?</div></el-col>
            <el-button type="primary" style="height: 25px; width: 95px; float: left;" size="mini" @click="submitForm('ruleForm')">提交</el-button>
            <el-button type="success" style="height: 25px; width: 65px; float: right;" size="mini" @click="resetForm('ruleForm')">注册</el-button>
            <div class="button-logina">1</div>
          </div>
        </div>
        <div class="button-loginb">
          <button class="button-three">地产供应商登录</button>
          <!-- <el-button class="button-three">地产供应商登录</el-button> -->
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
        yzm: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.login_a {
  float: right;
  font-size: 12px;
  width: 190px;
  height: 100%;
}
.logina-box {
  margin-top: 55px;
  float: right;
  width: 190px;
  height: 100%;
  display: inline-block;
  border: 1px solid #c2d7e7;
}
.login-box-data {
  margin: 5px 10px;
}
.button-logina {
  /* margin-bottom: 5px; */
  color: white;
  height: 5px;
}
.forgetPass {
  margin-top: 10px;
  color: #0095ff;
  font-size: 12px;
  float: left;
}
.button-loginb {
  text-align: center;
  margin-top: 10px;
  width: 190px;
  float: right;
  /* padding:-8px -10px ; */
  border: 1px solid #c2d7e7;
}
.button-three {
  width: 170px;
  height: 22px;
  font-size: 13px;
  color: white;
  background-color: #525252;
  margin: 7px 10px;
}
.input {
  margin-top: 5px;
}
</style>

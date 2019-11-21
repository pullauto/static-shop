<template>
  <div id="login_a">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div class="logina-box">
        <div class="login-box-data"
          style="height: 160px;
                width: 170px;
                margin: 5px 10px;">
          <el-col :span="12" style="margin-bottom: 10px;">集团供应商登录</el-col>
          <el-input style="margin-bottom: 3px;" size="mini" class="input" type="text" v-model="ruleForm.username" placeholder="账号" autocomplete="off"></el-input>
          <el-input style="margin-bottom: 3px;" size="mini" class="input" type="password" v-model="ruleForm.pass" placeholder="密码" autocomplete="off"></el-input>
          <el-col :span="10" style="margin-bottom: 3px;"><el-input size="mini" class="input yzm" v-model.number="ruleForm.age" placeholder="验证码"></el-input></el-col>
          <img style="width: 48px;height: 22px;margin-left: 8px;" src="../../../build/logo.png" alt="">
          <div style="text-align: center;margin-top: 10px;">换一张</div>
          <div class="all-button">
            <el-col><div class="forgetPass">忘记密码?</div></el-col>
            <el-button type="primary" style="height: 25px; width: 95px; float: left; margin-top: 5px;" size="mini" @click="gouser()">登录</el-button>
            <el-button type="success" style="height: 25px; width: 65px; float: right;margin-top: 5px;" size="mini" @click="goregister()">注册</el-button>
            <div class="button-logina">1</div>
          </div>
        </div>
        <div class="button-loginb">
          <button class="button-three"  @click="gologin()">地产供应商登录</button>
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
    gouser(){
      if(this.ruleForm.username&&this.ruleForm.username){
        this.$router.push('/mine-await')
      }
    },
    gologin(){
      this.$router.push('/login')
    },
    goregister(){
      this.$router.push('/register')
    },
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

<style scoped>
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
.login_a .logina-box .login-box-data {
  height: 170px;
  width: 170px;
  margin: 5px 10px;
}
.button-logina {
  /* margin-bottom: 5px; */
  color: white;
  height: 5px;
}
.login_a .el-input__inner{
  border-radius: 0px;
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
.login_a .input {
  margin-top: 5px;
}
</style>

<template>
  <div class="loginb-box">
    <div class="loginb-header">
      <img src="../../assets/images/login-header.jpg" alt="">
    </div>
    <div class="loginb-main">
      <div style="float: left;">
        <img src="../../assets/images/login.jpg" style="width: 40rem; height: 17.5rem;"/>
      </div>
      <div class="loginbForm">

        <el-form :model="ruleForm" size="mini" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <div class="loginb-form">
              <el-col :span="2" class="loginb-title">
                <img src="../../assets/images/login_key.jpg">
                <span style="position: absolute;">登录</span>
              </el-col>
              <div class="loginb-input">
                <el-input size="mini" class="input" type="text" v-model="ruleForm.username" placeholder="账号" autocomplete="off"></el-input>
                <el-input size="mini" class="input" type="password" v-model="ruleForm.password" placeholder="密码" autocomplete="off"></el-input>
              </div>


              <div style="width: 280px;height: 30px;" class="input-three">
                <el-col :span="8">
                 <el-input :size="mini" v-model="ruleForm.yzm" placeholder="验证码"></el-input>
                </el-col >

                <el-col :span="12">
                    <img src="../../../build/logo.png" style="width: 65px;height: 28px;margin-top: 10px;" alt="">
                    <div style="height: 30px;line-height: 50px; display: inline-block;margin-left:20px;position: absolute;" >换一张</div>
                </el-col>
              </div>


              <el-col>
                <div style="color: #0095FF; float: left; margin-top: 20px;">忘记密码？</div>
              </el-col>

              <el-col style="margin-top: 20px;">
                <el-button
                type="primary"
                size="mini"
                style="width: 175px; height: 30px;float: left;"
                >登录</el-button>
                <el-button
                type="success"
                size="mini"
                style="width: 85px;height: 30px;float: right;"
                >注册</el-button>
              </el-col>
            </div>

        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
  	export default {
  		data() {
  			var validatePass = (rule, value, callback) => {
  				if(value === '') {
  					callback(new Error('请输入密码'));
  				} else {
  					if(this.ruleForm.checkPass !== '') {
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
  				},
  				rules: {
  					// pass: [{
  					// 	validator: validatePass,
  					// 	trigger: 'blur'
  					// }]
  				}
  			};
  		},
  		methods: {
  			submitForm(formName) {
  				this.$refs[formName].validate((valid) => {
  					if(valid) {
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
  	}
</script>

<style scoped>
.loginb-main{
  margin: 0 auto;
  margin-top: 110px;
  width: 1000px;
  height: 280px;
}
.loginb-form{
  padding: 15px 20px 20px 20px;
  border: 1px solid #c2d7e7;
  box-sizing: border-box;
  float: right;
  width: 315px;
}
.loginb-title{
  height: 20px;
  line-height: 20px;
  margin-bottom: 20px;
}
.loginb-input{
  margin-top: ;
}
.input-three .el-input__inner{
  width: 80px;
  height: 28px;
  font-size: 12px;
}
.loginb-box .el-input{
  margin-top: 10px;
}
</style>

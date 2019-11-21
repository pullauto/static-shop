<template>
	<div id="registerA">
		<!--步骤条-->
    <div style="">
      <!-- <img src="../../../build/logo.png" alt=""> -->
       <p>1</p>
    </div>
    <el-steps :active="active" finish-status="success" style="margin-left: 100px;">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

		<!--填写账户信息-->
		<el-row type="flex" class="row-bg" v-if="active==0">
			<el-col :span="5"></el-col>
			<el-col :span="14">
				<el-row>
					<el-form size="mini" v-show="active==0" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="登录账号:" prop="account">
							<el-input type="text" v-model="ruleForm.account" placeholder="5-20个字母，数字或下划线组成" autocomplete="off"></el-input>
						</el-form-item>

						<el-form-item label="密码:" prop="pass">
							<el-input type="password" v-model="ruleForm.pass" placeholder="6-20个字符组成，区分大小写" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="确认密码:" prop="checkPass">
							<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item
							label="联系人:"
							prop="contact"
							:rules="[
				      { required: true, message: '联系人不能为空'},
				      { type: 'number', message: '联系人必须为数字值'}
				    ]">
							<el-input v-model.number="ruleForm.contact"></el-input>
						</el-form-item>

						<el-form-item label="手机号码:" prop="phone">
			        <el-input v-model.number="ruleForm.phone" placeholder="手机号码，用于接收通知"></el-input>
			      </el-form-item>

			      <el-form-item label="电子邮箱:" prop="email">
			        <el-input v-model.number="ruleForm.email" placeholder="用于找回密码"></el-input>
			      </el-form-item>

			      <el-form-item label="营业执照:" prop="permit">
			        <el-input v-model.number="ruleForm.permit" ></el-input>
			      </el-form-item>

						<el-form-item>
							<el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
							<el-button @click="resetForm('ruleForm')">重置</el-button>
						</el-form-item>
					</el-form>
				</el-row>

			</el-col>
		</el-row>
    <div v-if="active==1">
      <firm-message></firm-message>
    </div>
    <div v-if="active==2">
      <submit-message></submit-message>
    </div>
	</div>
</template>

<script>
  import firmMessage from "@/components/register/firm/index"
  import submitMessage from "@/components/register/submit_message"
	export default {
    components:{
      firmMessage:firmMessage,
      submitMessage:submitMessage
    },
		data() {

			//  	填写账户信息
			// var validateContact = (rule, value, callback) => {
			// 	if(!value) {
			// 		return callback(new Error('联系人不能为空'));
			// 	}
			// 	setTimeout(() => {
			// 		if(!Number.isInteger(value)) {
			// 			callback(new Error('请输入数字值'));
			// 			alert(value)
			// 		} else {
			// 			if(value.length < 11) {
			// 				callback(new Error('少于11位'));
			// 			} else {
			// 				callback();
			// 			}
			// 		}
			// 	}, 1000);
			// };
			// var validatePass = (rule, value, callback) => {
			// 	console.log(rule)
			// 	console.log(value)

			// 	if(value.length === '') {
			// 		callback(new Error('请输入密码'));
			// 	} else {
			// 		if(this.ruleForm.checkPass !== '') {
			// 			this.$refs.ruleForm.validateField('checkPass');
			// 		}
			// 		callback();
			// 	}
			// };
			// var validatePass2 = (rule, value, callback) => {
			// 	if(value === '') {
			// 		callback(new Error('请再次输入密码'));
			// 	} else if(value !== this.ruleForm.pass) {
			// 		callback(new Error('两次输入密码不一致!'));
			// 	} else {
			// 		callback();
			// 	}
			// };
			return {
				//  	步骤条
				active: 0,

				ruleForm: {
					account:'',
					pass: '',
					checkPass: '',
					age: '',
					contact:'',
					phone:'',
					phone:'',
					email:'',
					permit:''
				},
				rules: {
					account: [{
						required: true,
						min: 5,
						max: 20,
//						validator: validatePass,
						trigger: 'blur'
					}],
					pass: [{
						required: true,
						min: 6,
						max: 20,
						// validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						required: true,
						// validator: validatePass2,
						trigger: 'blur'
					}],
					contact: [{
						// validator: validateContact,
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						min: 11,
						max: 11,
//						validator: validatePhone,
						trigger: 'blur'
					}],
					email: [{
						required: true,
//						validator: validatePhone,
						trigger: 'blur'
					}],
					permit:[{
						required: true,
//						validator: validatePhone,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
      goFirm(active){
        console.log(active)
      },
			submitForm(formName) {
        const active=this.active++
        this.active==active
        console.log(this.active)
				// this.$refs[formName].validate((valid) => {
				// 	if(valid) {
				// 		alert('submit!');
				// 	} else {
				// 		console.log('error submit!!');
				// 		return false;
				// 	}
				// });
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
.registerA{
  position: relative;
  margin-top: 300px;
}
.registerA .el-step__title{
  font-size: 13px;
}
.registerA .row-bg{
  background-color: #f6f7f9;
}
.registerA .el-form-item__label{
  font-size: 13px;
  margin-top: 10px;
}
.registerA .el-input__inner{
  width: 320px;
}
</style>

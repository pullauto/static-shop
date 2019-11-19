<template>
	<div id="registerA">

		<!--步骤条-->
		<el-row type="flex" class="row-bg">
		  <el-col :span="5"></el-col>
		  <el-col :span="15">
		  	<el-steps :active="0">
				  <el-step title="填写账户信息" icon="el-icon-edit"></el-step>
				  <el-step title="填写公司信息" icon="el-icon-upload"></el-step>
				  <el-step title="提交审核" icon="el-icon-picture"></el-step>
				</el-steps>
		  </el-col>
		</el-row>

		<!--填写账户信息-->
		<el-row type="flex" class="row-bg">
			<el-col :span="5"></el-col>
			<el-col :span="14">
				<el-row>
					<el-form v-show="active==0" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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


	</div>
</template>

<script>
	export default {
		data() {

			//  	填写账户信息
			var validateContact = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('联系人不能为空'));
				}
				setTimeout(() => {
					if(!Number.isInteger(value)) {
						callback(new Error('请输入数字值'));
						alert(value)
					} else {
						if(value.length < 11) {
							callback(new Error('少于11位'));
						} else {
							callback();
						}
					}
				}, 1000);
			};
			var validatePass = (rule, value, callback) => {
				console.log(rule)
				console.log(value)

				if(value.length === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
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
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						required: true,
						validator: validatePass2,
						trigger: 'blur'
					}],
					contact: [{
						validator: validateContact,
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

<style>

</style>

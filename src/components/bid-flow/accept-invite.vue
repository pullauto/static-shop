<template>
	<div id="registerA">

		<!--填写账户信息-->
		<el-row type="flex" class="row-bg">
			<el-col :span="5"></el-col>
			<el-col :span="14">
				<el-row>
					<el-form size="mini" v-show="active==0" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="招标邀请主题:" prop="account">
							<el-input type="text" v-model="ruleForm.account"  autocomplete="off"></el-input>
						</el-form-item>

						<el-form-item label="邀请日期:" prop="pass">
							<el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="招标负责人:" prop="checkPass">
							<el-input type="text" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
						</el-form-item>

            <el-form-item label="手机:" prop="phone">
              <el-input v-model.number="ruleForm.phone" ></el-input>
            </el-form-item>

						<el-form-item
							label="固定电话:"
							prop="contact"
							>
							<el-input v-model.number="ruleForm.contact"></el-input>
						</el-form-item>



			      <el-form-item label="电子邮箱:" prop="email">
			        <el-input v-model.number="ruleForm.email" ></el-input>
			      </el-form-item>

			      <el-form-item label="联系地址:" prop="permit">
			        <el-input style="width: 138px;" v-model="ruleForm.permit" ></el-input>
			      </el-form-item>

            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

            <el-form-item label="相关附件" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

						<el-form-item style="margin-top: 20px;">
							<span><el-button type="primary" @click="submitForm('ruleForm')">接受招标邀请</el-button></span>
							<el-button @click="resetForm('ruleForm')">拒绝招标邀请</el-button>
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
						min: 5,
						max: 20,
						trigger: 'blur'
					}],
					pass: [{
						min: 6,
						max: 20,
						trigger: 'blur'
					}],
					checkPass: [{
						trigger: 'blur'
					}],
					contact: [{
						trigger: 'blur'
					}],
					phone: [{
						min: 11,
						max: 11,
						trigger: 'blur'
					}],
					email: [{
						trigger: 'blur'
					}],
					permit:[{
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
.registerA{
  margin-top: 200px;
}
.el-step__title{
  font-size: 13px;
}
.row-bg{
  background-color: #fffef4;
}
.el-input__inner{
  width: 360px;
}
.el-form-item{
  margin-bottom: 0px;
}
.el-textarea .el-textarea__inner{
  margin-top: 10px;
}
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
    margin-bottom: 0px;
}
.el-button{
  width: 103px;
}
span .el-button{
  background-color:#0095ff ;
}



.el-form-item__label{
  font-size: 13px;
  margin-top: 10px;
}

.el-textarea .el-textarea__inner{
  width: 360px;
  height: 60px;
}

</style>

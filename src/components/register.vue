<template>
	<div id="register">
		<el-row type="flex" class="row-bg">
		  <el-col :span="8">登录账号：</el-col>
		  <el-col :span="8">
		  	<el-input class="el-input" v-model="username" placeholder="5-20个字母，数字或下划线组成"></el-input>
		  </el-col>
		</el-row>
		
		
		登录密码：
		<el-input placeholder="6-20个字fu组成，区分大小写" v-model="input" show-password></el-input>
		确认密码：
		<el-input v-model="password" show-password></el-input>
		联系人：
		<el-input v-model="contact"></el-input>
		手机号码：
		<el-input v-model="tel" placeholder="手机号码，用于接收通知"></el-input>
		电子邮箱：
		<el-input v-model="email"></el-input>（必须填写企业邮箱）
		营业执照：
		<el-input v-model="permit" placeholder="请输入内容"></el-input>
	
		<el-row>
			<el-button type="primary">下一步</el-button>
		</el-row>
	</div>
</template>

<script>
	export default {
//		data() {
//			return {
//				input: ''
//			}
//		}

		
	}
</script>

<style>
/*.el-input{
	width: 30%;
}*/
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
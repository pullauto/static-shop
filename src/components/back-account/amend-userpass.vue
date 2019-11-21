<template>
  <div class="amend-userPass">
    <div class="amend-userPass-left">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="amend-userPass-right">
      <div class="title-box">
        <div class="title">
          修改密码
        </div>
      </div>

      <div class="amend-userPass-input">

        <el-form :model="ruleForm" size="mini" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号状态:">
            <div class="account-status">使用中</div>
          </el-form-item>
          <el-form-item label="登录账号:" prop="name">
            <el-input v-model="ruleForm.name" class="form-input"></el-input>
          </el-form-item>
          <el-form-item label="旧密码:" prop="name">
            <el-input v-model="ruleForm.name" class="form-input"></el-input>
          </el-form-item>
          <el-form-item label="新密码:" prop="name">
            <el-input v-model="ruleForm.name" class="form-input"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:" prop="name">
            <el-input v-model="ruleForm.name" class="form-input"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>
              保存
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        data: [{
          label: '账号管理',
          children: [{
            label: '修改密码'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        ruleForm: {
          name: ''
        },
        rules: {
          name: [
            { required: true},
          ]
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<style scoped>
.amend-userPass-left{
  display: inline-block;
  width: 180px;
  background-color:#f4f5f6 ;
}
.amend-userPass-left el-tree{
  background-color:#f4f5f6 ;
}
.amend-userPass-right{
  width: 775px;
  height: 425px;
  float: right;
  display: inline-block;
 /* box-shadow: 1px 0px 0px 2px #99A9BF,
              -1px 0px 0px 2px #99A9BF; */

}
.amend-userPass-right .title{
  width: 760px;
  /* height: 55px; */
  padding-left: 15px;
  /* margin-left: 15px; */
  /* box-sizing: content-box; */
  line-height: 55px;
  font-size: 18px;
  background-color: #e0dfdf;
}
/* .form-input{
  width: 325px;
  height: 30px;
} */
.amend-userPass-input{
  width: 450px;
  margin-left: 60px;
  margin-top: 20px;
}
.amend-userPass-input .el-form-item{
  margin-bottom: 0px;
}
.amend-userPass-input .account-status{
  font-size: 13px;
}
.el-tree-node__content{
  background-color:#f4f5f6 ;
}
.amend-userPass-input .el-form-item__label{
  font-size: 13px;
}
.amend-userPass-input .el-input__inner{
  width: 325px;
  height: 30px;
}
.amend-userPass-input .el-form-item{
  margin-top: 10px;
}
.amend-userPass-input .el-button{
   background-color: #0084e3;
   font-size: 13px;
   width: 95px;
   height: 35px;
   padding: 0 0;
   margin-left: 120px;
   margin-top: 60px;
}
</style>

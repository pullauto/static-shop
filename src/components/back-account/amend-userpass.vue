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

      <div class="inputContent">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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

<style>
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
  box-shadow: 1px 0px 2px 2px #99A9BF;
  box-shadow: -1px 0px  2px 2px #99A9BF;

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
.inputContent{
  margin-left: 60px;
  margin-top: 20px;
}
.inputContent .el-form-item{
  margin-bottom: 0px;
}
.inputContent .account-status{
  font-size: 13px;
}
.el-tree-node__content{
  background-color:#f4f5f6 ;
}
.inputContent .el-form-item__label{
  font-size: 13px;
}
.inputContent .el-input__inner{
  width: 325px;
  height: 30px;
}
.inputContent .el-button{
   background-color: #0084e3;
   font-size: 13px;
   width: 95px;
   height: 35px;
   padding: 0 0;
   margin-left: 120px;
   margin-top: 60px;
}
</style>

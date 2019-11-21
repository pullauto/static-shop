<template>
<div class="other">
  <el-form :model="ruleForm" style="font-size: 0.625rem;"  size="mini" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">

    <el-form-item label="1.联系人:">
      <el-col :span="20">
        <el-input style="width: 100%;" v-model="ruleForm.name"></el-input>
      </el-col>

      <el-col :span="4" style=" ">
        <el-button @click="resetForm('ruleForm')" style="width: 90%;margin-left:10%;">删除</el-button>
      </el-col>
    </el-form-item>

    <el-form-item label="联系人类型:" prop="name">
      <el-col :span="10">
        <el-select style="width: 100%;" v-model="ruleForm.region" placeholder="--请选择--">
          <el-option label="区域一" checked value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
         <span style="float: right;margin-right: 7px;">
         职务：
         </span>
      </el-col>
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="手机:">
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
      <el-col :span="4">
         <span style="float: right;margin-right: 7px;">
         电话：
         </span>
      </el-col>
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="QQ:">
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
      <el-col :span="4">
         <span style="float: right;margin-right: 2px;">
           电子邮箱：
           </span>
      </el-col>
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="2.联系人:" style="margin-top: 3.125rem;">
      <el-col :span="20">
        <el-input style="width: 100%;" v-model="ruleForm.name"></el-input>
      </el-col>

      <el-col :span="4" style=" ">
        <el-button @click="resetForm('ruleForm')" style="width: 90%;margin-left:10%;">删除</el-button>
      </el-col>
    </el-form-item>

    <el-form-item label="联系人类型:" prop="name">
      <el-col :span="10">
        <el-select style="width: 100%;" v-model="ruleForm.region" placeholder="--请选择--">
          <el-option label="区域一" checked value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
         <span style="float: right;margin-right: 7px;">
           职务：
           </span>
      </el-col>
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="手机:">
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
      <el-col :span="4">
         <span style="float: right;margin-right: 7px;">
         电话：
         </span>
      </el-col>
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="QQ:">
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
      <el-col :span="4">
         <span style="float: right;margin-right: 2px;">
         电子邮箱：
         </span>
      </el-col>
      <el-col :span="10">
        <el-input style="width: 100%;" type="text" v-model="ruleForm.name"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item></el-form-item>
    <el-form-item>
      <el-button>+添加联系人</el-button>
    </el-form-item>

    <el-form-item label="授权委托书:" prop="name">
      <el-col :span="4">
       <!-- <el-upload
         class="upload-demo"
         action="https://jsonplaceholder.typicode.com/posts/"
         :on-change="handleChange"
         :file-list="fileList">
         <el-button size="small" type="primary">点击上传</el-button>
       </el-upload> -->
       <el-button style="width: 100%;">上传</el-button>
      </el-col>
    </el-form-item>
    <el-form-item label="社保证明:" prop="name">
      <el-col :span="4">
       <!-- <el-upload
         class="upload-demo"
         action="https://jsonplaceholder.typicode.com/posts/"
         :on-change="handleChange"
         :file-list="fileList">
         <el-button size="small" type="primary">点击上传</el-button>
       </el-upload> -->
       <el-button style="width: 100%;">上传</el-button>
      </el-col>
    </el-form-item>

    <el-form-item label="资金信用等级:">
      <el-col :span="20">
        <el-input style="width: 100%;" v-model="ruleForm.name"></el-input>
      </el-col>

      <el-col :span="4" style=" ">
        <el-button style="width: 90%;margin-left:10%;">上传</el-button>
      </el-col>
    </el-form-item>

    <el-form-item label="是否有厂房:" >
      <el-col :span="3">
        <el-radio v-model="radio" label="1">是</el-radio>
      </el-col>
      <el-col :span="3">
        <el-radio v-model="radio" label="2" style="margin-left: -10%;">否</el-radio>
      </el-col>
      <el-col :span="16"></el-col>
    </el-form-item>

    <el-form-item label="1.厂房信息:">
      <el-col :span="4" style=" ">
        <el-button disabled @click="resetForm('ruleForm')" style="width: 90%;">删除</el-button>
      </el-col>
    </el-form-item>

    <el-form-item label="建厂时间:" prop="name">
      <el-col :span="10">
        <el-date-picker
          style="width: 100%;"
          align="right"
          v-model="value1"
          type="date"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="4">
         <span style="float: right;margin-right: 2px;">
         建筑面积：
         </span>
      </el-col>
      <el-col :span="10">
        <el-input style="width: 100%;" v-model="ruleForm.name" placeholder="单位:平方米"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="地址:" prop="name">
      <el-col :span="20">
        <el-input style="width: 100%;" v-model="ruleForm.name"></el-input>
      </el-col>

      <el-col :span="4" style="">
        <el-button @click="resetForm('ruleForm')" style="width: 90%;margin-left:10%;">删除</el-button>
      </el-col>
    </el-form-item>

    <el-form-item style="margin: 2.0rem 0 2.0rem 0;">
      <el-button>+ 增加厂房</el-button>
    </el-form-item>

    <el-form-item label="1.近年工程业绩:" prop="name">
      <el-col :span="20">
        <el-input style="width: 100%;" v-model="ruleForm.name" placeholder="至少填写一个项目,优先填写与新华联合作项目"></el-input>
      </el-col>

      <el-col :span="4" style="">
        <el-button @click="resetForm('ruleForm')" disabled="" style="width: 90%;margin-left:10%;">删除</el-button>
      </el-col>
    </el-form-item>

    <el-form-item label="是否与新华联有过合作:" prop="name">
        <el-select style="width: 100%;" v-model="ruleForm.region" placeholder="--请选择--">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
    </el-form-item>

    <el-form-item label="项目名称:" prop="name">
        <el-input  v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="项目所在地:">
        <el-input  v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="发包人名称:" prop="name">
        <el-input  v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="发包人地址:">
        <el-input  v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="合同价格:" prop="name">
        <el-input  v-model="ruleForm.name" placeholder="单位:万元"></el-input>
    </el-form-item>

    <el-form-item label="开工时间:" prop="name">
        <el-date-picker
          style="width: 100%;"
          align="right"
          v-model="value1"
          type="date"
        >
        </el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="合同附件:" prop="name">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
    </el-form-item>

    <el-form-item label="合同附件:" prop="name">
      <el-button>+ 增加业务</el-button>
    </el-form-item>

    <el-form-item label="其他附件:">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </el-form-item>

    <el-form-item>
      <el-col :span="4">
        <el-button type="primary">保存</el-button>
      </el-col>
      <el-col :span="4">
        <el-button>上一步</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" style="margin-left: 10px;" @click="goFirm()">提交</el-button>
      </el-col>
    </el-form-item>
  </el-form>


</div>
</template>

<script>
  export default {
      data() {
        return {
          action:1,
          radio: '1',
          formInline: {
            user: '',
            region: ''
          },
          ruleForm: {
            name: '',
            // region:''
          },
          rules: {
            name: [
              { required: true, message: '请输入发证机关名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        goFirm(item) {
          const actice=this.active++
          this.active=active
            this.$emit('goFirm',item )
        }
      }
    }
</script>

<style scoped>
  .other{
    margin-top:6.25rem ;
  }
</style>

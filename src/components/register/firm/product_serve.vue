<template>
  <div id="product">
    <el-form :model="ruleForm" style="font-size: 0.625rem;"  size="mini" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
      <el-form-item label="资质名称:" prop="name">
        <el-col :span="20">
          <el-input style="width: 100%;" v-model="ruleForm.name"></el-input>
        </el-col>

        <el-col :span="3" style=" ">
          <el-button @click="resetForm('ruleForm')" style="width: 120%;margin-left:12%;">删除</el-button>
        </el-col>

        <el-col :span="1">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio style="margin-left: 30%;" label="主营业务" name="type"></el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>


      <el-form-item label="资质等级:" prop="name">
        <el-col :span="20">
          <el-input v-model="ruleForm.name"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="resetForm('ruleForm')" style="width: 90%; margin-right: -10%;">上传</el-button>
        </el-col>
      </el-form-item>

      <el-form-item label="资质证件有效截止日:" prop="name">
        <el-col :span="23">
        <el-input
          style="width: 104%;"
          placeholder="请选择日期"
          suffix-icon="el-icon-date"
          v-model="input1">
        </el-input>
        </el-col>
        <el-col :span="1">
          <!-- <el-checkbox-group v-model="ruleForm.type"> -->
            <el-checkbox style="margin-left: 120%;" v-model="ruleForm.type" label="无线期" name="type"></el-checkbox>
          <!-- </el-checkbox-group> -->
        </el-col>
      </el-form-item>

      <el-form-item label="服务区域范围:" prop="region">
          <el-select style="width: 100%;" v-model="ruleForm.region" placeholder="--请选择--">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </el-form-item>

      <!-- <el-form-item label="发证机关" prop="name">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item> -->

      <el-form-item label="发证机关:" prop="name">
          <el-col :span="10">
            <el-input v-model="ruleForm.user" placeholder="审批人"></el-input>
          </el-col>
          <el-col class="line" :span="4" prop="name">年检时间</el-col>
          <el-col :span="10">
            <el-date-picker  type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-col>
      </el-form-item>

      <el-form-item label="其他附件:">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>



    </el-form>

  </div>
</template>

<script>
  export default {
      data() {
        return {
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

      }
    }
</script>

<style>
  .product{
    margin-top: 6.25rem;
  }
</style>

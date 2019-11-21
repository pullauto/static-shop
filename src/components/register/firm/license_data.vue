<template>
  <div class="license">
    <!-- 删除 -->
    <el-form :model="ruleForm" style="font-size: 0.625rem;"  size="mini" :rules="rules" ref="ruleForm" label-width="170px" class="demo-ruleForm">

      <el-form-item label="营业执照号:" prop="name">
        <el-col :span="20">
          <el-input v-model="ruleForm.name"></el-input>
        </el-col>
        <el-col :span="4" style=" ">
          <el-button @click="resetForm('ruleForm')" style="width: 90%; margin-left: 10%;" class="button-small">上传</el-button>
        </el-col>
      </el-form-item>

      <el-form-item label="营业有效期:" prop="name">
        <el-col :span="10">
          <el-date-picker
            style="width: 100%;"
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
        <el-col :span="4">
           <span style="float: right;margin-right: 7px;">
           至：
           </span>
        </el-col>
        <el-col :span="10">
          <el-date-picker
            style="width: 100%;"
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="税务登记号:">
        <el-col :span="20">
          <el-input style="width: 100%;" v-model="ruleForm.name"></el-input>
        </el-col>

        <el-col :span="4" style=" ">
          <el-button @click="resetForm('ruleForm')" style="width: 90%;margin-left:10%;">上传</el-button>
        </el-col>
      </el-form-item>

      <el-form-item label="组织机构代码证号:">
        <el-col :span="20">
          <el-input style="width: 100%;" v-model="ruleForm.name"></el-input>
        </el-col>

        <el-col :span="4" style=" ">
          <el-button @click="resetForm('ruleForm')" style="width: 90%;margin-left:10%;">上传</el-button>
        </el-col>
      </el-form-item>

      <el-form-item label="安全生产许可证:">
        <el-col :span="20">
          <el-input style="width: 100%;" v-model="ruleForm.name"></el-input>
        </el-col>

        <el-col :span="4" style=" ">
          <el-button @click="resetForm('ruleForm')" style="width: 90%;margin-left:10%;">上传</el-button>
        </el-col>
      </el-form-item>

      <el-form-item label="安全许可证有效截止日:" prop="name">
        <el-date-picker
          style="width: 100%;"
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
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

<style scoped>
  .license{
    margin-top: 6.25rem;
  }
  .button-small{
    width: 90%;
    margin-left: 10%;
    text-align: center;
  }
</style>

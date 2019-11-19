<template>
  <div id="firm_message">
    <!-- <el-row type="flex" class="row-bg">
			<el-col :span="2"></el-col>
			<el-col :span="17">
				<el-row> -->
        <!-- 删除 -->
    <el-form v-show="active == 0" :model="ruleForm" size="mini" status-icon :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
      <!-- options -->
      <el-form-item label="企业简称:" size="mini" prop="shortFirmName"><el-input type="text" v-model="ruleForm.shortFirmName" autocomplete="off"></el-input></el-form-item>

      <el-form-item label="企业性质" size="small" prop="shortFirmName">
        <el-col :span="9">
          <el-select v-model="ruleForm.shortFirmName" placeholder="--请选择--">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-col>

        <el-col class="line" :span="6">业务区域</el-col>
        <el-col :span="9">
          <el-select v-model="ruleForm.shortFirmName" placeholder="--请选择--">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-form-item>

      <!--</el-form>-->

      <el-form-item label="法人:" size="small" prop="contact" :rules="[{ required: true, message: '法人不能为空' }, { type: 'char', message: '法人必须为数字值' }]">
        <el-input v-model="ruleForm.contact"></el-input>
      </el-form-item>

      <el-form-item label="法人身份证:" size="small" prop="shortFirmName"><el-input type="text" v-model="ruleForm.shortFirmName" autocomplete="off"></el-input></el-form-item>

      <el-form-item label="公司成立时间:" size="small" prop="firmSetTime">
        <el-col :span="10"><el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.firmSetTime" style="width: 100%;"></el-date-picker></el-col>

        <el-col class="line" :span="5">公司电话:</el-col>
        <el-col :span="9"><el-input v-model.number="ruleForm.phone"></el-input></el-col>
      </el-form-item>

      <el-form-item label="办公场所产权:" size="small" prop="firmSetTime">
        <el-col :span="10"><el-input type="text" v-model="ruleForm.shortFirmName" autocomplete="off"></el-input></el-col>

        <el-col class="line" :span="5">办公面积:</el-col>
        <el-col :span="9"><el-input v-model.number="ruleForm.phone" placeholder="单位:平方米"></el-input></el-col>
      </el-form-item>

      <el-form-item label="上年营业额:" size="small" prop="firmSetTime">
        <el-col :span="10"><el-input v-model.number="ruleForm.phone" placeholder="单位:万元"></el-input></el-col>

        <el-col class="line" :span="5">员工总数:</el-col>
        <el-col :span="9"><el-input v-model.number="ruleForm.phone"></el-input></el-col>
      </el-form-item>

      <el-form-item label="注册资本:" size="small" prop="firmSetTime">
        <el-col :span="10"><el-input v-model.number="ruleForm.phone" placeholder="单位:万元"></el-input></el-col>

        <el-col class="line" :span="5">币种:</el-col>
        <el-col :span="9">
          <el-select v-model="ruleForm.shortFirmName" placeholder="--请选择--">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-form-item>

      <el-form-item label="注册地址:" size="small" prop="shortFirmName"><el-input type="text" v-model="ruleForm.shortFirmName" autocomplete="off"></el-input></el-form-item>
      <el-form-item label="办公地址:" size="small" prop="shortFirmName"><el-input type="text" v-model="ruleForm.shortFirmName" autocomplete="off"></el-input></el-form-item>

      <el-form-item label="预合作单位:" size="small" prop="shortFirmName">
        <el-input placeholder="请输入内容" v-model="input2"><el-button slot="append" icon="el-icon-search"></el-button></el-input>
      </el-form-item>

      <div
        class="while"
        style="
        margin:-1rem 0  1rem 6.25rem;
        font-size: 0.9375rem; width: 35%; background-color: #FFFFFF;"
      >
        (本次意向合作单位)
      </div>

      <el-form-item label="可合作单位:" size="small" prop="canJoinUnit">
        <el-input placeholder="(除本次意向合作单位之外的其他单位,可多选)" v-model="input2"><el-button slot="append" icon="el-icon-search"></el-button></el-input>
      </el-form-item>
    </el-form>
    <!-- </el-row>
		</el-col>

		<el-col :span="5"></el-col>
		</el-row> -->
  </div>
</template>

<script>
export default {
  data() {
    //  	填写账户信息
    var validateContact = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('法人不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入名字'));
          alert(value);
        }
      }, 1000);
    };
    return {
      //  	步骤条
      active: 0,
      options: [],
      ruleForm: {
        shortFirmName: ''
      },
      rules: {
        shortFirmName: [
          {
            required: true,
            min: 5,
            max: 20,
            //						validator: validatePass,
            trigger: 'blur'
          }
        ],
        canJoinUnit: [
          {
            trigger: 'blur'
          }
        ]
        //      firmSetTime:[{
        // 	required: true,
        // 	//						validator: validatePass,
        // 	trigger: 'blur'
        // }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style></style>

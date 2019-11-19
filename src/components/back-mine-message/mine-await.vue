<template>
  <div class="amend-userPass">
    <div class="amend-userPass-left">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="amend-userPass-right">
      <div class="title-box">
        <div class="title">
          我的待办
        </div>
      </div>

      <div class="inputContent">
        <div class="inputContent-tab">
          <span>全部</span>
          <span>待接受邀请</span>
          <span>待回标</span>
          <span>待澄清</span>
          <span>待更新部品</span>
          <span>待提交问卷</span>
        </div>

        <div class="tab-content">

          <el-table
              ref="singleTable"
              :data="tableData"
              highlight-current-row
              @current-change="handleCurrentChange"
              style="width: 100%">
              <el-table-column
                type="index"
                label="序号"
                width="50">
              </el-table-column>
              <el-table-column
                property="date"
                label="待办类型"
                width="120">
              </el-table-column>
              <el-table-column
                property="address"
                label="待办主题"
                width="120">
              </el-table-column>
              <el-table-column
                property="date"
                label="发布日期">
              </el-table-column>
              <el-table-column
                property="address"
                label="截止时间">
              </el-table-column>
            </el-table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'second',
        data: [{
          label: '我的消息中心',
          children: [{
            label: '我的待办'
          },{
            label: '我的通知'
          }]
        },
        {
          label: '我的合作情况',
          children: [{
            label: '我的待办'
          },{
            label: '我的通知'
          }]
        },
        {
          label: '公司资料',
          children: [{
            label:'公司信息'
          },
          {
            label: '资质认定信息'
          },{
            label: '审核日志'
          }]
        }
        ],
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
        },


        tableData: [{
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }, {
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1516 弄'
                }],
                currentRow: null
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  };
</script>

<style>
.amend-userPass-left{
  font-size: 13px;
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
  box-shadow: 4px 0px 3px 2px #99A9BF,
              -4px 0  3px 2px #99A9BF
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
.el-tabs__item {

}
.tab-content{

}
.tab-content .cell{
   font-size: 13px;
}
.el-table td,.el-table th{
  padding: 0;
}
</style>

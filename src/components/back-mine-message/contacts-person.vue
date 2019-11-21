<template>
  <div class="contacts-person">
    <div class="contacts">
      <span style="margin-left: 10px;">选择联系人</span>
      <i class="el-icon-circle-close"></i>
    </div>


    <div class="content-box">

      <div class="title">
        <b>联系人列表</b>(请选择此次招标的对接联系人)
      </div>

      <div class="content"
      style="width: 700px;height: 400px;border: 1px solid #dddddd;">



        <el-table
            stripe
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
              type="index"
              label="序号"
              width="55">
            </el-table-column>
            <el-table-column
              property="date"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              property="name"
              label="现任职位"
              width="350">
            </el-table-column>
            <el-table-column
              property="address"
              label="手机"
              width="116">
            </el-table-column>
          </el-table>
      </div>

      <div class="page">
        <div style="display: inline-block;">
          第1/1页(2000)
        </div>
        <!-- <div>

        </div> -->
        <div style="float: right;">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>

      </div>

    </div>



    <div class="button">
      <el-button type="primary">确定</el-button>
      <el-button type="info">取消</el-button>
    </div>

  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03 21:07',
          name: '王小虎',
          address: '12345678910'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style scoped="scoped">
.contacts-person{
  width: 723px;
  height: 567px;
  border: 1px solid #0095ff;
}
.contacts{
  color: white;
  /* padding-left: 10px; */
  width: 723px;
  height: 40px;
  line-height: 40px;
  background-color: #0089e9;
}
.contacts i{
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
  float: right;
}
.content-box{
  width: 700px;
  height: 462px;
  margin:0 auto;
}
.contacts-person .title{
  margin-top: 10px;
  border: 1px solid #b6daff;
  background-color: #f0f9ff;
}
.contacts-person .title b{
  margin-left: 10px;
}
.contacts-person .page{
  float: left;
  height:35px ;
  width:700px ;
  height: 35px;
  background-color: #eaedf0;
  /* border: 1px solid #eaedf0; */
  line-height: 32px;
}
.contacts-person .number{
  background-color: #eaedf0;
}
.el-pagination{
  /* float: left; */
  display: inline-block;
  /* background-color: #eaedf0; */
}
.contacts-person .el-button{
  /* margin-top: 6px; */
  width: 70px;
  height: 30px;
  text-align: center;
  font-size: 13px;
  border-radius: 0px;
  padding-left: 555px;
}
.contacts-person .el-button span{
  display: inline-block;
  position: relative;
  /* right: 10px;
  bottom: 5px;
  margin-right: 100px; */
  text-align: center;
}
.contacts-person .button{
  /* padding-left: 555px; */
  margin-top: 10px;
  width: 100%;
  height: 42px;
  line-height: 42px;
  border-top: 1px solid #dddddd;
  border: 1px solid #dddddd;
}



.el-table--scrollable-x .el-table__body-wrapper{
  overflow-x:visible ;
}
.el-table__body-wrapper{
  overflow:visible;
}
.contacts-person .el-table{
  border: 1px solid #dddddd;
  border-top: 0px;
}
.el-table th > .cell {
  font-size: 13px;
  font-weight: normal;
  background-color: #f0f9ff;
}
.el-tree-node__label {
  font-size: 13px;
}
.contacts-person .el-table .cell {
  height: 32px;
  line-height: 32px;
  font-size: 13px;
}
.contacts-person .tab-content .cell {
  font-size: 13px;
}
.el-table td,
.el-table th {
  padding: 0;
}
/* .el-pagination{
  width:100px ;
  float: left;
} */
.el-pagination .btn-next{
  background-color: #eaedf0;
}
.el-dialog, .el-pager li{
  background-color: #eaedf0;
}
.el-pagination .btn-prev{
  background-color: #eaedf0;
}
</style>

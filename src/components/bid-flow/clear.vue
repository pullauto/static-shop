<template>
  <div class="clear">

    <div class="mine-message-button">
      <div style="height: 35px;line-height: 35px; float: left;">
        <span @click="toggleSelection([tableData[1], tableData[2]])">澄清列表</span>
      </div>
    </div>

    <div class="mine-message-content">
      <el-table
          stripe
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;border: 1px solid #cccccc;"
          @selection-change="handleSelectionChange">
          <el-table-column type="index" label="序号" width="55"></el-table-column>
          <el-table-column
            prop="address"
            label="问题描述"
            width="150">
          </el-table-column>

          <el-table-column
            prop="date"
            label="附件"
            width="220">
          </el-table-column>
          <el-table-column
            prop="date"
            label="状态"
            width="80">
          </el-table-column>

          <el-table-column
            prop="date"
            label="质询日期"
            width="120">
          </el-table-column>

          <el-table-column
            prop="date"
            label="澄清日期"
            width="115">
          </el-table-column>
        </el-table>

      </div>

      <div class="page">
          <div style="display: inline-block;float: left;">
            第1/1页(2000)
          </div>
          <!-- <div>

          </div> -->
          <div style="">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </div>
      </div>





  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
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

<style scoped>
.clear{
  text-align: center;
  width: 740px;
}
.clear .mine-message-button .button{
  margin-left: 15px;
  height: 35px;
  line-height: 35px;
  color:#0077cc;
  float: right;
}
/* .mine-message-content{
  width: 740px;
} */
.clear .el-table_9_column_39  .cell{
  color: #0077cc;
  font-weight: bold;
}

.clear .el-table_10_column_42  .cell{
  text-align: center;
}
.clear .el-table_11_column_47  .cell{
  color: #0077cc;
}
.clear .el-table--scrollable-x .el-table__body-wrapper{
  overflow-x:visible ;
}
.clear .el-table__body-wrapper{
  overflow:visible;
}



.clear .el-table th > .cell {
  font-size: 13px;
  font-weight: normal;
  background-color: #eeeeee;
}
.clear .el-tree-node__label {
  font-size: 13px;
}
.clear .el-table .cell {
  height: 32px;
  line-height: 32px;
  font-size: 13px;
}
.clear .tab-content .cell {
  font-size: 13px;
}
.clear .el-table td,
.clear .el-table th {
  padding: 0;
}

.clear .page{
  float: left;
  height:35px ;
  width:700px ;
  height: 35px;
  background-color: #eaedf0;
  /* border: 1px solid #eaedf0; */
  line-height: 32px;
}
.clear .el-pagination{
  float: left;
}
.clear .el-pagination .btn-next{
  background-color: #eaedf0;
}
.clear .el-dialog, .el-pager li{
  background-color: #eaedf0;
}
.clear .el-pagination .btn-prev{
  background-color: #eaedf0;
}
/* 0077cc */
</style>

<template>
  <div class="mine-message">

    <div class="mine-message-delete">
      <div style="height: 35px;line-height: 35px; color:#0077cc;float: right;">
        <span @click="toggleSelection([tableData[1], tableData[2]])">删除</span>
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
        <el-table-column
          type="selection"
          width="42">
        </el-table-column>
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column
          prop="address"
          label="通知主题"
          width="510">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布日期"
          width="135">
        </el-table-column>

      </el-table>

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

<style>
.mine-message{
  text-align: center;
  width: 740px;
}
/* .mine-message-content{
  width: 740px;
} */
.el-table_9_column_39  .cell{
  color: #0077cc;
  font-weight: bold;
}

.el-table_10_column_42  .cell{
  text-align: center;
}
.el-table_11_column_47  .cell{
  color: #0077cc;
}
.el-table--scrollable-x .el-table__body-wrapper{
  overflow-x:visible ;
}
.el-table__body-wrapper{
  overflow:visible;
}



.el-table th > .cell {
  font-size: 13px;
  font-weight: normal;
  background-color: #eeeeee;
}
.el-tree-node__label {
  font-size: 13px;
}
.el-table .cell {
  height: 32px;
  line-height: 32px;
  font-size: 13px;
}
.tab-content .cell {
  font-size: 13px;
}
.el-table td,
.el-table th {
  padding: 0;
}

/* 0077cc */
</style>

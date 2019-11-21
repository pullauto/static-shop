<template>
<div class="mine-bid">
  <div class="search">


      <el-form ref="form" :model="form" label-width="55px" style=";margin-right: 5px; float: left; display: inline-block;">
        <div style="float: left; display: inline-block;margin: 0 10px;margin-top: -10px;">查找按</div>
          <el-select v-model="form.region" placeholder="采购计划名称">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </el-form>

      <div style="margin-top: -10px; float: left; display: inline-block; margin-right: 7px;">关键字</div>
      <div class="two">
        <el-input
        style="float: left; display: inline-block;"
          v-model="value1"
          placeholder="选择日期">
        </el-input>
      </div>


      <div class="mine-message-delete">
        <div style="height: 30px; color:#0077cc;float: right; position: relative;top: -10px; margin-left:10px margin-top: -20px;;">
          <el-button size="mini">查找</el-button>
        </div>
      </div>

  </div>


  <div class="table-apply">

    <div class="mine-message">

      <!-- <div class="mine-message-delete">
        <div style="height: 35px;line-height: 35px; color:#0077cc;float: right;">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">查找</el-button>
        </div>
      </div> -->

      <div class="onLine-apply">
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
            label="采购计划"
            width="250">
          </el-table-column>
          <el-table-column
            prop="date"
            label="所属公司"
            width="160">
          </el-table-column>
          <el-table-column
            prop="date"
            label="所属项目"
            width="160">
          </el-table-column>

          <b @click="bidsFlow()">
          <el-table-column
            prop="date"
            label="当前状态"
            width="120">
          </el-table-column>
          </b>
          <!-- <el-table-column
            prop="date"
            label="发布日期"
            width="113">
          </el-table-column> -->

        </el-table>
          <button v-on:click="bidFlow">点击</button>
        </div>


    </div>
  </div>


</div>
</template>

<script>
export default {
    data() {
      return {
        value1:"value1",
        form: {
                  name: '',
                  region: '',
                  date1: '',
                  date2: '',
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: ''
                },
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
      },
      bidFlow(){
        this.$route.push('/bid-flow')
      }
    }
  }
</script>

<style>

.mine-bid{
  margin-top: 20px;
  width: 740px;
}
.mine-bid .search{
  height: 50px;
  line-height: 50px;
  /* border: 1px solid; */
}
.mine-bid .el-input__inner{
  height: 30px;
  width: 170px;
}
.mine-bid .search .el-input__inner{
  height: 30px;
  width: 170px;
}
.mine-bid .search .two .el-input__inner{
  width: 373px;
}
.mine-bid .search .el-input {
  width: 175px;
  height: 30px;
  /* margin-bottom: 20px; */
  position: relative;
  bottom: 10px;
}
.mine-bid .search .el-input__icon{
  line-height: 1;
}
.el-input{
  font-size: 13px;
}
.el-form-item__label{
  font-size: 13px;
}
.mine-bid .el-button{
  width: 75px;
  height: 28px;
  background-color: #e7e7e7;
}

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
.mine-bid .el-table .cell {
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

</style>

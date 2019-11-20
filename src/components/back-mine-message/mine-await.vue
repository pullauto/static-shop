<template>
  <div class="amend-userPass">
    <div class="amend-userPass-left">

      <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项5</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <!-- <el-menu-item-group title="分组2"> -->
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <!-- <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu> -->
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>


      <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
    </div>
    <div class="amend-userPass-right">
      <div class="title-box">
        <div class="title">
          我的待办
        </div>
      </div>

      <!-- <div v-if="treeNodeId==3" style="margin-left: 20px; margin: 0 auto;">
        <mine-message></mine-message>
      </div> -->



      <!-- 中标流程头部公共样式 -->
      <div v-if="true">

      <div class="header">
        <div class="left-title-box">
          <img style="float: left;" src="../../assets/images/back-teamwork/title-icon.jpg">
          <div class="left-text">已入围</div>
        </div>
        <div class="right-title-box">
          <div class="right-text">
            翡翠绿洲-一期-施工
          </div>
          <div style="display: inline-block; float: left;height: 36px;">
            <img src="../../assets/images/back-teamwork/title-icon2.jpg">
          </div>
        </div>
      </div>



      <div style="width:739px ; margin: 0 auto;">

        <!-- 我的通知 -->
        <mine-message v-if="flase"></mine-message>
        <!-- 在线报名 -->
        <online-apply v-show="flase"></online-apply>
        <!-- 我的投标 -->
        <mine-bids v-if="flase"></mine-bids>
        <!-- 中标后流程 -->
        <enterbids-detail></enterbids-detail>
      </div>

      <!-- 我的待办 -->
      <div class="inputContent">

        <div class="inputContent-tab">
          <div>全部</div>
          <div>待接受邀请</div>
          <div>待回标</div>
          <div>待澄清</div>
          <div>待更新部品</div>
          <div style="border-right: 1px solid #d2d2d2;">待提交问卷</div>
        </div>

        <div class="tab-content" style="">
          <div style="border: 1px solid #cccccc;width:720px;height: 100%;">

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
                width="55"
                >
              </el-table-column>
              <el-table-column
                property="name"
                label="待办类型"
                width="100">
              </el-table-column>
              <el-table-column
                property="address"
                label="待办主题"
                width="325">
              </el-table-column>
              <el-table-column
                property="date"
                label="发布日期"
                width="100">
              </el-table-column>
              <el-table-column
                width="140"
                property="date"
                label="截止时间">
              </el-table-column>
          </el-table>
          </div>
        </div>

      </div>

      </div>

    </div>
  </div>
</template>

<script>
import mineMessage from "@/components/back-mine-message/mine-message.vue"
import onlineApply from "@/components/back-teamwork/onLine-apply.vue"
import mineBids from "@/components/back-teamwork/mine-bid"
import enterbidsDetail from "@/components/back-teamwork/enter-bids-detail"
export default {
    components:{
      mineMessage:mineMessage,
      onlineApply:onlineApply,
      mineBids:mineBids,
      enterbidsDetail:enterbidsDetail
    },
    data() {
      return {
        bidflow:false,
        treeNodeId:2,
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
                  date: '2016-05-0',
                  name: '招标邀请',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '招标邀请',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, {
                  date: '2016-05-01',
                  name: '招标邀请',
                  address: '上海市普陀区金沙江路 1519 弄'
                }, {
                  date: '2016-05-03',
                  name: '招标邀请',
                  address: '上海市普陀区金沙江路 1516 弄'
                }],
                currentRow: null
      };
    },
    methods: {
      handleNodeClick(data) {
        if(data.$treeNodeId==1&&data.$treeNodeId==2){
          // data.$treeNodeId==2
          this.treeNodeId=2
        }
        console.log()
        console.log(data.$treeNodeId)
        console.log(data);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style>
/* 中标流程公共头部 样式*/
.header{
  margin-top: 1px;
  font-size: 14px;
  width: 288px;
  height: 47px;
}
.header .left-title-box{
  width: 93px;
  height: 25px;
  position: relative;
  z-index: 999;
  left: 9px;
}
.header .left-text{
  text-align: center;
  width: 86px;
  height: 25px;
  float: right;
  color: white;
  border-bottom: 2px solid #c63216;
  border-radius: 0px 0px 5px 5px;
  background-color: #ee5641;
}
.header .right-title-box{
  position: relative;
  z-index: -99999;
  top: -19px;
}
.header .right-text{
  width: 125px;
  height: 36px;
  float: left;
  line-height: 36px;
  padding-left: 120px;
  background-color: #f0e2b0;
}


/* 树形控件样式 */
.is-current .el-tree-node__label{
  color: #0077cc;

}


/* 我的通知样式 */
.amend-userPass{
  margin: 0 auto;
}
.amend-userPass-left{
  float: left;
  font-size: 13px;
  display: inline-block;
  width: 179px;
  background-color:#f4f5f6 ;
}
.amend-userPass-left .el-tree{
  background-color:#f4f5f6 ;
}
.amend-userPass-right{
  width: 780px;
  height: 425px;
  float: right;
  display: inline-block;
  box-shadow:
    -1px 0px 0px 0px #99A9BF,   /*左边阴影  绿色*/
    1px 0px 0px 0px #99A9BF;   /*右边阴影  蓝色*/
}
.amend-userPass-right .title{
  width: 760px;
  padding-left: 15px;
  padding-right: 5px;
  line-height: 55px;
  font-size: 18px;
  background-color: #e0dfdf;
}

.inputContent{
  margin-top: 30px;
  margin-left: 1px;
}
.inputContent .inputContent-tab{
  width:637px ;
  height:37px ;
  overflow: hidden;
  margin-left: 21px;
  border-radius: 5px;
  border: 1px solid #d2d2d2;
  border-left: 1px;
  /* box-sizing: border-box; */
  /* border-bottom: 2px solid #c5c5c5; */
}
.inputContent-tab div{
  text-align: center;
  float: left;
  width: 105px;
  height: 35px;
  line-height: 35px;
  border-bottom:3px solid #d2d2d2;
  border-left: 1px solid #d2d2d2 ;
  background-color: #f7f7f7;
}
.el-table th>.cell{
  font-size: 13px;
  height: 32px;
  line-height: 32px;
  font-weight: normal;
  color: #3c3c3c;
  background-color: #eeeeee;
}
.el-tree-node__label{
  font-size: 13px;
}

.tab-content{
  margin: 0 auto;
  border-radius: 1%;
  /* text-align:center; */
  /* margin-left: 9px; */
  margin-top: 25px;
  width: 720px;
  height: 400px;
  border: 1px solid #cccccc;
  padding: 9px;
}
.el-table .cell{
  height: 32px;
  line-height: 32px;
  color: #000000;
  font-size: 13px;
}
.el-table_3_column_13  .cell{
  color: #0077cc;
}
.el-table td,.el-table th{
  padding: 0;
}
.el-table_1_column_3{
  widows: 320px;
}
</style>

<template>
  <div id="app">
    <div class="header"></div>

    <public-header v-show="true"></public-header>

    <div :class="{'back-content':true,'content':flase}" v-show="true">
      <div class="router-box" v-show="flase">
        <router-link to="/home" class="tab-item">采购首页</router-link>
        <router-link to="" class="tab-item">招标公告</router-link>
        <router-link to="" class="tab-item">中标公告</router-link>
        <router-link to="" class="tab-item">供方招募</router-link>
        <div class="tab-add">1</div>
      </div>
      <!-- <div class="space">kong</div> -->
      <router-view />
    </div>

    <loginb v-show="flase"></loginb>

    <!-- <div :class="{'back-content':true,'content':flase}"> -->

    <!-- </div> -->

  </div>
</template>

<script>
import Home from '@/components/Home';
import bids from '@/components/Bids';
import loginb from '@/components/login/loginb';
import publicHeader from '@/components/public/public-header';
export default {
  name: 'App',
  data(){
    return{
      see:flase
    }
  },
  components: {
    home: Home,
    bids: bids,
    loginb:loginb,
    publicHeader:publicHeader
  },
  created: function() {}
};
</script>

<style>
#app {
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  font-size: 12px;
}

body {
  margin: 0;
  background-color:#f4f5f6;
  /* background-color: #fafafa; */
}
a:hover {
  background-color: #2c3e50;
}
.router-box{
  text-align: center;
}
.content {
  margin: 0 auto;
  width: 750px;
}
.tab-item {
  /* padding-right: 12.5rem; */
  color: #ffffff;
  float: left;
  width: 80px;
  height: 2.5rem;
  line-height: 40px;
  background-color: #005ea1;
  font-size: 12px;
}
.tab-add {
  padding-right: 423.2px;
  height: 2.5rem;
  float: left;
  background-color: #005ea1;
  color: #005ea1;
}
.space{
  color: white;
  height: 15px;
}
.button-small {
  width: 90%;
  margin-left: 10%;
  text-align: center;
}
.back-content{
  margin: 0 auto;
  width: 960px;
  /* border: 1px solid #005EA1; */
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 24px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>

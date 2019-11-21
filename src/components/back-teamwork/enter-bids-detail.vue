<template>
<div class="bids-detail">
  <button @click="activeAdd()">+</button>
  <div class="steps">
    <div class="steps-icon" style="margin-top: 26px;">
      <el-steps :active="active">
        <el-step title="接受邀请" description=""></el-step>
        <el-step title="入围通知" description=""></el-step>
        <el-step title="标书下载" description=""></el-step>
        <el-step title="答疑" description=""></el-step>
        <el-step title="回标" description=""></el-step>
        <el-step title="澄清" description=""></el-step>
        <el-step title="投标结果" description=""></el-step>
      </el-steps>
    </div>
  </div>
  <!-- el-step__title is-process -->
  <div class="content">

    <div class="box">
      <div v-if="active==0">
        <div class="son son1"></div>
        <accept-invite></accept-invite>
      </div>

      <div v-if="active==1">
        <div class="son son2"></div>
        <div class="enter">恭喜您，您已入围【施工】，请关注！</div>
      </div>

      <div v-if="active==2">
        <div class="son son3"></div>
        <div class="san">
          <p>本次已发标，请认真准备应标。</p>
          <p>如有需要，可以在此<span class="san-button" style="width: 54px;height: 17px;">下载</span>并查阅标书</p>
          <p>如有需要，可以在线<span class="san-button" style=" width: 100px;height: 17px;">
            提出您的疑问</span>，我们将统一进行答疑。</p>
        </div>
      </div>
      <!-- 答疑 -->
      <div v-if="active==3">
        <div class="son son4"></div>
        <div class="san">
          <p>您已接受我司的投标邀请，请认真准备回标文件。</p>
          <p>如有需要，可以在线，我们将统一进行答疑。提交疑问的截止时间是
              <span style="color: #ff0000;">2015-02-10 11:25。</span>
          </p>
          <p>可以在线 <span style="color: #0095FF;"> 回标。</span></p>
        </div>
      </div>

      <div v-if="active==4">
        <div class="son son5"></div>
        <div class="san">
          <p>可以在线 <span style="color: #0095FF;"> 回标。</span></p>
        </div>
      </div>

      <!-- 澄清 -->
      <div v-if="active==5">
        <div class="son son6"></div>
        <div class="san">
          <p>我方可能对您的回标提出在线质询，届时烦请尽快回复。</p>
        </div>
      </div>
      <!-- 投标结果 -->
      <div v-if="active==6">
        <div class="son son7"></div>
        <div class="san">
          <bids-notice></bids-notice>
        </div>
      </div>

    </div>
    <!-- 答疑组件 -->
    <div v-if="active==3">
      <mine-quiz></mine-quiz>
    </div>
    <!-- 澄清组件 -->
    <div v-if="active==5">
      <clear></clear>
    </div>
    <!-- 投标结果 -->
    <!-- <div v-if="active==6"> -->
      <!-- <bids-notice></bids-notice> -->
    <!-- </div> -->

  </div>
</div>
</template>

<script>
  import mineQuiz from "@/components/bid-flow/mine-quiz.vue"
  import acceptInvite from "@/components/bid-flow/accept-invite.vue"
  import clear from "@/components/bid-flow/clear.vue"
  import bidsNotice from "@/components/bid-flow/bids-notice.vue"
  export default {
    name:"enter-bids-detail",
    data(){
      return{
        active:0
      }
    },
    computed:{

    },
    methods:{
      activeAdd(){
        const one=this.active+1
        this.active=one
        console.log(this.active)
      }
    },
    components:{
      mineQuiz:mineQuiz,
      acceptInvite:acceptInvite,
      clear:clear,
      bidsNotice:bidsNotice
    }
  }
</script>

<style>

.bids-detail .el-step__title.is-wait,
.el-step__title.is-process,
.el-step__title.is-finish{
  width: 75px;
  height: 30px;
  text-align: center;
  margin-left: -25px;
}

.bids-detail .el-step__title.is-process{
  width: 75px;
  height: 30px;
  color: white;
  background-color:#508efd ;
  border-radius: 4px 4px 0px 0px;
  /* text-align: center; */
  /* margin-left:-25px ; */
}
.el-step__title{
  font-size: 13px;
}
.el-steps--horizontal{
  height:25px ;
}


/* 步骤条 */
.steps{
  margin-top: 15px;
  width: 740px;
  height: 80px;
  /* position: relative; */
  border: 1px solid #dae7f2;
  background-color: white;
}
.steps-icon{
  width: 90%;
  height: 25px;
  margin: 0 auto;
  /* margin-right: 20px; */
}
.steps-text{
  margin: 0 auto;
  border: 1px solid;
  width: 740px;
  height: 30px;
}
p{
  margin: 0;
  padding: 0;
}
.steps-text div{
  width: 105p
  margin-tx;
  height: 30px;
  float: left;
  /* margin-left: 10px; */
  /* text-align: center; */
  line-height: 30px;
}
.steps-text div p{
  width: 75px;
  height: 29px;
  text-align: center;
  line-height: 30px;
}
.steps-text .divaction{
  width: 75px;
  height: 30px;
  background-color: #508efd;
  border-radius: 5px 5px 0px 0px;
}

/* 各个中标流程内容样式 */
/* .content{ */
  /* width: 100%; */
  /* background-color: #fffef4; */
/* } */
.content .enter{
  text-indent: 1em;
  height: 49px;
  line-height: 49px;
}

.box {
  margin-top:12px ;
  width: 739px;
  border: 1px solid pink;
  /* height: 50px; */
  border: 1px solid #d8caa9;
  position: relative;
  background-color: #fffef4;
}

.son {
  /* margin-left: 32px; */
  margin-bottom: -10px;
  margin-top: 3px;
  width: 17px;
  height: 17px;
  border-top: 1px solid #d8caa9;
  border-right: 1px solid #d8caa9;
  background-color: #fffef4;
  transform: rotate(-45deg);
  position: absolute;
  top: -12px;
}
.son1{
  margin-left: 40px;
}
.son2{
  margin-left: 145px;
}
.son3{
  margin-left: 246px;
}
.san{
  padding: 10px 0;
  text-indent: 1em;
}
.san p{
  height: 25px;
  line-height: 25px;
}
.san-button{
  position: relative;
  /* top: 5px; */
  border-radius: 3px;
  line-height: 17px;
  display: inline-block;
  background-color:#edf6ff;
  border: 1px solid #0077cc;
  color:#0077cc ;
}
.son4{
  margin-left: 350px;
}
.son5{
  margin-left: 453px;
}
.son6{
  margin-left: 556px;
}
.son7{
  margin-left: 657px;
}

</style>

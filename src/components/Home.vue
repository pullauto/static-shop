<template>
	<div class="home">
				<div class="home-image">
				    <el-image
				      style="width: 100%; height: 200px;margin-top: 5px;"
				      :src="url"
				      :fit="fit">
              </el-image>
				</div>
        <!-- <div style="width: 100%;border: 1px solid ;"> -->
          <logina></logina>
          <bids></bids>
        <!-- </div> -->


	</div>
</template>

<script>
  import axios from "axios"
  import bids from '@/components/Bids.vue'
  import login_a from '@/components/login/login_a.vue'
	export default {
		name: 'Home',
		data() {
			return {
				fits: ['cover'],
        		url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
			}
		},
    created:function(){
      axios.get('').then(function(res){
        console.log(res)
      })
    },
    components:{
      bids:bids,
      logina:login_a
      }
	}
</script>


<style scoped>
  .home{
    width: 100%;
  }
  .home-image{
    margin-top: 15px;
  	width: 750px;
  	height: 195px;
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
 .home .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    /*background: #d3dce6;*/
  }
  .home .bg-purple-light {
    background: #e5e9f2;
  }
  .home .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .home .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>

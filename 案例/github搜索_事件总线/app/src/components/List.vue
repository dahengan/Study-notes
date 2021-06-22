<template>
	<div class="row">
    <h2 v-show="info.isFirst">欢迎使用</h2>
    <h2 v-show="info.isLoding">Loding.......</h2>
    <h2 v-show="info.errMsg">{{info.errMsg}}</h2>
      <div v-show="info.users.length" v-for="userObj in info.users" class="card">
        <a :href="userObj.html_url" target="_blank">
          <img :src="userObj.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{userObj.login}}</p>
      </div>
  </div>
</template>

<script>
	export default {
		name:'List',
    data() {
      return {
        info:{
          users:[],
          isFirst:true,
          isLoding:false,
          errMsg:''
        }
      }
    },
    methods: { 
      // 收到一堆obj
      updateLis(obj){
        this.info = obj
      }
    },
    mounted() {
      //                          把回调留在自身
      this.$bus.$on('updateLis',this.updateLis)
    },
    beforeDestroy() {
      this.$bus.$off('updateLis')
    },
	}
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
	.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

<template>
 	<section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyWord" type="text" placeholder="enter the name you search"/>&nbsp;
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name:'Search',
  data(){
    return{
      keyWord:''
    }
  },
  methods:{
    search(){
      // 获取用户输入
      const {keyWord} = this
      // 请求前， 通过$bus传递数据给List
      this.$bus.$emit('updateLis',{users:[],isFirst:false,isLoding:true,errMsg:''})
      // 发送请求
       axios.get('https://api.github.com/search/users',{params:{q:keyWord}}).then(
         response =>{
           console.log('成功了',response.data.items)
           const {items} = response.data

            // 请求成功了，通过$bus传递数据给List
           this.$bus.$emit('updateLis',{users:items,isLoding:false,errMsg:''})
         },
         error => {
           console.log('失败了',error.message)
          // 请求失败了，通过$bus传递数据给List
           this.$bus.$emit('updateLis',{users:[],isLoding:false,errMsg:error.message})
       }
       )
    }
  },
}

</script>

<style>
	
</style>

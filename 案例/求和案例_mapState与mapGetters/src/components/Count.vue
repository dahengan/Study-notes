<template>
  <div>
      <h2>当前求和为{{sum}}</h2>
      <h2>当前求和放大100倍后：{{bigSum}}</h2>
      <h2>学校名{{school}}</h2>
      <h2>学校地址{{adress}}</h2>
      <select v-model.number="number">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
      </select>
      <button @click="jia">+</button>
      <button @click="jian">-</button>
      <button @click="jishu">为奇数+</button>
      <button @click="haomiao">等500毫秒+</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            car:"BMO",
            number:1
        }
    },
    computed:{
        // sum(){
        //     return this.$store.state.sum
        // },
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // adress(){
        //      return this.$store.state.adress
        // }

        // 借助mapState 批量获取vuex中的数据（精简写法）
        ...mapState(['sum','school','adress']),
        ...mapGetters(['bigSum'])
    },
    methods:{
        jia(){
            this.$store.dispatch('jia',this.number)
        },
        jian(){
            this.$store.dispatch('jian',this.number)
        },
        jishu(){
           this.$store.dispatch('jishu',this.number)
        },
        haomiao(){
            this.$store.dispatch('haomiao',this.number)
        }
    },
}
</script>

<style>

</style>
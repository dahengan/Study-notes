<template>
  <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>React Router Demo</h2>
            <button @click="houtui">后退</button>
            <button @click="qianjin">前进</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        houtui(){
            this.$router.back()
        },
        qianjin(){
             this.$router.forward()
        }
    },
}
</script>

<style>

</style>
<template>
<ul>
    <li>ID:{{id}}</li>
    <li>TITLE:{{title}}</li>
    <li>CONTENT:{{content}}</li>
</ul>
</template>

<script>
export default {
    name:'Detial',
    computed:{
        id(){
            return this.$route.params.id
        },
        title(){
            return this.$route.params.id
        },
        content(){
            return this.$route.params.id
        },
    }
}
</script>

<style>

</style>
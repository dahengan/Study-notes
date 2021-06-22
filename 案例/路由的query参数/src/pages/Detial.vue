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
            return this.$route.query.id
        },
        title(){
            return this.$route.query.id
        },
        content(){
            return this.$route.query.id
        },
    }
}
</script>

<style>

</style>
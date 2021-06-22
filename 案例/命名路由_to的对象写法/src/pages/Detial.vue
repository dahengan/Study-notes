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
            return this.$route.query.title
        },
        content(){
            return this.$route.query.content
        },
    }
}
</script>

<style>

</style>
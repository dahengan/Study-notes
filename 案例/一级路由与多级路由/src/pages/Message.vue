<template>
 <div>
      <ul>
        <li :key="m.id" v-for="m in messageArr">
            <router-link to="/home/message/detail">{{m.title}}</router-link>&nbsp;&nbsp;
        </li>
    </ul>
    <hr/>
    <router-view></router-view>
 </div>
</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            messageArr:[
                {id:'001',title:'消息1',content:'qqq'},
                {id:'002',title:'消息2',content:'www'},
                {id:'003',title:'消息3',content:'eee'},
            ]
        }
    },
}
</script>

<style>

</style>
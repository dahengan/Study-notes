<template>
 <div>
      <ul>
        <li :key="m.id" v-for="m in messageArr">
            <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}$content=${m.content}`"> -->
            <router-link :to="{
                name:'xiangqing', // 跳转到哪个路径（路径代替者）
                params:{id:m.id}, // 携带params参数
                query:{           // 携带query参数
                    title:m.title,
                    content:m.content,
                }
            }">
            {{m.title}}       
            </router-link>&nbsp;&nbsp;
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
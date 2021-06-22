// 该文件专门用于创建并暴露一个vuex中的核心管理者--store

// 引入vue核心库
import Vue from 'vue'

// 引入vuex
import vuex from 'vuex'

//应用vuex插件
Vue.use(vuex)

//准备actions
const actions ={
    jia(ministore,value){
        ministore.commit('JIA',value)
    },
    jian(ministore,value){
        ministore.commit('JIAN',value)
    },
    jishu(ministore,value){
        if(ministore.state.sum % 2){
            ministore.commit('JISHU',value)
        }
    },
    haomiao(ministore,value){
        setTimeout(()=>{
            ministore.commit('HAOMIAO',value)
        },500)
    }
}

//准备mutations.
const mutations ={
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    JISHU(state,value){
        state.sum += value
    },
    HAOMIAO(state,value){
        state.sum += value
    }
}

//准备state
const state ={
    sum:0,
    school:'guigu',
    adress:'hongfuqu'
}

//准备getters，用于对state中保存的数据进行计算，从而得到一个新的属性
const getters = {
    bigSum(state){
        return state.sum*100
    }
}


// 创建一个store
const store = new vuex.Store({
    actions,
    mutations,
    state,
    getters
})

//暴露store
export default store 
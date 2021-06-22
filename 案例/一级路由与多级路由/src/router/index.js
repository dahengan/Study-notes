// 该文件用于创建一个Vue中的路由器（router）

// 引入vue-router
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detial from '../pages/Detial'

// 创建一个路由器（router）用于管理整个vue项目中所有的路由（route）
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home*',// *可以实现模糊匹配
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'detail',
                            component:Detial,
                        }
                    ]
                }
            ]
        },
        {
            path:'/about',
            component:About
        },
        {
            // redirect实现最后的匹配
            path:'/*',
            redirect:'/about'
        }
    ]
})

export default router
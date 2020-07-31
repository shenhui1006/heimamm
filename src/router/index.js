// 导入Vue
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 使用vue-router
Vue.use(VueRouter)

// 注册路由
const router = new VueRouter({
    routes:[
        // {
        //     path:'/login',
        //     component:login
        // }
    ]
})

// 将router暴露出去
export default router
import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/login/index.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path:'/',
    name:"head",
    component:()=>import("../views/Layout/index.vue"),
    children:[
      {
        path:'/product',
        name:"product",
        component:()=>import("../views/user/index.vue")
        
      },
      {
        path:'/merchant',
        name:"merchant",
        component:()=>import("../views/merchant/index.vue")
        
      }
    ]
    
},
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

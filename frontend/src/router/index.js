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
    component:()=>import("../components/HelloWorld.vue")
    
},
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

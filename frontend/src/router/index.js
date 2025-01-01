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
    redirect:'/product',
    component:()=>import("../views/Layout/index.vue"),
    children:[
      {
        path:'/product',
        name:"product",
        component:()=>import("../views/user/Shopping.vue")
        
      },
      {
        path:'/my-order',
        name:"myOrder",
        component:()=>import("../views/user/OrderForm.vue")
      },
      {
        path:'/merchant',
        name:"merchant",
        redirect:'/merchant/warehouse',
        component:()=>import("../views/merchant/index.vue"),
        children:[
         {
          path:'/merchant/warehouse',
          name:"warehouse",
          component:()=>import("../views/merchant/Warehouse.vue"),
         },
         {
          path:'/merchant/order-merchant',
          name:"order-merchant",
          component:()=>import("../views/merchant/OrderForm.vue"),
         }

        ]

      }
      
    ]
    
},
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

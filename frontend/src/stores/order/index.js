import {defineStore} from 'pinia'
import { reactive } from 'vue'
export const useOrderStore=defineStore('order',()=>{
    let orders=reactive([
        {user_id: 101,amount: 299.99,status: '准备发货中', merchant_id: 201,product_name: "无线蓝牙耳机"},
        {user_id: 102,amount: 499.50,status: '已发货', merchant_id: 202,product_name: "智能手表"},
    ])
    const setOrders = (neworders) => {
        orders.splice(0, orders.length, ...neworders); // 一步清空并替换
      };
    
    return {orders,setOrders}
})
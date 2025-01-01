import {defineStore} from 'pinia'
import { reactive } from 'vue'
export const useProductStore=defineStore('product',()=>{
    let products=reactive([
        { id:1,name: '优质手机', price: 3999, merchant_id: 101 },
        {  id:2,name: '轻薄笔记本', price: 6999, merchant_id: 102 },
        { id:3,name: '无线耳机', price: 999, merchant_id: 103 },
    ])
    const setProducts = (newProducts) => {
        products.splice(0, products.length, ...newProducts); // 一步清空并替换
      };
    
    return {products,setProducts}
})
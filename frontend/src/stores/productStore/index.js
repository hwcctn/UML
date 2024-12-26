import {defineStore} from 'pinia'
import { reactive } from 'vue'
export const useProductStore=defineStore('product',()=>{
    let products=reactive([
        { description: '优质手机', price: 3999, merchant_id: 101 },
        { description: '轻薄笔记本', price: 6999, merchant_id: 102 },
        { description: '无线耳机', price: 999, merchant_id: 103 },
    ])
    const setProducts = (newProducts) => {
        products.splice(0, products.length, ...newProducts); // 一步清空并替换
      };
    
    return {products,setProducts}
})
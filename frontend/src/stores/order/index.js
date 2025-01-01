import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useOrderStore = defineStore('order', () => {
    let orders = reactive([
        {
            id: 20,
            userId: 7,
            amount: "7666",
            status: "准备发货中",
            merchantId: 23,
            productId: 16,
            productName: "电脑"
        }
    ])
    const setOrders = (neworders) => {
        orders.splice(0, orders.length, ...neworders); // 一步清空并替换
    };

    return { orders, setOrders }
})
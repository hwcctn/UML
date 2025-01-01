<template>
   <Order :is-uer="false"></Order>
</template>

<script setup>
import { useOrderStore } from '@/stores/order';
import Order from '@/components/order/Order.vue';
import api from '@/api';
import { onMounted } from 'vue';
const OrderStore=useOrderStore();
const {setOrders}=OrderStore;

const getOders= async()=>{
    try{
        let MerchantId=38
        const response =await api.getMerchantOrders(MerchantId);
        console.log(response.data);
        
        const orders = response.data
        setOrders(orders);
    }
    catch(err){
        console.log("获取数据失败",err);
        
    }
    


}
onMounted(()=>{
    getOders();
})

</script>

<style scoped>

</style>
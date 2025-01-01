<template>
    <Order :is-uer="true"></Order>
</template>

<script setup>
import { useOrderStore } from '@/stores/order';
import Order from '@/components/order/Order.vue';
import { onMounted } from 'vue';
import api from '@/api';
const OrderStore=useOrderStore();
const {setOrders}=OrderStore;
const getOders= async()=>{
    try{
        let UserId=44
        const response =await api.getUserOrders(UserId);
        // console.log(response.data.orders);
        
        const orders = response.data.orders
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
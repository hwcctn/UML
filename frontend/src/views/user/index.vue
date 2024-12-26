<template>
  <div>
    <ProductList></ProductList>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import ProductList from '@/components/product/ProductList.vue';
const productStore=useProductStore();
const {setProducts}=productStore;
const newProducts = [
    { description: '高端显示器', price: 4999, merchant_id: 201 },
    { description: '游戏键盘', price: 1299, merchant_id: 202 },
    { description: '机械鼠标', price: 699, merchant_id: 203 },
  ];
  setProducts(newProducts)
</script>

<style  scoped>

</style>

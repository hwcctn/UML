<template>
    <div>
      <h1>商品列表</h1>
      <div class="product-list">
        <!-- 渲染每个商品，并为每个商品添加对应的购买按钮 -->
        <div v-for="(product, index) in products" :key="index" class="product-item">
          <ProductCard
            :description="product.description"
            :price="product.price"
            :merchant_id="product.merchant_id"
          />
          <!-- 购买按钮，绑定到当前商品 -->
          <button @click="buyProduct(product)">购买</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import ProductCard from './ProductCard.vue';
  import { useProductStore } from '@/stores/productStore';
  const productStore = useProductStore();
  let { products } = productStore;
  
  // 处理购买按钮点击事件
  const buyProduct = (product) => {
    console.log(`购买商品：${product.description}`);
    // 在这里可以执行更多操作，例如添加到购物车或跳转到购买页面等
  }
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  button {
    margin-top: 16px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
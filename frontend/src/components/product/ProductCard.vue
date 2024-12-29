<template>
  <div class="product-card">
    <p><strong>商品描述：</strong>{{ description }}</p>
    <p><strong>商品价格：</strong>{{ price }}￥</p>
    <p><strong>商家ID：</strong>{{ merchant_id }}</p>
  </div>
</template>

<script setup>
defineProps({
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    merchant_id:{
        type:Number,
        required:true
    }
})
</script>

<style  scoped>
.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 290px;
  }
  .product-card p {
    margin: 4px 0;
  }
</style>

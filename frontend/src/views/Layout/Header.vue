<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" :router="true"
    @select="handleSelect">
    <el-menu-item index="/product">
      <el-icon>
        <ShoppingCartFull />
      </el-icon>
      购物商城
    </el-menu-item>
    <el-menu-item index="/merchant">我的商品</el-menu-item>
    <el-menu-item index="2">我的订单</el-menu-item>
    <el-menu-item index="3">帮助中心</el-menu-item>


  </el-menu>
  
   
    <div class="demo-basic--circle">
      <div class="block">
        <el-avatar :size="50" src="https://th.bing.com/th/id/OIP.7KH4CcveY3sV0Bv_zPyJVgAAAA?rs=1&pid=ImgDetMain" />
      </div>
    </div>
    <i class="logout" @click="logout">退出</i>
  
</template>

<script setup>

import { ref } from 'vue'

const activeIndex = ref('/product')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;
}

.el-menu-demo {
  width: 90%;
  background-color: #f0f0f0;
  padding: 0px 20px;

}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 0px solid #fd924a;
  color: #fd924a !important;

}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: #fff;
  color: var(--el-menu-hover-text-color);
  outline: none;
}
.demo-basic--circle{
  margin-left: 80px;
}
</style>
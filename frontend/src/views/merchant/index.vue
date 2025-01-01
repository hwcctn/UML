<template>
  
  <div class="menu">
    <RouterLink to="/merchant/warehouse">
      <el-tag type="primary">我的仓库</el-tag>
      
    </RouterLink>
    <RouterLink to="/merchant/order-merchant">
      <el-tag type="success">订单信息</el-tag>
    </RouterLink>
    
  </div>
  <router-view></router-view>
  

</template>

<script setup>


</script>

<style  scoped>
.menu{
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-tag{
  height: 30px;
  font-size: 15px;
  margin-left: 20px;
  padding: 20px;
}

</style>

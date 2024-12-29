<template>
  
      <el-container>
       
        <el-container class="right">
          <el-header class="Header">
        <Header/>
        </el-header>
          <el-main class="Main">
          <Content/>
          </el-main>
        </el-container>
      </el-container>
    
  </template>


<script setup>
import Header from './Header.vue';

import Content from './Content.vue';
</script>

<style  scoped>

.el-container {
  

}
.Header{
  
  
  height: 80px;
  width: 100%;  
  display: flex; 
  align-items: center; 
  justify-content: left; 
}


.Main{
background-color:#f4f4f5; 
width: 100%;
padding: 0;
height:calc(100vh - 100px);
}
</style>

<template>
  <div style="width: 100%;">
    <div v-if="isHomeRoute" >
      <h1>欢迎来到选课系统 ~~</h1>
     <h2>{{ sid }} {{ sname }} 用户</h2>
     
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
let sid= localStorage.getItem('id');
let sname=localStorage.getItem('studentname');
const isHomeRoute = computed(() => route.path === '/home')

</script>

<style  scoped>


</style>

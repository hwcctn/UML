<template>
  <div class="main">
    <div class="Input">
      <el-row>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" 
          style="display: flex;
          justify-content: center;
           align-items: center;
            height: 100px;">
            <img src="https://th.bing.com/th/id/OIP.aDiHDK6inSlxnY7SlMvoLQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"  width="100px" height="100px">
           <h3 style="margin-left: 20px;">我的仓库</h3>
          </div>
        </el-col>
        <el-col :span="2" ></el-col>
        <el-col :span="11" style="margin: auto  0">
          <div class="grid-content ep-bg-purple-light">
              <el-input-tag v-model="input" clearable placeholder="Please input">
                <template #prefix>
                  <el-icon>
                    <ElementPlus />
                  </el-icon>
                </template>
                <template #suffix>
                  <el-icon>
                    <Search />
                  </el-icon>
                </template>
              </el-input-tag>
          </div>
        </el-col>
        <el-col :span="2" ></el-col>
        <el-col :span="3" 
          style="display: flex;
          justify-content: center;
           align-items: center;" >
          <el-button  type="primary">添加商品</el-button>
        </el-col>
      </el-row>
    </div>
    <ProductList :isBuy=false></ProductList>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import ProductList from '@/components/product/ProductList.vue';
const productStore = useProductStore();
const { setProducts } = productStore;
const newProducts = [

  { description: '机械鼠标', price: 699, merchant_id: 203 },
  { description: '机械鼠标', price: 699, merchant_id: 203 },
  { description: '机械鼠标', price: 699, merchant_id: 203 },
  { description: '机械鼠标', price: 699, merchant_id: 203 },
  { description: '机械鼠标', price: 699, merchant_id: 203 },
];
setProducts(newProducts)
</script>

<style scoped>
.main {
  width: 1296px;

  margin: 0 auto;
  padding: 12px 0 16px;
  width: 1040px;

}
.el-input-tag {
  height: 50px;
}
</style>

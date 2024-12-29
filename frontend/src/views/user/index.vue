<template>
  <div class="main">
    <div class="Input">
      <el-row>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple">
            <img src="https://img.tukuppt.com/png_preview/00/10/00/3LIU47Ijyk.jpg!/fw/780" width="100%" height="100%">
            </div>
        </el-col>
        <el-col :span="2" ></el-col>
        <el-col :span="16" style="margin-top: 50px">
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
      </el-row>
    </div>
    <ProductList :isBuy=true></ProductList>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import ProductList from '@/components/product/ProductList.vue';
const productStore = useProductStore();
const { setProducts } = productStore;
const newProducts = [
  { description: '高端显示器', price: 4999, merchant_id: 201 },
  { description: '游戏键盘', price: 1299, merchant_id: 202 },
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

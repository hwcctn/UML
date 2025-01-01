<template>
  <div>
    <h1>商品列表</h1>
    <div class="product-list">
      <!-- 渲染每个商品，并为每个商品添加对应的购买按钮 -->
      <div v-for="(product, index) in products" :key="index" class="product-item">
        <ProductCard :name="product.name" :price="product.price" :merchant_id="product.merchant_id" />
        <!-- 购买按钮，绑定到当前商品 -->
        <div class="button-container">
          <el-button v-if="isBuy" type="primary" @click="buyProduct(product)">购买</el-button>
          <el-button v-if="isDetele" type="danger" @click="deleteProduct(product)">删除</el-button>
          <el-button v-if="isUpdate" type="success" @click="updateVisible(product)">更新</el-button>
        </div>
      </div>
    </div>
  </div>
  <el-dialog title="修改商品" v-model="updateProductVisible" width="500px">
    <!-- 使用 formRef 引用表单 -->
    <el-form :model="newProduct" ref="formRef" label-width="100px">
      <el-form-item label="商品名" prop="name" :rules="[{ required: true, message: '请输入商品名', trigger: 'blur' }]">
        <el-input v-model="newProduct.name" placeholder="请输入商品名"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price" :rules="[{ required: true, message: '请输入价格', trigger: 'blur' }]">
        <el-input v-model="newProduct.price" placeholder="请输入价格"></el-input>
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelVisible">取 消</el-button>
      <el-button type="primary" @click="updateProduct">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue';
import { useProductStore } from '@/stores/productStore';
import api from '@/api';
const props = defineProps({
  isBuy: {
    type: Boolean,
    default: false,
    required: false,
  },
  isDetele: {
    type: Boolean,
    default: false,
    required: false,
  },
  isUpdate: {
    type: Boolean,
    default: false,
    required: false,
  },
})
const productStore = useProductStore();
let { products } = productStore;
const { setProducts } = productStore;
const updateProductVisible = ref(false)
const newProduct = ref({
  id: 0,
  name: '',
  price: ''
})
const formRef = ref(null)
// 处理购买按钮点击事件
const buyProduct = async (product) => {
  try {
    console.log("购买商品：", product);
    let user_id = 44
    const queryParams = {
      userId: user_id,
      amount: product.price,
      merchantId: product.merchant_id, 
    }
    console.log(queryParams);
    
    const response = await api.createOrder(queryParams);
    console.log('购买成功',response.data);
    
  }
  catch (err){
    console.log('购买失败',err);
  }


  // 在这里可以执行更多操作，例如添加到购物车或跳转到购买页面等
}
const deleteProduct = async (product) => {
  try {
    console.log(`删除商品：${product.id}`);
    let productId = 11
    const response = await api.deleteProduct(productId)
    // console.log("删除成功",response.data);
    alert("删除成功", response.data);
  }
  catch {
    console.log("删除失败");
  }
}


const cancelVisible = () => {
  updateProductVisible.value = false
  formRef.value.resetFields() // 重置表单校验和数据
  newProduct.value = {
    name: '',
    price: ''
  }
}
const updateVisible = (product) => {
  // console.log(product);

  updateProductVisible.value = true
  newProduct.value = product
}
const updateProduct = async () => {

  try {
    let productId = newProduct.value.id
    // console.log(productId);

    const response = await api.updateProduct(productId, { merchant_id: 203, ...newProduct.value })
    // console.log("修改成功", response.data);
    updateProductVisible.value = false;
    // setProducts([...products, response.data]);

  }
  catch (err) {
    alert("请联系管理员", err);

  }
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

/* button {
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
} */
.button-container {
  display: flex;
  gap: 10px;
}
</style>
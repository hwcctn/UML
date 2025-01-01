<template>
  <div class="main">
    <div class="Input">
      <el-row>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" style="display: flex;
            justify-content: center;
             align-items: center;
              height: 100px;">
            <img src="https://th.bing.com/th/id/OIP.aDiHDK6inSlxnY7SlMvoLQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
              width="100px" height="100px">
            <h3 style="margin-left: 20px;">我的仓库</h3>
          </div>
        </el-col>
        <el-col :span="2"></el-col>
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
        <el-col :span="2"></el-col>
        <el-col :span="3" style="display: flex;
            justify-content: center;
             align-items: center;">
          <el-button type="primary" @click="addProductVisible = true">添加商品</el-button>
        </el-col>
      </el-row>
    </div>
    <ProductList 
    :isBuy=false
    :isDetele=true
    :isUpdate=true
    ></ProductList>
  </div>
  <el-dialog title="添加商品" v-model="addProductVisible" width="500px">
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
      <el-button type="primary" @click="addProduct" >确 定</el-button>
    </span>
  </el-dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useProductStore } from '@/stores/productStore';
import ProductList from '@/components/product/ProductList.vue';
import api from '@/api';
const productStore = useProductStore();
const { setProducts } = productStore;
const addProductVisible = ref(false)


// 用于存储新数据
const newProduct = ref({

  name: '',
  price: ''
})
const formRef = ref(null)
let Products = [];
const addProduct=async ()=>{
  try{
    const response=await api.createProduct({merchant_id: 38 ,...newProduct.value})
    console.log('添加成功',response.data);
    addProductVisible.value = false; // 关闭对话框
    setProducts([...Products, response.data]);
  }
  catch{
    alert("添加失败,请联系管理员")
  }
}
const cancelVisible=()=>{
  addProductVisible.value = false
    formRef.value.resetFields() // 重置表单校验和数据
    newProduct.value = { 
        name: '',
        price: ''
    }
}
const getProducts = async () => {
  try {
    let merchantId=38
    const response = await api.getProductByMerchantId(merchantId);
    console.log("商品列表:", response.data);
    Products=response.data
    setProducts(Products);
  } catch (error) {
    console.error("获取商品列表失败:", error);
  }
};
onMounted(()=>{
    getProducts();
    
})
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
<template>
    <div class="table">
        <div style="padding:40px 50px ">
            <el-table ref="tableRef" row-key="date" :data="orders" style="width: 100%">
                <el-table-column prop="userId" label="用户ID" sortable />
                <el-table-column prop="productName" label="商品名称" />
                <el-table-column prop="amount" label="金额" />
                <el-table-column prop="merchantId" label="商家ID" />
                <el-table-column fixed="right" prop="status" label="State" width="120px" :filters="[
                    { text: '待发货', value: '准备发货中' },
                    { text: '代接收', value: '已发货' },
                    { text: '已完成', value: '已收货' },
                ]" :filter-method="filterTag" filter-placement="bottom-end">
                    <template #default="scope">
                        <div v-if="isUer" @mouseenter="scope.row._showButton = true"
                            @mouseleave="scope.row._showButton = false">
                            <el-button v-if="scope.row.status === '已发货' && scope.row._showButton" type="primary"
                                size="small" @click="receiveGoods(scope.row)" >
                                确认收货
                            </el-button>
                            <el-tag v-else
                                :type="scope.row.status === '准备发货中' ? 'success' : scope.row.status === '已发货' ? 'primary' : 'danger'"
                                disable-transitions>
                                {{ scope.row.status === '准备发货中' ? '待发货' : scope.row.status === '已发货' ? '代接收' : '已完成' }}
                            </el-tag>
                        </div>
                        <div  v-else @mouseenter="scope.row._showButton = true" @mouseleave="scope.row._showButton = false">
                            <el-button v-if="scope.row.status === '准备发货中' && scope.row._showButton" type="success"
                                size="small" @click="deliverGoods(scope.row)">
                                确认发货
                            </el-button>
                            <el-tag v-else
                                :type="scope.row.status === '准备发货中' ? 'success' : scope.row.status === '已发货' ? 'primary' : 'danger'"
                                disable-transitions>
                                {{ scope.row.status === '准备发货中' ? '待发货' : scope.row.status === '已发货' ? '代接收' : '已完成' }}
                            </el-tag>
                        </div>
                        
                        
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>
import { useOrderStore } from '@/stores/order';
import api from '@/api';
const props = defineProps({
    isUer: {
        type: Boolean,
        default: false,
        required: false
    }
})

const orderStore = useOrderStore();
let { orders } = orderStore
const filterTag = (value, row) => row.status === value;
const deliverGoods=async (row)=>{
    try{
        row.status = '已发货'
        console.log(row);
        
        const response=api.shipOrder(row.id)
        alert("发货成功")
    }
    catch(err){
        alert("发货失败，请联系管理员")
        console.log(err);
        
        
    }
}
const receiveGoods=async (row)=>{
    try{
        row.status = '已收货'
        console.log(row);
        const response=api.confirmOrderReceived(row.id)
        alert("收货成功")
    }
    catch(err){
        alert("收货失败，请联系管理员")
        console.log(err);
        
        
    }
    
    
   

}

</script>

<style scoped>
.table {
    width: 1200px;
    margin: 40px auto 0px;
    background-color: #fff;
}

.el-table {
    width: 100%;
    padding: 0;

}
.el-tag,.el-button{
    width: 80px;
}
</style>
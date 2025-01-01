// index.js
//网络请求方法放在这个文件
import path from "./path"
import axios from "axios"
const api={
    // 登录
    postLogin(params){
        return axios.post(path.baseUrl+path.Login,params)
    },
    /* 商品模块 */
        // 获取所有商品列表
        getAllProducts(){
            return axios.get(path.baseUrl+path.Products)
        },
        // 获取单个商品
        getProductById(){
            return axios.get(path.baseUrl+path.Products)
        },
        // 商家获取商品
        getProductByMerchantId(merchantId){
            return axios.get(path.baseUrl+path.Products+'/merchant'+`/${merchantId}`)
        },
        // 创建商品
        createProduct(data){
            return axios.post(path.baseUrl+path.Products,data)
        },
        // 更新商品
        updateProduct(productId,data){
            return axios.put(path.baseUrl+path.Products+`/${productId}`,data)
        },
        // 删除商品
        deleteProduct(productId){
            return axios.delete(path.baseUrl+path.Products+`/${productId}`)
        },
    /* 订单模块 */
        // 新增订单
        createOrder(queryParams){
            return axios.post(path.baseUrl1+path.CreateOrder,{},{params:queryParams})
        },  
        // 用户查看订单
        getUserOrders(UserId){
            return axios.get(path.baseUrl1+path.GetUserOrders+`/${UserId}`)
        },
        // 商家查看订单
        getMerchantOrders(MerchantId){
            return axios.get(path.baseUrl1+path.GetMerchantOrders+`/${MerchantId}`)
        },
        // 商家发货
        shipOrder(orderId){
            return axios.put(path.baseUrl1+path.ShipOrder+`/${orderId}`,{},{params:{status:"已发货"}})
        },
        // 用户收货
        confirmOrderReceived(orderId){
            return axios.put(path.baseUrl1+path.ConfirmOrder+`/${orderId}`,{},{params:{status:"已收货"}})
        },

    }

export default api
   

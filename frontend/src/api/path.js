// path.js
//网络请求路径放在这个文件
const base = {
    baseUrl:"/api",
    Login:"/login",
    // 商品模块
    Products: "/products", 
    baseUrl1:"/api1",
    // 订单模块
    CreateOrder: "/orders/add", // 创建订单
    GetUserOrders: "/orders/user", // 用户查看订单
    GetMerchantOrders: "/orders/Merchant", // 商家查看订单
    ShipOrder: "/orders/update", // 商家发货
    ConfirmOrder: "/orders/update", // 用户确认收货

}
export default base

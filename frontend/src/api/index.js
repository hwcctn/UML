// index.js
//网络请求方法放在这个文件
import path from "./path"
import axios from "axios"
const api={
    // 登录
    postLogin(params){
        return axios.post(path.baseUrl+path.Login,params)
    },
   

    }

export default api
   

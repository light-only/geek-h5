import { Toast } from 'antd-mobile'
import axios from 'axios'

const instance = axios.create({
    baseUrl:'http://geek.itheima.net/v1_0/',
    timeout:5000
});

//配置拦截器
instance.interceptors.request.use(
    (config) =>{
        //对config做点什么
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
)

//配置响应拦截器
instance.interceptors.response.use(
    (response) =>{
        //对响应做点什么
        return response.data;
    },
    (error) =>{
        if(error.response) {
            Toast.show(error.response.data.message)
        }else {
            Toast.show('网络繁忙，请稍后重试')
        }
        return Promise.reject(error)
    }
)

export default instance;
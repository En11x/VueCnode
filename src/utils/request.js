/**
 * 封装axios 实现发送/响应接口的拦截,来实现统一提示等效果
 */

import axios from "axios";
import { Message, Loading } from "element-ui";

//弹出错误信息提示框
const error = () => {
  Message({
    type: "error",
    message: "遇到错误，请刷新重试!",
    duration: 2 * 1000
  });
};

//加载提示框实例
let loading
//开始加载
const startLoading = () =>{
    loading = Loading.service({
        lock:true,
        text:'加载中...',
        background:"rgba(0,0,0,0.7)"
    })
}
//关闭加载
const endLoading = ()=>{
    loading.close()
}

// 创建axios实例
const service = axios.create({
    baseURL :'https://cnodejs.org/api/v1',
    timeout:5000  //请求超时时间限制
})

//请求拦截器
service.interceptors.request.use(
    //请求之前显示加载动画
    config=>{
        startLoading()
        return config
    },
    error=>{
        //发生错误
        endLoading()
        //显示错误提示信息
        error()
        return Promise.reject(error)
    }
)

//响应拦截器
service.interceptors.response.use(
    response=>{
        endLoading()
        return response
    },
    error=>{
        endLoading()
        error()
        return Promise.reject(error)
    }
)

export default service
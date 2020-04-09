import axios from 'axios'

import NProgress from 'nprogress'
import  'nprogress/nprogress.css'
//配置不显示右上角的旋转进度
NProgress.configure({showSpinner:false})
//创建一个新的Axios
const ajax=axios.create({
    baseURL:'./api',//前缀路径
    timeout:20000//请求超时事件
})

//添加请求拦截器
ajax.interceptors.request.use((config)=>{
    //显示进度条
    NProgress.start()
    return config
})//添加响应拦截器
ajax.interceptors.response.use(
    response=>{
        //隐藏进度条
        NProgress.done()
        //3.成功返回data
        return response.data
    },
    error=>{
         //隐藏进度条
         NProgress.done()
         //4.统一处理请求错误，具体请求也可以选择处理或者不处理
         alert('请求出错'+error.message|| '未知错误')
        return Promise.reject(error)
    }
)
//向外暴露ajax
export default ajax
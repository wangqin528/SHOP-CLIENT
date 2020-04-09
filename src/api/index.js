//接口请求函数
import ajax from './ajax'
import mockAjax from './mockAjax'
//获取三级分类列表
export const reqBaseCategoryList=()=>ajax('/product/getBaseCategoryList')
//登录
export const reqLogin=(mobile,password)=>ajax.post('/user/passport/login',{mobile,password})
//请求mock的接口，获取轮播列表数据
export const reqBanners= () =>mockAjax.get('/banners')
//请求mock的接口，获取所有的楼层的列表数据
export const reqFloors=()=>mockAjax.get('/floors')
reqBanners().then(result=>{
    console.log('result',result)
})
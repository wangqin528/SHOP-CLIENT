//利用mockjs来定义mock接口
import Mock from 'mockjs'
import banners from './banners.json'//自动解析为了js数组
import floors from './floors.json'
//定义返回banners数据的接口
Mock.mock('/mock/banners',{code:200,data:banners})
//定义返回floors数据的接口
Mock.mock('/mock/floors',{code:200,data:floors})
console.log('mockServer执行了。。。。')
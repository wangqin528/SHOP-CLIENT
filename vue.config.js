module.exports={
    
   // lintOnSave:false,//直接关闭了eslint检查 就不会报错不显示页面了
    lintOnSave:'warning',//只输出错误提示信息 不影响正常显示
    devServer:{
        proxy:{
           '/api':{
               target:'http://182.92.128.115',
               changeOrigin:true
           } 
        }
    }

}
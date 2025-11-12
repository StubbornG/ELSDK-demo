const  { 
    serverStart
 } = require('@lmmdev/elsdk');


 // 启动 elpis 服务
 const app = serverStart({
   name: 'ElSDKDemo',
   homePage: '/view/project-list'
 });
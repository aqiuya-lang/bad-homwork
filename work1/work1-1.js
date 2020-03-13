//实现静态资源服务器
//加载 http 核心模块
const http = require('http');
const fs = require('fs'); 
//使用 http.createSever() 方法创建一个 web 服务器
//  返回一个 Sever 实例
const server = http.createServer();
server.on('request', function (req,res) {
    fs.readFile('./work1-2.html', function (err,data) {
        if(err){
           return res.end('404 Not Found');
        }
        res.end(data);
    }) 
    console.log('收到客户端的请求了','请求路径是:'+req.url); 
})
//绑定端口号
server.listen(1000, function () {
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:1000/来访问')
})
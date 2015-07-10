- 完成了文件的上传

流程介绍：


在index.js中，我导入了server,router,requestHandles这三个模块，第一个模块server用来启动我的应用，server里面导入了http模块，用来处理http请求，一次http请求来临之后，
我将根据router的配置将请求控制权交给requestHandles中定义的那些方法。在requestHandles中我使用response来响应此次请求。
注意到我的应用是在一个单线程中运行的，也就是说，当我的某一个路由所匹配的方法出现阻塞，将导致我其余的访问都受到影响。这跟apache不同，apache会为每一个请求创建一个单独的进程，从头到尾完整的执行一遍服务端脚本。

这时候有意思的时候发生了，当我使用异步回调来处理一个请求的时候，线程不会阻塞。

我尝试写出下面的代码。
`
function start(response) {
  console.log("Request handler 'start' was called.");

  exec("find /",
    { timeout: 10000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(stdout);
      response.end();
    });
}
`
上面的代码中,exec可能需要花一阵子才能执行完成，这时候，NodeJs并不会等他执行完成，他接受一个回调用来处理任务成功或失败之后需要做的善后工作。而在此过程中,他仍旧可以做任何事情。并不会因为一个任务的阻塞而使他无法安心工作。NodeJS的魅力之一也在这里。

顺便一提,NodeJS对POST数据的处理蛮有意思的，一个POST数据被拆分为许多个block，每一个发送一小块,每一块都伴随着一个data事件，当接受完成全部的数据后，这个事件的名称就变成end。
`
		request.setEncoding("utf8");
		request.addListener('data',function(datachunk){
			postdata+=datachunk;
		})
		request.addListener('end',function(){
			route(handle,pathname,response,postdata); //1

		});
`
在上面的代码中，我首先把datachunk一点点累积到postdata容器中，当end触发后，我在进入路由逻辑。

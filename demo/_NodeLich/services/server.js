
var http=require('http'),
	url=require('url'),
	router=require('./router'),
	stack=require('../exceptions/Stack');
	
function start(port){

	console.log('server listen on 127.0.0.1 port='+port+' ... ... ');
	function onRequest(request,response){
		var ctx={},
			pathname=url.parse(request.url).pathname;
			ctx['request']=request;
			ctx['response']=response;
			ctx['pathname']=pathname;

			router.route(ctx); 
			// router.route(pathname,response,request); 
	}
	http.createServer(onRequest).listen(port);
}



exports.start=start;
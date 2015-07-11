
var http=require('http'),
	url=require('url'),
	router=require('./router'),
	stack=require('../exceptions/Stack')
	configs=require('../configs/global');
	
	
function start(port){

	console.log('server listen on 127.0.0.1 port='+port+' ... ... ');
	function onRequest(request,response){
		var ctx={},
			pathname=url.parse(request.url).pathname;

		ctx['request']=request;
		ctx['response']=response;
		ctx['pathname']=pathname;
		ctx['config']=configs.global();
		router.route(ctx); 
	}

	http.createServer(onRequest).listen(port);
}


exports.start=start;
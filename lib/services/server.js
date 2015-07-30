var
	http=require('http'),
	url=require('url'),
	router=require('./router'),
	stack=require('../exceptions/Stack')
	configs=require('../configs/global');
	
	
function start(local_config_obj){
	
	var config=_merge_config(local_config_obj,configs.global());

	var port=config['PORT']||8080;
	

	function onRequest(request,response){

		var ctx={},
			pathname=url.parse(request.url).pathname;
		
		ctx['request']=request;
		ctx['response']=response;
		ctx['pathname']=pathname;
		ctx['config']=config;
		router.route(ctx); 
	}

	http.createServer(onRequest).listen(port);
}


//合并配置文件
function _merge_config(local_config_obj,default_config_obj){

	return _extend(default_config_obj,local_config_obj,true);
}

function _extend(o,n,override){
   for(var p in n)
   	if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override))
   		o[p]=n[p];
   	return o;
};

exports.start=start;
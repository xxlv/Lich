var fs=require('fs');
var server=require('./services/server');

//这里负责将配置文件合并 端口也应该是在配置文件中的
function run(config_obj){
	return server.start(config_obj);
}

exports.run=run;
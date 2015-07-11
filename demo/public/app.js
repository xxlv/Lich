var boot=require('../vender/NodeLich/boot');

var config={
	'PORT':'8080',
	'VIEW_TPL_EXT_NAME':'html',
	'CONTROLLER_PATH':'../../../../controllers/',//controller dir
	'VIEW_PATH':'../../../../views/'//view dir
};

boot.run(config);
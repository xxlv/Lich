var boot=require('../vender/NodeLich/boot');

var config={
	'PORT':'8080',
	'VIEW_TPL_EXT_NAME':'html',
	'CONTROLLER_PATH':'../../../../src/controllers/',//controller dir
	'VIEW_PATH':'../../../../src/views/',//view dir
	'LAYOUT_PATH':'../../../../src/views/layouts/'//view dir

};

boot.run(config);
var boot=require('./boot');

var config={
	'PORT':'8080',
	'VIEW_TPL_EXT_NAME':'html',
	'CONTROLLER_PATH':'../../../controllers/',//controller dir
	'VIEW_PATH':'../../../views/',//view dir
	'LAYOUT_PATH':'../../../views/layout/'//view dir

};

boot.run(config);
var boot=require('./boot');

var config={
	'PORT':'8080',
	'VIEW_TPL_EXT_NAME':'html',
	'CONTROLLER_PATH':'../../../testcontrollers/',//controller dir
	'VIEW_PATH':'../../../testviews/',//view dir
	'LAYOUT_PATH':'../../../testviews/layout/'//view dir

};

boot.run(config);
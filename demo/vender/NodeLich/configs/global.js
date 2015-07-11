function global(){
	var config={};

	config['CONTROLLER_PATH']='../../../../controllers/';//controller dir
	config['VIEW_PATH']='../../../../views/';//view dir
	config['VIEW_TPL_EXT_NAME']='html';//tmp extname dir
	config['CONTROLLER_EXT']='Controller';//controller ext
	config['ACTION_EXT']='Action';//action ext
	config['DEFAULT_CONTROLLER']='Index';//default controller
	config['DEFAULT_ACTION']='index';//default action


	return config;
}

exports.global=global;
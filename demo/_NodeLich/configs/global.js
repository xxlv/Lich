function global(){
	//TODO should replace 
	var config={};
	config['CONTROLLER_PATH']='../../controllers/';//controller dir
	config['CONTROLLER_EXT']='Controller';//controller
	config['ACTION_EXT']='Action';//action
	config['DEFAULT_CONTROLLER']='Index';
	config['DEFAULT_ACTION']='index';

	
	return config;
}

exports.global=global;
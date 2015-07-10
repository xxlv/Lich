var fs=require('fs'),
	stack=require('../exceptions/stack'),
	configs=require('../configs/global'),
	baseActController=require('../mvc/controller/BaseActController');


function route(ctx){

		var pathname=ctx['pathname'],
			response=ctx['response'],
			request=ctx['request'],
			config=configs.global();	


		//parse pathname
		var setting=_parse(pathname,'/');

		//get action real name
		var _action=setting['action']+config['ACTION_EXT'];

		//get controller real name
		var _controller=setting['controller']+config['CONTROLLER_EXT'];

		//get controller full path 
		var _ctr_file=config['CONTROLLER_PATH']+_controller;


		fs.exists(_ctr_file,function(exists){

			try{
				//dispath
				baseActController['dispath'](ctx,_controller,_action);

			}	
			catch(e){
				//not found
				//if just throw this  http server will wait response  
				//so this section , should give client a response
				stack.printStack(e,response);

	    	}

		});


}


function _parse(pathname,separator){
	var settings={};
	
	pathname=pathname.substr(1);
	path_arr=pathname.split(separator);

	// console.log('DEBUG PATH IS  '+pathname+'\n');
	// console.log(path_arr);


	var _c=path_arr[0].toLowerCase().replace(/(\w)/,function(v){return v.toUpperCase()});
	
	var _a=path_arr[1];
	
	if(_c==null){
		throw 'ControllerNotFoundEx';
	}
	else{
		settings['controller']=_c;

		if(typeof(_a) == "undefined"){

			//default action
			settings['action']='index';
		}
		else{

			settings['action']=_a;
		}

	}
	return settings;
}


//expo
exports.route=route;
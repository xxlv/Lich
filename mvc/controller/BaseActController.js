
var 
	fs=require('fs'),
	render=require('./../../services/render'),
	baseview=require('./../view/BaseView'),
	path = require('path');

// mvc abstract controller 
function BaseActControllerDispath(ctx,controller,action){
				

		var res=ctx['response'],
			req=ctx['request'];

		//TODO should replace Config get
		//run controllers action
		var ctr=require('./../../../controllers/'+controller);

		//view model
		var v_model=ctr[action](res,req);

		//get index from IndexController
		var controller_prefix=controller.split('Controller',2)[0].toLowerCase();

		//get index from indexAction
		var action_prefix=action.split('Action',2)[0].toLowerCase();

		var view_tpl_full_path='./../../../views/'+controller_prefix+'/'+action_prefix +'.html';

		//absolute path
		view_tpl_full_path = path.join(__dirname, view_tpl_full_path);

		fs.readFile(view_tpl_full_path,function(err,data){

			if(err){

				render.rend(res,view_tpl_full_path+' not Found!<br/> DEBUG MSG: '+err.message);			

			}else{
				//pass valiables
				render.rend(res,baseview.view(data,v_model));	
			}

		});

	}



exports.dispath=BaseActControllerDispath;

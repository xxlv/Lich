
var M=require('../models');

function indexAction(){

	var user_table=M.get('user').table();//获取userTable

	var user=user_table.getUser();


	var view={
		'user':user
	};
	view['_layout']='layout';
	return view;

}
/**
 * add action 
 */
function addAction(res,req){

	var view={};

	view['_layout']='layout';
	return view;
}

/**
 * Expose the Actions.
 */
exports.indexAction=indexAction;
exports.addAction=addAction;


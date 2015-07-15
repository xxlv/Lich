function indexAction(res,req){

	var view={
		'hello':{
			'word':'Hello'
		}
	};
	view['_layout']='layout2';
	
	return view;

}
function addAction(res,req){

	var view={};

	view['_layout']='layout';
	return view;
}




exports.indexAction=indexAction;
exports.addAction=addAction;


function indexAction(res,req){

	var view={
		'hello':{
			'word':'Hello'
		}
	};
	
	return view;

}
function addAction(res,req){
	var view={};
	view['foo']='bar';
	return view;
}




exports.indexAction=indexAction;
exports.addAction=addAction;


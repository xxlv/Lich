function userTable(handle){
	console.log(handle)
	var model={};
	var _tablename='user';	
	var _colum={
		'user_id':'int',
		'user_name':'string',
		'pass_word':'string',
		'is_admin':'boolean'
	}	

	var getUser=function(handle){
		return {'user_id':1,'user_name':'linaiqing','pass_word':'password','is_admin':'2'};
		// return handle.select();
	
	}


	model['_tablename']=_tablename;
	model['_colum']=_colum;

	model['getUser']=getUser;
	return model;
}

exports.table=userTable;

var factory = require("../lib/db/DBFactory");
var dbFactory = factory.DBFactoty();
var handle = dbFactory.create('mysql').MysqlHandle();

function userTable(){

    var model = {};
	var _tablename='user';	
	var _colum={
		'user_id':'int',
		'user_name':'string',
		'pass_word':'string',
		'is_admin':'boolean'
	}	
    
    //这里需要将查询到的用户返回，但此时不知道该怎么从回调中返回，
    //故使用一个函数来处理
    var getUser = function (fn){
        var sql = 'select * from think_admin ';
        var user = handle.query(sql, function (v) {
            fn(v);
        });
    }
    

	model['_tablename']=_tablename;
	model['_colum']=_colum;
	model['getUser']=getUser;
	return model;
}

exports.table=userTable;
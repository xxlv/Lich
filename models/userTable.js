
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
    
    //������Ҫ����ѯ�����û����أ�����ʱ��֪������ô�ӻص��з��أ�
    //��ʹ��һ������������
    var getUser = function (){
        var sql = 'select * from think_admin ';
        var user = handle.query(sql, function (v) {});
        return user;
	}
	model['_tablename']=_tablename;
	model['_colum']=_colum;
	model['getUser']=getUser;
	return model;
}

exports.table=userTable;
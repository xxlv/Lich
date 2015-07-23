function _db(){
	var db_config={};
	
	db_config['HOST']='127.0.0.1';
	db_config['POST']=3306;
	db_config['DB_USER_NAME']='root';
	db_config['DB_USER_PASS']='';
	db_config['DB_NAME']='';

	return db_config;
}
/**
 * Exponse db
 */	
exports.db=_db;
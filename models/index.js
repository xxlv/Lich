
function _get(entity){
	var table;
	try{
		 table=require('./'+entity+'Table');
		 
	}catch(e){
		table=false;
	}
	return  table;

}

exports.get=_get;
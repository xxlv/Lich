
function MysqlHandle() {

    var should_exports = {};
    var mysql = require('mysql');


    //这里应该从配置文件同步
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'thinkphp'
    });
    connection.connect();    
    var query = function (sql, fn) {
        //将查询的结果交给fn去执行
        //return 
        connection.query(sql, function (err, rows, fields) {
            if (err) {
                console.log("query failed!" + err);
                return;
            }
            return fn(JSON.stringify(rows[0]));
        });
    }
    
    should_exports['query'] = query;
    return should_exports;
}

exports.MysqlHandle = MysqlHandle;
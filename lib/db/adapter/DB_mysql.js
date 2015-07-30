
function MysqlHandle() {
    
    var should_exports = {};

    var Client = require("mysql");
    //这里应该从配置文件同步
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root_2015',
        database : 'shujuxia2'
    });
    connection.connect();    
    var query = function (sql) {
        connection.query(sql, function (err, rows, fields) {
            if (err) {
                console.log("query failed!");
                return;
            }
            connection.end();
            return rows;

        })         
   
    }
    should_exports['query'] = query;
    return should_exports;
}

exports.DBH = MysqlHandle;
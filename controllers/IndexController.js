var Model = require('../models');
var mysql = require('mysql');

//这里应该从配置文件同步
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'thinkphp'
});
connection.connect();

function indexAction() {


    var view = {};
    user = {"adminname":"amdin"};
    view = {
        'user': user
    };
    view['_layout'] = 'layout';
    return view;

}
/**
 * add action 
 */
function addAction(res, req) {
    
    var view = {};
    
    view['_layout'] = 'layout';
    return view;
}

/**
 * Expose the Actions.
 */
exports.indexAction = indexAction;
exports.addAction = addAction;


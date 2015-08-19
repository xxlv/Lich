var Model = require('../models');

function indexAction() {
    
    var view = {};
    var user_table = Model.get('user').table();//获取userTable
    user_table.getUser(function () { 
   

    });
    
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
function addAction(res, req, s) {
    
    var view = {};
    
    view['_layout'] = 'layout';
    return view;
}

/**
 * Expose the Actions.
 */
exports.indexAction = indexAction;
exports.addAction = addAction;


var Model = require('../models');

function indexAction() {
    
    
    var user_table = Model.get('user').table();//获取userTable
    //var user = user_table.getUser();
    user = user_table.getUser();
    var view = {
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


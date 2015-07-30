//DB factory

function DBFactoty() {
    
    var should_exports = {};
    var create = function (type) {
        var db_adapter = require("./adapter/DB_" + type);
        return db_adapter
    }
    should_exports['create'] = create;

    return should_exports;

}

exports.DBFactoty=DBFactoty
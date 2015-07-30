
function _get(entity) {
    var table;
    try {
        table = require('./' + entity + 'Table');
    } catch (e) {
        table = e;
    }
    return table;
}

exports.get = _get;
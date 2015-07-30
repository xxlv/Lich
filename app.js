var boot = require('./lib/boot');

var config = {
    'PORT': '8080',
    'VIEW_TPL_EXT_NAME': 'html',
    'CONTROLLER_PATH': '../../../controllers/',//controller dir
    'VIEW_PATH': '../../../views/',//view dir
    'LAYOUT_PATH': '../../../views/layout/'//layout dir

};
console.log('NodeLich server listen on 127.0.0.1 port=' + config.PORT + ' ... ... ');

boot.run(config);
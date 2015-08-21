## 项目介绍
- NodeLich是一个使用NodeJS开发的轻量级的MVC框架，实现了路由转发,模块渲染，MVC等。


## 安装

```bash
$ npm install nodelich
```
## 特色

  * 非常轻量级MVC
  * 强大而自由的配置
  * PATH INFO路由映射

## 快速上手

现在你就可以获得noelich，你需要做的事情是:

```bash
$ npm install nodelich

```

## 如何开始

- 建立一个app.js文件，内容如下
 ```js
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

```



$ node app.js

```

- 建立一个控制器位于/controllers/下（这是可配置的，后面会介绍）
/controllers/IndexController.js

内容如下：

 ```js
function indexAction(res,req){

	var view={};
	return view;

}

exports.indexAction=indexAction;

 ```
 - 接下来为IndexController建立一个视图,位于/views/index


 ```js
<b>Hello NodeLich!</b>

 ```

 OK 所有的工作到目前为止就结束了,通过访问127.0.0.1:8080/index/index可以看到第一个Hello程序！很酷是吧！

-----
## 配置

NodeLich 功能是可以配置的，包括侦听的端口号等。下面列出常见的配置。

----
- PORT 			    HTTP侦听端口	
- CONTROLLER_PATH   控制器存放路径（注意现在是相对于nodelich源里面的router.js的路径，以后会调整~）
- VIEW_PATH         视图存放路径
- LAYOUT_PATH 		layout存放路径
- VIEW_TPL_EXT_NAME 模板后缀，默认为.html文件
- CONTROLLER_EXT    控制器文件名EXT,默认为Controller,Index控制器为IndexController
- ACTION_EXT		Action的EXT，默认为Action,index控制器为indexAction




## License

  [MIT](LICENSE)








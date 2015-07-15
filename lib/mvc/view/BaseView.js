function _view(tpl,model){

  var _layout_tpl= arguments[2]||false;
  var view,
      _tpl,
      _layout_model;

	_tpl=new _TplMaker(tpl.toString());

  try{
      var no_layout_view= _tpl.render(model);

      if(_layout_tpl&& typeof(_layout_tpl)!=='undefined'){// 如果有layout 则使用layout

        console.log('--- use layout ---');
        
        _layout_tpl=new _TplMaker(_layout_tpl.toString());

        _layout_model={'content':no_layout_view };
        
         view= _layout_tpl.render(_layout_model);
  
      }else{
        view=no_layout_view;
      }

  }
  catch(e){
    view='Render Error';
  }
  return view;
}



function _TplMaker(tpl,model){
   	console.log('tpl maker start'+"\r\n");
   	var view='',
      match,
      fn,
      code = ['var r=[];'];

   	var re=/\{\s*([a-zA-Z\_\.]+)\s*\}/m;

    addLine = function(text) {
            code.push('r.push(\'' + text.replace(/\'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r') + '\');');
        };
    
    while(match=re.exec(tpl)){
      
      if (match.index > 0) {  
          addLine(tpl.slice(0, match.index));
        }

        code.push('r.push(this.' + _getArrayLike(match[1]) + ');');


        tpl=tpl.substring(match.index+match[0].length);//next
      }

      addLine(tpl);

      code.push('return r.join(\'\');');

      fn=new Function(code.join('\n'));
      
      this.render=function(model){//这里吧model绑定到fn的this上下文中

        return fn.apply(model);
      }
}

//使用a['b']这种方式访问对象 
function _getArrayLike(match){

  var match_arr_like='';
  var match_arr=match.split("\.");
  var len=match_arr.length;

  match_arr_like=match_arr[0];

  for(var i=1;i<len;i++){
    match_arr_like+='[\''+match_arr[i]+'\']';
  } 

  return match_arr_like;
}

exports.view=_view;
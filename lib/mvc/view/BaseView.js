function _view(tpl,model){
	_TplMaker(tpl.toString());
	return tpl;
}



function _TplMaker(tpl){
   	console.log('tpl maker start'+"\r\n");
 		
   	var view='',
   		i=0;

   	var match;

   	var tpl='<h1>{hello.word}</h1>';
   	var re=/\{\s*([a-zA-Z\_\.]+)\s*\}/m;
   	var pre_code='var code=[];';

    while(match=re.exec(tpl)){

        console.log(match);
        	
        tpl=tpl.substring(match.index+match[0].length);//next
    }

}


exports.view=_view;
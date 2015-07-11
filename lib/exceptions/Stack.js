

function printStack(e,res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('Name :<b style="color:red" > '+e.name +'</b><br/><br/>');
	res.write('Exception : <b style="color:red" >'+e.message+'</b><br/>');
	res.end();

}
exports.printStack=printStack;
function rend(res,body){
	var http_status= arguments[2] || 200;
	res.writeHead(http_status,{'Content-Type':'text/html'});
	res.write(body);
	res.end();
}

exports.rend=rend;
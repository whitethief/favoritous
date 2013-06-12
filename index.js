var restify = require('restify'),
    server = restify.createServer();


server.get('/version', function(req, res, next){
	res.send({ version: '0.0.1-dev'})
	next();
});

server.listen(8080, function(){
	console.log('%s listening at %s', server.name, server.url);
});



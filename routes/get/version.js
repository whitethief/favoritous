version = function(req, res, next){
	res.send({ version: '0.0.1-dev'});
	next();
}


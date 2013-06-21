version = function(req, res, next){
	res.send({ version: '0.0.2-dev'});
	next();
}


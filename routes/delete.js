var DELETE = {
    '/images': function(req, res, next){
        res.send('I delete bookmarks of IMAGES');
        next();
    },
    '/url': function(req, res, next){
        res.send('I delete bookmarks of URLs');
        next();
    },
    '/user': function(req, res, next){
        res.send('I delete Users');
        next();
    }
}

exports.DELETE = DELETE;

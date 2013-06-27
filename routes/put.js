var PUT = {
    '/images': function(req, res, next){
        res.send('I update bookmarks of IMAGES');
        next();
    },
    '/url': function(req, res, next){
        res.send('I update bookmarks of URLs');
        next();
    },
    '/user': function(req, res, next){
        res.send('I update Users');
        next();
    }
}

exports.PUT = PUT;

var POST = {
    '/images': function(req, res, next){
        res.send('I create bookmarks of IMAGES');
        next();
    },
    '/url': function(req, res, next){
        res.send('I create bookmarks of URLs');
        next();
    },
    '/user': function(req, res, next){
        res.send('I create Users');
        next();
    }
}

exports.POST = POST;

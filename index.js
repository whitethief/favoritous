/************** TODO *******************
*   1. Create a config file and its loader
****************************************/

var fs = require('fs'),
    q  = require('q'),
    __ = require('underscore'),
    findit = require('findit'),
    restify = require('restify'),
    server = restify.createServer(),
    config = require('./favoritous.config.json'),
    load_setup = null,
    setup_routes = null,
    start_server = null;

load_setup = function(){
    var deferred = q.defer(),
        finder = null;

    finder = findit.find(config.routes_folder);

    finder.on('file', function(file, stat){
        console.log(file);
    });

    finder.on('end', function(){
        deferred.resolve();
    });

    return deferred.promise;
};

start_server = function(){
    // server.listen(config.port, function(){
    //     console.log('%s listening at %s', server.name, server.url);
    // });
};

/******** Starting the Server **********************/

if(!fs.existsSync(config.routes_folder)){
    throw new Error('Routes folder does not exists!');
}

load_setup().then(start_server);

/***************************************************/

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
    load_setup,
    setup_routes,
    load_static_route,
    start_server;

load_setup = function(){
    var deferred = q.defer(),
        finder = null,
        route_regex = /^.\/\w+\/(\w+)\/((\w*).js)$/g;

    finder = findit.find(config.routes_folder);

    finder.on('file', function(file, stat){
        var matches = route_regex.exec(file);

        console.log('Match 1: ' + matches[1]);
        console.log('Match 2: ' + matches[2]);
    });

    finder.on('end', function(){
        deferred.resolve();
    });

    return deferred.promise;
};

load_static_route = function(){
    server.get(/\/*.*/, restify.serveStatic({
        directory: config.static_folder
    }));

    server.get( /\/images\/*.*/, restify.serveStatic(
    {
        directory: config.static_folder + '/' + 'images'
    }));

};

start_server = function(){
    server.listen(config.port, function(){
         console.log('%s listening at %s', server.name, server.url);
    });
};

/******** Starting the Server **********************/

if(!fs.existsSync(config.routes_folder)){
    throw new Error('Routes folder does not exists!');
}

load_setup().then(load_static_route).then(start_server);

/***************************************************/

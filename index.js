/************** TODO *******************
*1. Create a config file and its loader
****************************************/

var fs = require('fs'),
    q  = require('q'),
    __ = require('underscore'),
    path =  require('path'),
    findit = require('findit'),
    restify = require('restify'),
    server = restify.createServer(),
    config = require('./favoritous.config.json'),
    httpVerbs = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
    load_setup,
    setup_routes,
    load_static_route,
    start_server;

load_setup = function(){
    console.log('load_setup');

    var deferred = q.defer(),
        finder = null,
        routeRegx = /\.\/routes\/(\w+).js/;

    finder = findit.find(config.routesFolder);

    finder.on('file', function(file, stat){
        console.log('Findit Finder On File: ' + file);

        var match   = routeRegx.exec(file),
            verb    = match[1],
            VERB    = verb.toUpperCase(),
            actions = require('./' + path.join(file))[VERB];

        if(verb === 'delete') { verb = 'del'; }

        //This the file name does match a verb, skip it
        if(!__.contains(httpVerbs, VERB)){ return; }

        for(route in actions){
            if(actions.hasOwnProperty(route)){
                //TODO: Refactor building route string
                server[verb](config.apiUrl + '/' + route, actions[route])
            }
        }
    });

    finder.on('end', function(){
        console.log('end');
        deferred.resolve();
    });

    return deferred.promise;
};

load_static_route = function(){
    console.log('load_static_route');

    server.get(/\/*.*/, restify.serveStatic({
        directory: config.contentFolder
    }));

    server.get( /\/images\/*.*/, restify.serveStatic(
    {
        directory: config.contentFolder + '/' + 'images'
    }));
};

start_server = function(){
    console.log("start_server");
    server.listen(config.port, function(){
         console.log('%s listening at %s', server.name, server.url);
    });
};

/******** Starting the Server **********************/

if(!fs.existsSync(config.routesFolder)){
    throw new Error('Routes folder does not exists!');
}

load_setup().then(load_static_route).then(start_server);

/***************************************************/

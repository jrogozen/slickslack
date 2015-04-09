var express = require('express');
var routes = require('./server/routes');
var server = express();
var port = 8080;

server.use(routes);

server.listen(port, function() {
    console.log('express server listening on port:', port);
});
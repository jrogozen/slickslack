var express = require('express');
var routes = require('./server/routes');
var server = express();
var config = require('./config');

var port = config.server.serverPort;

require('./server/middleware/common')(server);

server.use(routes);

server.listen(port, function() {
    console.log('express server listening on port:', port);
});
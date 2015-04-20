var express = require('express');
var routes = require('./server/routes');
var http = require('http');
var config = require('./config');

var app = express();
var server = http.createServer(app);
var port = config.server.serverPort;
var io = require('socket.io').listen(server);

io.on('connection', function(socket) {
    socket.on('init', function(data) {
        socket.broadcast.emit('init:response', {
            name: data.name
        });
    });
});

require('./server/middleware/common')(app);

app.use(routes);

app.use(express.static('public'));

server.listen(port, function() {
    console.log('express server listening on port:', port);
});
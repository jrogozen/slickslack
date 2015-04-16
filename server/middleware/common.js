var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var config = require('../../config');
var morgan = require('morgan');

module.exports = function(server) {
    server.use(morgan('dev'));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: true,
        inflate: true
    }));
    server.use(cookieParser());
    server.use(express.static(config.server.root + '/public', {
        maxAge: 31557600000
    }));
};
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var config = require('../../config');
var morgan = require('morgan');
var cors = require('cors');

module.exports = function(server) {
    server.use(morgan('dev'));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: true,
        inflate: true
    }));
    server.use(cors());
    server.use(cookieParser());
    server.use(express.static(config.server.root + '/public', {
        maxAge: 31557600000
    }));
};
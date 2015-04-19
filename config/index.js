var path = require('path');

var config = {
    server: {
        root: path.resolve(__dirname, '..'),
        serverPort: process.env.SERVER_PORT || 3000,
        webpackPort: process.env.WEBPACK_PORT || 8080,
        apiTarget: 'http://localhost:8080',
        path: 'http://localhost:3000',
        dbTarget: ''
    },
    app: {
        env: process.env.NODE_ENV || 'development'
    }
};

module.exports = config;
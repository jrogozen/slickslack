var config = {
    server: {
        serverPort: process.env.SERVER_PORT || 8080,
        webpackPort: process.env.WEBPACK_PORT || 8090,
        apiTarget: 'http://localhost:8080',
        dbTarget: ''
    },
    app: {
        env: process.env.NODE_ENV || 'development'
    }
};

module.exports = config;
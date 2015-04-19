var constants = require('../constants/Constants.js');
var _ = require('lodash');

var AppActions = {
    serverRequestInit: function(initState, callback) {
        var AppStoreInitState = initState.AppStoreInitState || {};
        this.dispatch(constants.SERVER_APP_INIT, AppStoreInitState);
        var asyncCallCount = 0;
        var finished;

        if (asyncCallCount == 0) {
            callback();
        } else {
            _.after(asyncCallCount, callback);
        }
    },

    clientOnLoad: function() {
        this.flux.actions.AppActions.loadSocketIo();
    },

    loadSocketIo: function() {
        if (window && !window.io) {
            // var script = document.createElement('script');
            // script.src = "";
            // document.body.appendChild(script);

            
            script.onload = script.onreadystatechange = function() {
                // this.dispatch(constants.SOCKET_IO_INIT_SUCCESS);
                console.log('socket io loaded');
            }.bind(this);
        }  

    }
};

module.exports = AppActions;
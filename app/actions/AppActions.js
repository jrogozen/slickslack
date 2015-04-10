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
    }
};

module.exports = AppActions;
var Fluxxor = require('fluxxor');
var constants = require('../constants/Constants.js');

var AppStore = Fluxxor.createStore({
    initialize: function() {
        this.state = {
            env: null,
            serverPath: null
            // scripts: {
            //     socketIo: false
            // }
        };

        this.bindActions(
            constants.SERVER_APP_INIT, this.loadServerInitState
        );
    },
    loadServerInitState: function(init) {
        this.state.env = init.env;
        this.state.serverPath = init.serverPath;
    },
    serialize: function() {
        return JSON.stringify(this.state);
    },
    hydrate: function(json) {
        this.state = JSON.parse(json);
    }
});

module.exports = AppStore;
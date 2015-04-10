var Fluxxor = require('fluxxor');
var constants = require('../constants/Constants.js');

var AppStore = Fluxxor.createStore({
    initialize: function() {
        this.state = {
            server: null
        };

        this.bindActions(
            constants.SERVER_APP_INIT, this.loadServerInitState
        );
    },
    loadServerInitState: function(init) {
        this.state.server = init.server;
    },
    serialize: function() {
        return JSON.stringify(this.state);
    },
    hydrate: function(json) {
        this.state = JSON.parse(json);
    }
});

module.exports = AppStore;
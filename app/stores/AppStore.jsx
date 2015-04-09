var Fluxxor = require('fluxxor');
var constants = require('../constants/Constants.js');

var AppStore = Fluxxor.createStore({
    initialize: function() {
        this.state = {

        };

        this.bindActions(
        );
    },
    serialize: function() {
        return JSON.stringify(this.state);
    },
    hydrate: function(json) {
        this.state = JSON.parse(json);
    }
});

module.exports = AppStore;
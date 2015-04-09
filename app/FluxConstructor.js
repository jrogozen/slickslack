var Fluxxor = require('fluxxor');

var actions = require('./actions/ActionsBundle.js');
var AppStore = require('./stores/AppStore.jsx');

module.exports = function() {
    var stores = {
        AppStore: new AppStore()
    };

    var flux = new Fluxxor.Flux(stores, actions);

    flux.serialize = function() {
        var data = {};
        for (var key in stores) {
            if (stores.hasOwnProperty(key)) {
                data[key] = stores[key].serialize();
            }
        }
        return JSON.stringify(data);
    };

    flux.hydrate = function(data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                stores[key].hydrate(data[key]);
            }
        }
    };

    return flux;
};
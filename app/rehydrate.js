var React = require('react');
var Router = require('react-router');
var AppRoutes = require('./AppRoutes');
var FluxConstructor = require('./FluxConstructor');

if (typeof window !== 'undefined') {
    window.onload = function() {
        window.flux = FluxConstructor();
        console.log('Application successfully rehydrated.');
        
        window.flux.on('dispatch', function(type, payload) {
            console.log('[Dispatch]', type, payload);
        });

        var path = window.location.pathname;
        var serializedFlux = document.getElementById('serializedFlux').innerHTML;
        
        window.flux.hydrate(JSON.parse(serializedFlux));
        
        Router.run(AppRoutes, Router.HistoryLocation, function(Handler, state) {
            var HandlerElement = React.createElement(Handler, {
                flux: window.flux,
                path: path,
                serializedFlux: serializedFlux
            });
            React.render(HandlerElement, document);
        });
    };
}

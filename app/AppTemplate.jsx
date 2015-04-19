var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var RouteHandler = Router.RouteHandler;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var config = require('../config');

var AppTemplate = React.createClass({
    displayName: 'AppTemplate',
    mixins: [FluxMixin, StoreWatchMixin('AppStore')],
    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            AppStoreState: flux.store('AppStore').state
        };
    },
    render: function() {
        var env = this.state.AppStoreState.env;
        return (
            <html>
            <head lang="en">
                <title> HotPads - The place to find your place </title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="Content-type" content="text/html; charset=iso-8859-1"/>
                <meta httpEquiv="Content-Language" content="en-us"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
                <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="mobile-web-app-capable" content="yes"/>
            </head>
            <body>
                <RouteHandler {...this.props}/>
                <script src="https://cdn.socket.io/socket.io-1.3.5.js"></script>
                <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
                <script async type="text/javascript" src={env === 'development' ? "http://localhost:" + config.server.webpackPort + "/public/client.js" : "/bundle.js"}></script>
                <script id="serializedFlux" type="application/json" dangerouslySetInnerHTML={{__html: this.props.serializedFlux}} />
            </body>
            </html>
        )
    }
});

module.exports = AppTemplate;
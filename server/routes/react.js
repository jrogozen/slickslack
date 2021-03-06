require('node-jsx').install({
    extension: '.jsx'
});

var React = require('react');
var Router = require('react-router');
var AppRoutes = require('../../app/AppRoutes.jsx');
var FluxConstructor = require('../../app/FluxConstructor');
var config = require('../../config');
var Head = React.createFactory(require('../../app/modules/Head.jsx'));
var express = require('express');
var router = express.Router();
var url = require('url');

router.route('/*').get(function(req, res) {
    if (req.headers.host) {
        if (req.headers.host.match(/^www/) !== null) {
            res.redirect(302, 'http://' + req.headers.host.replace(/^www\./, '') + req.url);
        } else {
            var HandlerElement;
            var flux = FluxConstructor();
            var path = url.parse(req.url).pathname;
            var initState = {
                // if stores need init data
                AppStoreInitState: {
                    serverPath: config.server.path,
                    env: process.env.NODE_ENV
                }
            };
            flux.actions.AppActions.serverRequestInit(initState, function() {
                var serializedFlux = flux.serialize();

                Router.run(AppRoutes, req.url, function(Handler) {
                    HandlerElement = React.createElement(Handler, {
                        flux: flux,
                        path: path,
                        serializedFlux: serializedFlux
                    });
                });

                var markup;

                try {
                    markup = React.renderToString(HandlerElement);
                    if (markup.indexOf('NotFoundPage') > -1) {
                        res.status(404);
                    }
                } catch (e) {
                    markup = 'Error: ' + e;
                    console.log(markup);
                    res.status(500);
                }

                res.send(markup);
            });
        }
    } else {
        res.status(200);
        res.send('Alive');
    }
});

module.exports = router;
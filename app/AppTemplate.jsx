var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var AppTemplate = React.createClass({
    displayName: 'AppTemplate',

    render: function() {
        return (
            <html>
                <head lang="en">
                    <title>SlickSlack</title>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="Content-type" content="text/html; charset=iso-8859-1"/>
                    <meta httpEquiv="Content-Language" content="en-us"/>
                </head>
                <body>
                    <RouteHandler {...this.props}/>
                    {/* replace localhost in production */}
                    <script src="http://localhost:8090/public/bundle.js"></script>
                    <script id="serializedFlux" type="application/json" dangerouslySetInnerHTML={{__html: this.props.serializedFlux}} />
                </body>
            </html>
        )
    }
});

module.exports = AppTemplate;
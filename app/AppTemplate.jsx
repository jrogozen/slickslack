var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var AppTemplate = React.createClass({
    displayName: 'AppTemplate',

    render: function() {

        return (
            <div>
                <RouteHandler {...this.props}/>
                <script id="serializedFlux" type="application/json" dangerouslySetInnerHTML={{__html: this.props.serializedFlux}} />
            </div>
        )
    }
});

module.exports = AppTemplate;
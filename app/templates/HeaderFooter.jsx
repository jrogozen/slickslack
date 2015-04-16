var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var HeaderFooter = React.createClass({
    displayName: 'HeaderFooter',

    render: function() {
        return (
            <div className="container">
                <RouteHandler {...this.props}/>
            </div>
        )
    }
});
module.exports = HeaderFooter;
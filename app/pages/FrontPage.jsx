var React = require('react');
var Link = require('react-router').Link;

var FrontPage = React.createClass({
    displayName: 'FrontPage',

    render: function() {
        return (
            <div>
                <h1>fronsst!</h1>
                <Link to="WebhookPage">Posts</Link>
            </div>
        );
    }
});

module.exports = FrontPage;
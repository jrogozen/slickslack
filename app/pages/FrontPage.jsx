var React = require('react');
var Link = require('react-router').Link;

var FrontPage = React.createClass({
    displayName: 'FrontPage',

    render: function() {
        return (
            <div>
                <h1>NICK Js. COOL?? FIND OUT AT 11!</h1>
                <Link to="WebhookPage">WEBHOOKS</Link>
            </div>
        );
    }
});

module.exports = FrontPage;
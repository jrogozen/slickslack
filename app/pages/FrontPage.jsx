var React = require('react');
var Link = require('react-router').Link;

var FrontPage = React.createClass({
    displayName: 'FrontPage',

    render: function() {
        return (
            <div>
                <h1>front!</h1>
                <Link to="PostPage">Posts</Link>
            </div>
        );
    }
});

module.exports = FrontPage;
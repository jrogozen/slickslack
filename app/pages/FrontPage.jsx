var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Link = require('react-router').Link;

var FrontPage = React.createClass({
    displayName: 'FrontPage',
    mixins: [FluxMixin, StoreWatchMixin('AppStore')],

    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            AppStoreState: flux.store('AppStore').state
        };
    },

    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {
        var socket = io.connect(this.state.serverPath);

        socket.emit('init', {
            name: 'jon'
        });
        
        socket.on('init:response', function(data) {
            console.log(data);
        })
    },

    render: function() {
        return (
            <div>
                <h1>NICK Jss. COOL?? FIND OUT AT 11!</h1>
                <Link to="WebhookPage">WEBHOOKS</Link>
            </div>
        );
    }
});

module.exports = FrontPage;
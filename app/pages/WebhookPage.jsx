var React = require('react/addons');
var request = require('superagent');

var WebhookPage = React.createClass({
    displayName: 'WebhookPage',
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return {
            webhook: 'https://hooks.slack.com/services/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',
            name: '',
            text: '',
            avatar: ''
        }
    },

    webhook: function() {
        var body = {
            text: this.state.text,
            username: this.state.name
        };

        body = JSON.stringify(body)
        request.post(this.state.webhook)
            .type('form')
            .send(body)
            .end(function() {
                console.log('request sent!');
            })
    },

    handleSubmit: function(e) {
        console.log('submitting!');
        e.preventDefault();
        this.webhook();
    },

    render: function() {
        return (
            <div className="WebhookPage">
                <h1>Webhook</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Webhook API</label>
                        <input type="text" className="form-control" defaultValue={this.state.webhook} valueLink={this.linkState('webhook')} />
                    </div> 
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" valueLink={this.linkState('name')} />
                    </div>
                    <div className="form-group">
                        <label>Avatar URL</label>
                        <input type="text" className="form-control" valueLink={this.linkState('avatar')} />
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <textarea type="text" className="form-control" rows="3" valueLink={this.linkState('text')} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Post</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WebhookPage;
var React = require('react/addons');
var request = require('superagent');

var WebhookPage = React.createClass({
    displayName: 'WebhookPage',
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return {
            webook: 'https://hooks.slack.com/services/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',
            name: '',
            text: '',
            avatar: ''
        }
    },

    webhook: function() {
        request.post(this.state.webhook)
            .send({
                text: this.state.text,
                username: this.state.name,
                icon_url: this.state.avatar
            })
            .end(function() {
                console.log('request sent!');
            })
    },


    // curl -X POST --data-urlencode 'payload={"text": "This is posted to <#general> and comes from *monkey-bot*.", "channel": "#general", "username": "monkey-bot", "icon_emoji": ":monkey_face:"}' https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX

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
                        <input type="text" className="form-control" defaultValue={this.state.webook} valueLink={this.linkState('webhook')} />
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
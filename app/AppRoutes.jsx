var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var AppTemplate = require('./AppTemplate.jsx');
var FrontPage = require('./pages/FrontPage.jsx');
var WebhookPage = require('./pages/WebhookPage.jsx');

var AppRoutes = (
    <Route path='/' handler={AppTemplate}>
        <Route name='FrontPage' path='/' handler={FrontPage}/>
        <Route name='WebhookPage' path='/webhook' handler={WebhookPage}/>
    </Route>
);

module.exports = AppRoutes;
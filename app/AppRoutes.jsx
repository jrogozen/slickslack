var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var AppTemplate = require('./AppTemplate.jsx');
var FrontPage = require('./pages/FrontPage.jsx');
var PostPage = require('./pages/PostPage.jsx');

var AppRoutes = (
    <Route path='/' handler={AppTemplate}>
        <Route name='FrontPage' path='/' handler={FrontPage}/>
        <Route name='PostPage' path='/post' handler={PostPage}/>
    </Route>
);

module.exports = AppRoutes;
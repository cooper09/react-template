var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');

var QueryData = require('./QueryData.js');
var AppAPI = require('./utils/appAPI');

QueryData.init();
AppAPI.getUsers();
AppAPI.getArticles();
AppAPI.getQueries();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
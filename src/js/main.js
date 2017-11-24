var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');

var AppAPI = require('./utils/appAPI');

//PageData.init();
AppAPI.getArticles();
AppAPI.getUsers();
//AutoContent Data
//AppAPI.getPageData();
AppAPI.getQueryData();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
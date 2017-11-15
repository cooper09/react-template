var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');

var AppAPI = require('./utils/appAPI');

//PageData.init();
AppAPI.getData();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
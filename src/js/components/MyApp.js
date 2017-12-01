var React = require('react');
var AppAPI = require('../utils/appAPI.js');
var AppActions = require('../actions/AppActions');

//start off with as many components as you think you need. In this case, I need 10

var MainScrn = require('./MainScrn.js');
var ArticleScrn = require('./ArticleScrn.js');
var InfoOne = require('./InfoOne.js');
var InfoTwo = require('./InfoTwo.js');
var NewQuery = require('./NewQuery.js');
var Dashboard = require('./Dashboard.js');
var QueryList = require('./QueryList.js');
var ArticleScrn = require('./ArticleScrn.js');
var Settings = require('./Settings.js');


var MyApp = React.createClass({

	getInitialState: function() {
		return { 
				};
	  },
    logout() {

        AppActions.showLogin();
    },
	render: function() {
		 if (!this.props.visible) {
		 	console.log("MyApp Form is off");
          return false; 
	} 	
	return (
			<div>
				<h1>mPoint Proto</h1>
                 User: {this.props.userID}
					<p> You have been officially authorized</p>
				<br/><br/>
				<MainScrn visible={true} />
				<ArticleScrn visible={true} />
				<InfoOne visible={true} />
				<InfoTwo visible={true} />
				<NewQuery visible={true} />
				<Dashboard visible={true} />
				<QueryList visible={true} />
				<ArticleScrn visible={true} />
				<Settings visible={true} />
				<br/><br/>
				<button onClick={this.logout}>Log Out</button>
			</div>
			);
	}//end render
});//end MyApp

module.exports = MyApp;
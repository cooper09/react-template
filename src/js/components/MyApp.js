var React = require('react');
var AppAPI = require('../utils/appAPI.js');

var AppActions = require('../actions/AppActions');

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
				<h1>Happy App</h1>
                 User: {this.props.userID}
					<p> You have been officially authorized</p>
			<br/><br/>
				<button onClick={this.logout}>Log Out</button>
			</div>
			);
	}//end render
});//end MyApp

module.exports = MyApp;
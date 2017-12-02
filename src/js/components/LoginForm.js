var React = require('react');
var AppAPI = require('../utils/appAPI.js');
var AppActions = require('../actions/AppActions');

var LoginForm = React.createClass({
	getInitialState: function() {
		return { name: 'Enter Name', 
				 password: 'Enter Password',
				 admin: false
				};
	  },
	getPassword: function(e){
		this.setState({ password: e.target.value });
	},
	getName: function(e){
		this.setState({ name: e.target.value });
	},
	getAdmin: function(e){
		this.setState({ admin: e.target.value });
	},
	submit: function(){
		console.log("We have: " + this.state.name + " with password: " + this.state.password );
		var users = this.props.users;
		var login = this.state.name;

		var found = false;

		//cooper s -  For development purposes only...remember to change it back...
		AppActions.showApp('000');

		users.map(function(users) {
			if (users.name === login ) {
				//Show The App
				found = true;
				var userID = users._id;
				console.log("Unique User ID: ", userID);
				//AppActions.showApp(userID);
			}
		});

		console.log("Has the user been found: ", found );

		if (found == false ) {
			alert("I'm afraid that user cannot be found...");
		}
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("Login Form is off");
          return false; 
	} 	
	console.log("LoginForm - users: ", this.props.users );
	console.log("LoginForm - default user: ", this.state.name );
	return (
			<div>
				<h1> Simple Login Form</h1>
				<input id="input" type="text" onBlur={this.getName} defautValue={this.state.name} />
				<br/>
				<input id="password" type="password" onBlur={this.getPassword}/>
			<br/><br/>
				<button onClick={this.submit}>Submit</button>
			</div>
			);
	}//end render
});//end LoginForm

module.exports = LoginForm;
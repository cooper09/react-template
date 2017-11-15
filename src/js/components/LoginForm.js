var React = require('react');
var AppAPI = require('../utils/appAPI.js');

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

		for ( var i=0; i < users.length ; ++i ) {
			if (users[i].name === login ) {
				alert('Eureka!!');
				break;
			} else {
				alert("sorry pal...");
			} 
		}
	/*	users.map(function(users) {
			if (users.name === login ) {
				alert('Eureka!!');
				foundIt();
			} else {
				alert("User not found");
			}
		}) */

		function foundIt () {
			console.log("we can stop right here...");
		}	
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("Login Form is off");
          return false; 
	} 	
	console.log("users: ", this.props.users );
	return (
			<div>
				<h1> Simple Login Form</h1>
				<input id="input" type="text" onBlur={this.getName} defualtValue={this.state.name}/>
				<br/>
				<input id="password" type="text" onBlur={this.getPassword}/>
			<br/><br/>
				<button onClick={this.submit}>Submit</button>
			</div>
			);
	}//end render
});//end LoginForm

module.exports = LoginForm;
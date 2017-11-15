var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

//cooper s - add subcomponents here

var LoginForm = require('./LoginForm.js');

function getAppState(){
	console.log("App.getAppState: ");
	return {
		app: AppStore.getState(),
		users: AppStore.getUsers()
	}
}

var App = React.createClass({

	getInitialState: function(){
		return getAppState();

	},

	componentDidMount: function(){
	//	AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
	//	AppStore.removeChangeListener(this._onChange);
	},
	render: function(){
		console.log("Current State state: ", this.state.app[0] );
		var userData = [

			{"name" : "admin" },
			{"password" : "admin" }	
		] 

		return(
			<div>
				<LoginForm  visible={true} name={this.state.app[0]} password={this.state.app[1]} admin={this.state.app[2]} users={userData}/>
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		console.log("A change has occured....")
		//this.setState(getAppState());
	}
});

module.exports = App;
var React = require('react');

//cooper s - add subcomponents here

var ComponentOne = require('./ComponentOne.js');

function getAppState(){
	console.log("App.getAppState: ");
	return {
	/*	//app: AppStore.getState(),
		pages: AppStore.getPages(),
		oneVisible: AppStore.getOneVisible(),
		twoVisible: AppStore.getTwoVisible() */
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

		var listOfItems = [{
							"id": 1,
							"text" : "This is Item One"
		},{
			"id": 2,
			"text" : "This is Item Two"
		},{
			"id": 3,
			"text" : "And this is Item Three"
		}];

		return(
			<div>
				<ComponentOne items={listOfItems}/>
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
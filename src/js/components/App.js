var React = require('react');

var AppAPI = require('../utils/tyrionAPI');

//cooper s - add subcomponents here


var ComponentOne = require('./ComponentOne.js');

function getAppState(){
	console.log("App - getAppState: ");
	return {
	/*	data: AppAPI.getData()
		
	/*	//app: AppStore.getState(),
		pages: AppStore.getPages(),
		oneVisible: AppStore.getOneVisible(),
		twoVisible: AppStore.getTwoVisible() */
	}
}

var App = React.createClass({

	getInitialState: function(){
		console.log("APP - getInitialState: ");
		return getAppState();

	},

	componentDidMount: function(){
	//	AppStore.addChangeListener(this._onChange);
	console.log("App Component - component mounted: ", this.props.data );
	},

	componentUnmount: function(){
	//	AppStore.removeChangeListener(this._onChange);
	},
	render: function(){

	
		var num = 0;

		return(
			<div>
				<ComponentOne items={this.props.data} numItems={num}/>
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
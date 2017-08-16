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
							"text" : "Tyrion Business",
							"prodName" : "Business Item",
							"thumb" : "img/business-thumb.jpg",
							"desc" : "Lorem ipsum dolor sit amet, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},{
			"id": 2,
			"text" : "Tyrion Finance",
			"prodName" : "Finance Item",
			"thumb" : "img/finance-thumb.jpg",
			"desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
		},{
			"id": 3,
			"text" : "Tyrion Health",
			"prodName" : "Health Item",
			"thumb" : "img/health-thumb.jpg",
			"desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit laborum."
		}];

		var num = 0;

		return(
			<div>
				<ComponentOne items={listOfItems} numItems={num}/>
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
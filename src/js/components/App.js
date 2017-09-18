var React = require('react');

//Tyrion API
var AppAPI = require('../utils/tyrionAPI');

//cooper s - add subcomponents here


var ComponentOne = require('./ComponentOne.js');

function getAppState(){
	console.log("App.getAppState: ");
	return {
		data: AppAPI.getData()
		
	/*	//app: AppStore.getState(),
		pages: AppStore.getPages(),
		oneVisible: AppStore.getOneVisible(),
		twoVisible: AppStore.getTwoVisible() */
	}
}

var App = React.createClass({

	//var data = AppAPI.getData();
	//console.log("Did this work: ", data );

	getInitialState: function(){
		return getAppState();
		console.log("Did this work: ", data );
	},

	componentDidMount: function(){
	//	AppStore.addChangeListener(this._onChange);
	var data = AppAPI.getData();
	console.log("App componentDidMount - Retrieved Data: ", data );
	},

	componentUnmount: function(){
	//	AppStore.removeChangeListener(this._onChange);
	},
	render: function(){

		var listOfItems = [{
							"id": 1,
							"text" : "Tyrion Business",
							"prodName" : "How to Buy Cars at Auctions",
							"thumb" : "img/business-mustang.jpg",
							"desc" : "Jammed with techniques and insider's knowledge of the car auction scene."
		},{
			"id": 2,
			"text" : "Tyrion Finance",
			"prodName" : "Bitcoin is the Future",
			"thumb" : "img/bitcoin-book-100x100.jpg",
			"desc" : "The Bitcoin Miracle Will Be the Only Resource You Ever Need to Get Started with Bitcoin"
		},{
			"id": 3,
			"text" : "Tyrion Health",
			"prodName" : "Wake Up Lean",
			"thumb" : "img/freeradicals.jpg",
			"desc" : "You Can Drop Up to 2.8 Pounds in the Next 36 Hours No Matter How Old You Are"
		}];

		//console.log("What's the deal, Geel: ", data );
		//var listOfItems = data;

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
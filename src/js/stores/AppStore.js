var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _pages = [];

var _contentVisible = false;

var _image = "img/image1.jpg";

// Method to load product data from mock API
function loadPageData(data) {
  _pages = data[0];
  console.log("AppStore.loadPageData: ", _pages );

}

	// Set cart visibility
function setContenetVisible(visible) {
  _contentVisible = true;
}

function closeContent() {
	console.log("AppStore.closeWindow - close whatever window open: " );
	_contentVisible = false;
}

var AppStore = assign({}, EventEmitter.prototype, {

	getState: function () {
	console.log("AppStore.getState: ", _contentVisible );
		_contentVisible = false
	 	return _contentVisible;
	},
	  // Return cart visibility state
	getContentVisible: function () {
		console.log('AppStore.getOneVisible: ' + _oneVisible );
		// for our simple form we will keep Component One (the form) be visible from the beginning
		_contentVisible = true;
		return _contentVisible;
	},
	  // Set cart visibility
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	console.log("AppDispatcher: ", action.actionType );
	switch(action.actionType){

		// Respond to RECEIVE_DATA action

		case 'SHOW_CONTENT':
	  	  console.log("Show Item content. About now I should be changing some state: ", payload );
	      _visible=true;
	      setContentVisible(_visible);
	 	break;
	
		case 'CLOSE_WINDOW':
	  	  console.log("CLOSE_WINDOW action - Close Our Window... ", payload.data );
				closeWindow();
	 	break;
	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
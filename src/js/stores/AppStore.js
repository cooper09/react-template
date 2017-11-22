var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _users = [];

var _loginVisible = true;
var _appPageVisible = false

var _name="John", _password="password", _admin=false;
var _userID="000";

// Method to load product data from mock API
function loadUsers(data) {
  _users = data;
  console.log("AppStore.loadPageData: ", _users );
}
// Set visibility functions for each component

function setLoginVisible(visible){
	_loginVisible = visible;
	_appPageVisible = false;
	_name="";
	console.log('AppStore.setLoginVisible - appPageVisible: ', _appPageVisible );
}

function setAppVisible(visible, userID) {
  	_appPageVisible = visible;
	_loginVisible = false;
	_userID = userID;
}
//Single Broadcast - Emmitter
var AppStore = assign({}, EventEmitter.prototype, {

	getUsers: function () {
	    return _users;
	},
	getState: function () {
        console.log('Appstore.getState');
        var state = [_name, _password, _admin ]; 
	 	return state;
	},
	getLoginVisible: function () {
		console.log('AppStore.getLoginVisible: ' + _loginVisible );
		return _loginVisible;
	},
	  // Return cart visibility state
	getAppVisible: function () {
		console.log('AppStore.getAppVisible: ' + _appPageVisible );
		return {
					visible: _appPageVisible,
					userID: _userID
		}
	},
// Get ready to broadcast!
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
	    case 'RECEIVE_USERS':
			console.log("AppStore - Receiving Data: ", action.data );	    
	      	loadUsers(action.data);
		break;
// SHOWS
		case 'SHOW_LOGIN':
			console.log("Show user login page");
			_visible=true;
	      	setLoginVisible(_visible);
	 	break;
	 	case 'SHOW_APP':
	  	  	console.log("Show main application page: ", action.data );
		  	_visible=true;
		  	var userID = action.data;
	      	setAppVisible(_visible, action.data );
	 	break;
	
	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _articles = [];
var _queries = [];
var _users = [];

var _loginVisible = true;
var _appPageVisible = false

var _oneVisible = true, _twoVisible = false, _settingsVisible=false, _listVisible = true, _queriesVisible=false;
//screen flags
var  _articleVisible = false, _articleNo = 0;

var _name="John", _password="password", _admin=false;
var _userID="000";

// Method to load product data from mock API
function loadUsers(data) {
  _users = data;
  console.log("AppStore.loadPageData: ", _users );
}

function loadArticles(data) {
	_articles = data;
	console.log("AppStore.loadArticles: ", _articles );
  }
  
  // Pull personal query data
  function loadQueries(data) {
	  _queries = data;
	  console.log("AppStore.loadQueries ", _queries );
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
// Specific only to AutoContent

function setOneVisible(visible) {
	alert("AppStore.setOneVisible 2: "+ visible );
_oneVisible = visible;
  _twoVisible = false;
  _settingsVisible = false;
  _articleVisible = false;
  _listVisible = false;
}

function setTwoVisible(visible) {
_twoVisible = visible;
  _oneVisible = false;
  _settingsVisible = false;
  _articleVisible = false;
  _listVisible = false;
}

function setSettingsVisible(visible) {
_twoVisible = false;
  _oneVisible = false;
  _articleVisible = false;
  _listVisible = false;	
  _settingsVisible = visible;
}

function setArticleListVisible(visible, user ) {
  console.log('setArticleListVisible: ', visible );
  _listVisible = visible;
  _loginVisible = false;
  _userID = user;
}

function setArticleVisible(visible) {
	_twoVisible = false;
	  _oneVisible = false;
	  _settingsVisible = false;
	  _articleVisible = visible;
  }
  
  function setArticleNo(artNo) {
	  _articleNo = artNo;
  }
// cooper s - set/show query data

function setQueries(visible) {
	_twoVisible = false;
	_oneVisible = false;
	_settingsVisible = false;
	_articleVisible = false;
	_listVisible = false;
	_queriesVisible = visible;	
}

//Single Broadcast - Emmitter
var AppStore = assign({}, EventEmitter.prototype, {
	getArticles: function () {
	    return _articles;
	},
	getQueries: function () {
	    return _queries;
	},
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

	// Auto-Content specific
	getOneVisible: function () {
		console.log('AppStore.getOneVisible: ' + _oneVisible );
		return _oneVisible;
	},
	getTwoVisible: function () {
		console.log('AppStore.getTwoVisible: ' + _twoVisible );
		return _twoVisible;
	},
	getSettingsVisible: function () {
		console.log('AppStore.getTwoVisible: ' + _settingsVisible );
		return _settingsVisible;
	},
	getListVisible: function () {
		console.log('AppStore.getListVisible: ' + _listVisible );
		return _listVisible;
	},
	// Article scope variable
	getArticleVisible: function () {
		console.log('AppStore.getArticleVisible: ' + _articleVisible );
		return _articleVisible;
	},
	getArticleNo: function () {
		console.log('AppStore.getArticleVisible: ' + _articleNo );
		return _articleNo;
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
		// Respond to RECEIVE_DATA action
	    case 'RECEIVE_DATA':
		console.log("AppStore - Receiving Data (Article): ", action.data );	    
		  loadArticles(action.data);
	break;
	case 'RECEIVE_QUERIES':
		console.log("AppStore - Loading Query Data: ", action.data );	    
		  loadQueries(action.data);
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
	//AutoContent Specific
	case 'SHOW_QUERIES':
		console.log("OK we have my own personal event. About now I should be changing some state: ", payload );
		_visible=true;
		setOneVisible(_visible);
	break;
	case 'SHOW_SELECTED':
			console.log("Show page two: ", payload );
		_visible=true;
		setTwoVisible(_visible);
	break;
	case 'SHOW_SETTINGS':
			console.log("Show settings: ", payload );
		_visible=true;
		setSettingsVisible(_visible);
	break;
	case 'SHOW_ARTICLE_LIST':
			console.log("Appstore - Show article list: ", payload.action.data );
			_visible=true;
			//_articles = payload.action.data;
			setArticleListVisible(_visible);
	break;
	case 'SHOW_ARTICLE':
			console.log("Show article: ", payload.action.data );
			var userID = payload.action.data;
			_visible=true;
			setArticleVisible(_visible, userID );
			setArticleNo(payload.action.data);
	break;
	case 'SHOW_QUERIES':
			console.log("Show queries: ", payload.data );
			_visible=true;
			setQueries(_visible);
	break;
	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
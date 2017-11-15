var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _state = [];
var _queries = [];

var _oneVisible = false, _twoVisible = false, _settingsVisible=false, _listVisible = false, _queriesVisible=false;
//screen flags
var  _articleVisible = false, _articleNo = 0;

var _loginVisible = true;


var _name="John", _password="password", _admin=false;

// Method to load product data from mock API
function loadArticles(data) {
  _articles = data;
  console.log("AppStore.loadPageData: ", _articles );
}

// Pull personal query data
function loadQueries(data) {
	_queries = data;
	console.log("AppStore.loadQueries ", _queries );
}

// Set visibility functions for each component

function setLoginVisible(visible){
	_loginVisible = visible;
	_oneVisible = visible;
	_twoVisible = false;
	_settingsVisible = false;
	_articleVisible = false;
	_listVisible = false;

}
function setOneVisible(visible) {
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

function setArticleListVisible(visible) {
	console.log('setArticleListVisible: ', visible );
	_listVisible = visible;
	_loginVisible = false;
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

var AppStore = assign({}, EventEmitter.prototype, {
	getArticles: function () {
	    return _articles;
	},
	getQueries: function () {
	    return _queries;
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
	    case 'RECEIVE_DATA':
			console.log("AppStore - Receiving Data: ", action.data );	    
	      	loadArticles(action.data);
		break;
		case 'RECEIVE_QUERIES':
			console.log("AppStore - Loading Query Data: ", action.data );	    
		  	loadQueries(action.data);
	  	break;
// SHOWS
		case 'SHOW_INTERNET':
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
			_visible=true;
			setArticleVisible(_visible);
			setArticleNo(payload.action.data);
		break;
		case 'SHOW_QUERIES':
			console.log("Show queries: ", payload.data );
			_visible=true;
			setQueries(_visible);
		break;
// REMOVES
		case 'REMOVE_INTERNET':
			console.log("OK we have my own personal event. About now I should be changing some state: ", payload );
			_visible=false;
			setOneVisible(_visible);
		break;
		case 'REMOVE_SELECTED':
			console.log("OK we have my own personal event. About now I should be changing some state: ", payload );
			_visible=false;
			setTwoVisible(_visible);
		break;
		case 'REMOVE_SETTINGS':
			console.log("OK we have my own personal event. About now I should be changing some state: ", payload );
			_visible=false;
			setSettingsVisible(_visible);
		break;		
		case 'REMOVE_ARTICLE_LIST':
			console.log("hide article list: ", payload.action.data );
			_visible=false;
			setArticleListVisible(_visible);
		break;
		case 'REMOVE_ARTICLE_LIST':
			console.log("hide article screemn: ", payload.action.data );
			_visible=false;
			setArticleVisible(_visible);
		break;
	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
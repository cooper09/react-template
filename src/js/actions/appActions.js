var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
/* Simple login form has only 
    name 
    password
    admin
*/
var _name = "charile", _password = "texAs01", _admin=false;

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
	 	return "Get State...";
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
        
		case 'LOGIN_SUBMIT':
			console.log("AppStore - Login Submit: ", payload.action.data );
			//_visible=false;
			//setArticleVisible(_visible);
		break;
	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
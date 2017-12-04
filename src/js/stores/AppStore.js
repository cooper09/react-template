var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _users = [];
var _articles = [];
var _queries = [];

var _loginVisible = true;
var _appPageVisible = false

//The real goodies
var _mainScrnVisible = true, _articleScrnVisible=false,_articleListVisible=false,_dashboardVisible=false,
	_newQueryvisible=false,_queryListVisible=false,_queryScrnVisible=false,_settingsVisible=false,
	_infoOneVisible=false,_infoTwoVisible=false

var _name="John", _password="password", _admin=false;
var _userID="000";

var _articleContent = {
	articleNo: "0",
	text : "dummy Text"
};

var _listTitle = "test title";

var _queryContent;

// Method to load product data from mock API
function loadUsers(data) {
  _users = data;
  console.log("AppStore.loadUsers: ", _users );
}

function loadArticles(data) {
	_articles = data;
	console.log("AppStore.loadArticles: ", _articles );
  }

  function loadQueries(data) {
	_queries = data;
	console.log("AppStore.loadQueries: ", _queries );
  }
// Set visibility functions for each component

function setLoginVisible(visible){
	_loginVisible = visible;
	_appPageVisible = false;
	_name="";
	console.log('AppStore.setLoginVisible - appPageVisible: ', _appPageVisible );
}

function setAppVisible(visible, userID, userName) {
  	_appPageVisible = visible;
	_loginVisible = false;
	_userID = userID;
	_name = userName;
}

//Make our components come alive!
function setMainScrn(visible) {
	_mainScrnVisible = visible;
	_articleScrnVisible=false;
	_articleListVisible=false;
	_dashboardVisible=false;
	_newQueryvisible=false;
	_queryListVisible=false;
	_queryScrnVisible=false;
	_settingsVisible=false;
	_infoOneVisible=false;
	_infoTwoVisible=false;
}

function setArticleList(visible, articles, title) {
	console.log("setArticleList: ", visible, " title: ", title  );
	_mainScrnVisible = false;
	_articleScrnVisible=false;
	_articleListVisible=visible;
	_dashboardVisible=false;
	_newQueryvisible=false;
	_queryListVisible=false;
	_queryScrnVisible=false;
	_settingsVisible=false;
	_infoOneVisible=false;
	_infoTwoVisible=false;
	_listTitle = title;
}
function setInfoOne(visible) {
	_mainScrnVisible = false;
	_articleScrnVisible=false;
	_articleListVisible=false;
	_dashboardVisible=false;
	_newQueryvisible=false;
	_queryListVisible=false;
	_queryScrnVisible=false;
	_settingsVisible=false;
	_infoOneVisible=visible;
	_infoTwoVisible=false;
}
function setInfoTwo(visible){
	_mainScrnVisible = false;
	_articleScrnVisible=false;
	_articleListVisible=false;
	_dashboardVisible=false;
	_newQueryvisible=false;
	_queryListVisible=false;
	_queryScrnVisible=false;
	_settingsVisible=false;
	_infoOneVisible=false;
	_infoTwoVisible=visible;
}
function setNewQuery(visible) {
	_mainScrnVisible = false;
	_articleScrnVisible=false;
	_articleListVisible=false;
	_dashboardVisible=false;
	_newQueryvisible=visible;
	_queryListVisible=false;
	_queryScrnVisible=false;
	_settingsVisible=false;
	_infoOneVisible=false;
	_infoTwoVisible=false;
}
function setDashboard(visible) {
	_mainScrnVisible = false;
	_articleScrnVisible=false;
	_articleListVisible=false;
	_dashboardVisible=visible;
	_newQueryvisible=false;
	_queryListVisible=false;
	_queryScrnVisible=false;
	_settingsVisible=false;
	_infoOneVisible=false;
	_infoTwoVisible=false;
}
function setQueryList(visible, articles, title) {
	_mainScrnVisible = false;
	_articleScrnVisible=false;
	_articleListVisible=false;
	_dashboardVisible=false;
	_newQueryvisible=false;
	_queryListVisible=visible;
	_queryScrnVisible=false;
	_settingsVisible=false;
	_infoOneVisible=false;
	_infoTwoVisible=false;
	_articles=articles;
	_listTitle = title;
}
function setArticleScrn(visible, articleNo, text ) {
	_mainScrnVisible = false;
	_articleScrnVisible=visible;
	_articleListVisible=false;
	_dashboardVisible=false;
	_newQueryvisible=false;
	_queryListVisible=false;
	_queryScrnVisible=false;
	_settingsVisible=false;
	_infoOneVisible=false;
	_infoTwoVisible=false;
	_articleContent = { 
		articleNo : articleNo,
		text : text
	};
}
function setQueryScrn(visible) {
	_mainScrnVisible = false;
	_articleScrnVisible=false;
	_articleListVisible=false;
	_dashboardVisible=false;
	_newQueryvisible=false;
	_queryListVisible=false;
	_queryScrnVisible=visible;
	_settingsVisible=false;
	_infoOneVisible=false;
	_infoTwoVisible=false;
};
function setSettings(visible) {
	_mainScrnVisible = false;
	_articleScrnVisible=false;
	_articleListVisible=false;
	_dashboardVisible=false;
	_newQueryvisible=false;
	_queryListVisible=false;
	_queryScrnVisible=false;
	_settingsVisible=visible;
	_infoOneVisible=false;
	_infoTwoVisible=false;
}
//Single Broadcast - Emmitter
var AppStore = assign({}, EventEmitter.prototype, {

	getUsers: function () {
	    return _users;
	},
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
	getAppVisible: function () {
		console.log('AppStore.getAppVisible: ' + _appPageVisible );
		return {
					visible: _appPageVisible,
					userID: _userID,
					userName: _name
		}
	},
	//All My Store GETS
	getMainScrnVisible: function () {
		return _mainScrnVisible;
	},
	getArticleScrnVisible: function () {
	   var _articleScrnObj = {
			visible: _articleScrnVisible,
			articleNo: _articleContent.articleNo,
			article: _articleContent.text
		}
		return  _articleScrnObj;
	},
	getInfoOneVisible: function (){
		return _infoOneVisible;
	},
	getInfoTwoVisible: function (){
		return _infoTwoVisible;
	},
	getDashboardVisible: function (){
		return _dashboardVisible;
	},
	getArticleListVisible: function (){
		console.log('getArticleListVisible: ', _articleListVisible );
		var _articleListObj = {
			visible: _articleListVisible,
			title: "test"
		}
		console.log('getArticleListObj: ', _articleListObj );		
		return _articleListObj;
	},
	getQueryListVisible: function () {
		return _queryListVisible;
	},
	getQueryScrnVisible: function () {
		return _queryScrnVisible;
	},
	getNewQueryVisible: function (){
		return _newQueryvisible;
	},
	getSettingsVisible: function(){
		return _settingsVisible;
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
			console.log("AppStore - Receiving users: ", action.data );	    
	      	loadUsers(action.data);
		break;
		case 'RECEIVE_ARTICLES':
			console.log("AppStore - Receiving articles: ", action.data );	    
			loadArticles(action.data);
		break;
		case 'RECEIVE_QUERIES':
			console.log("AppStore - Receiving queries: ", action.data );	    
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
			  var userID = action.data.userId;
			  var userName = action.data.userName
	      	setAppVisible(_visible, userID, userName );
	 	break;
// where no man has gone before	
		case "SHOW_MAINSCRN":
			_visible = true;
			setMainScrn(_visible);
		break;
		case "SHOW_ARTICLELIST":
			console.log("AppStore.SHOW_ARTICLELIST: ", action.data );
			console.log("AppStore.SHOW_ARTICLELIST TITLE: ", action.title )
			_visible = true;
			_articles = action.data;
			_title = action.title;
			setArticleList(_visible, _articles, _title );
		break;
		case "SHOW_INFOONE":
			_visible = true;
			setInfoOne(_visible);
		break;
		case "SHOW_INFOTWO":
			_visible = true;
			setInfoTwo(_visible);
		break;
		case "SHOW_NEWQUERY":
			_visible = true;
			setNewQuery(_visible);
		break;
		case "SHOW_DASHBOARD":
			_visible = true;
			setDashboard(_visible);
		break;
		case "SHOW_QUERYLIST":
		console.log("AppStore.ShowQueryList: ", action.data );
			_visible = true;
			_articles = action.data;
			_title = " Your Personal Query List ";
			setQueryList(_visible, _articles, _title );
		break;
		case "SHOW_ARTICLESCRN":
			console.log("Show ArticleScrn with data: ", action.data );
			var _no = action.data.articleNo;
			var _text = action.data.text;	
			_visible = true;
			setArticleScrn(_visible, _no, _text );
		break;
		case "SHOW_QUERYSCRN":
			_visible = true;
			setQueryScrn(_visible);
		break;
		case "SHOW_SETTINGS":
			_visible = true;
		setSettings(_visible);
		break;

	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;
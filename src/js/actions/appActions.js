var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ArticleConstants = require('../constants/ArticleConstants');

var AppActions = {
// Receive inital product data
showQueries: function (data) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SHOW_QUERIES,
      data: data
    	})
	},

showSelected: function (data) {
	console.log("AppActions.showSelected: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SHOW_SELECTED,
      data: data
    	})
  },
  
  showSettings: function (data) {
    console.log("AppActions.showSettings: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.SHOW_SETTINGS,
        data: data
        })
    },
  showArticle: function (data) {
    console.log("AppActions.showArticle: ", data );
      AppDispatcher.handleViewAction({
        actionType: ArticleConstants.SHOW_ARTICLE,
        data: data
        })
     },
    showArticleList: function (data) {
      console.log("AppActions.showArticleList: ", data );
        AppDispatcher.handleViewAction({
          actionType: ArticleConstants.SHOW_ARTICLE_LIST,
          data: data
          })
       },
// Removes
removeInternet: function (data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.REMOVE_INTERNET,
    data: data
    })
},
removeSelected: function (data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.REMOVE_SELECTED,
    data: data
    })
},
removeSettings: function (data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.REMOVE_SETTINGS,
    data: data
    })
},
removeArticleList: function (data) {
  console.log("AppActions.removeArticleList: ", data );
    AppDispatcher.handleViewAction({
      actionType: ArticleConstants.REMOVE_ARTICLE_LIST,
      data: data
      })
   },
  removeArticle: function (data) {
    console.log("AppActions.removeArticleList: ", data );
      AppDispatcher.handleViewAction({
        actionType: ArticleConstants.REMOVE_ARTICLE,
        data: data
      })
    },
  loadArticles: function (data) {
	console.log("AppActions.loadArticles: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_DATA,
      data: data
    	})
    },
    loadQueries: function (data) {
    console.log("AppActions.loadQueries: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.RECEIVE_QUERIES,
        data: data
      })
    },
loadUsers: function (data) {
	console.log("AppActions.loadPages: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_USERS,
      data: data
    	})
	},
showLogin: function (data) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SHOW_LOGIN,
      data: data
    	})
	},

showApp: function (data) {
	console.log("AppActions.showApp: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SHOW_APP,
      data: data
    	})
  }
}//end AppActions
module.exports = AppActions;
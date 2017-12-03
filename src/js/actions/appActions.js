var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
// Receive inital product data
loadTestQueries: function (data) {
	console.log("AppActions.loadTestQueries: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_TEST_QUERIES,
      data: data
    	})
	},
loadUsers: function (data) {
	console.log("AppActions.loadUsers: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_USERS,
      data: data
    	})
  },
loadArticles: function (data) {
  console.log("AppActions.loadArticles: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_ARTICLES,
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
  },
// Let's go, Joe!!
showMainScrn: function (data) {
	console.log("AppActions.showMainScrn: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SHOW_MAINSCRN,
      data: data
    	})
  },
showArticleList: function (data, title) {
    console.log("AppActions.showArticleList: ", data," title: ", title  );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.SHOW_ARTICLELIST,
        data: data,
        title: title
        })
    },
showArticleScrn: function (data) {
      console.log("AppActions.showArticleScrn: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.SHOW_ARTICLESCRN,
          data: data
          })
      },
showInfoOne: function (data) {
    console.log("AppActions.showInfoOne: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.SHOW_INFOONE,
        data: data
        })
    },
showInfoTwo: function (data) {
  console.log("AppActions.showInfoTwo: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.SHOW_INFOTWO,
          data: data
          })
      },
showNewQuery: function (data) {
        console.log("AppActions.showMainScrn: ", data );
          AppDispatcher.handleViewAction({
            actionType: AppConstants.SHOW_NEWQUERY,
            data: data
            })
        },
showDashboard: function (data) {
          console.log("AppActions.showDashboard: ", data );
            AppDispatcher.handleViewAction({
              actionType: AppConstants.SHOW_DASHBOARD,
              data: data
              })
          },
showQueryList: function (data) {
  console.log("AppActions.showQueryList: ", data );
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SHOW_QUERYLIST,
    data: data
    })
},
showQueryScrn: function (data) {
  console.log("AppActions.showQueryScrn: ", data );
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SHOW_QUERYSCRN,
    data: data
    })
},
showSettings: function (data) {
  console.log("AppActions.showSettings: ", data );
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SHOW_SETTINGS,
    data: data
    })
}
}//end AppActions
module.exports = AppActions;
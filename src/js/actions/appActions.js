var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
// Receive inital product data

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
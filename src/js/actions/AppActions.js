var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {

showContent: function (data) {
	console.log("AppActions.showContent: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CONTENT_VISIBLE,
      data: data
    	})
	},
closeMe: function (data) {
	console.log("AppActions.closeMe: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CLOSE_WINDOW,
      data: data
    	})
	}
    
}//end AppActions
module.exports = AppActions;
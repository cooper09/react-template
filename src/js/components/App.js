var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

//cooper s - add subcomponents here

var LoginForm = require('./LoginForm.js');
var MyApp = require('./MyApp.js');

function getAppState(){
	console.log("App.getAppState: ");
	return {
		app: AppStore.getState(),
		users: AppStore.getUsers(),
		articles: AppStore.getArticles(),
		queries: AppStore.getQueries(),
		loginVisible: AppStore.getLoginVisible(),
		appVisible: AppStore.getAppVisible(),
		// The cool stuff
		mainScrnVisible: AppStore.getMainScrnVisible(),
		articleScrnVisible: AppStore.getArticleScrnVisible(),
		infoOneVisible: AppStore.getInfoOneVisible(),
		infoTwoVisible: AppStore.getInfoTwoVisible(),
		dashboardVisible: AppStore.getDashboardVisible(),
		articleListVisible: AppStore.getArticleListVisible(),
		queryListVisible: AppStore.getQueryListVisible(),
		newQueryVisible: AppStore.getNewQueryVisible(),
		settingsVisible: AppStore.getSettingsVisible(),
	}
}

var App = React.createClass({

	getInitialState: function(){
		return getAppState();

	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},
	render: function(){
		console.log("App - Current State state: ", this.state.app );
		console.log("App - Current list of users: ", this.state.users );
		console.log("App - Current list of articles: ", this.state.articles );
		console.log("App - Current list of queries: ", this.state.queries );

		console.log("App - Current UserID: ", this.state.appVisible.userID );
		console.log("App - Curren User Name: ", this.state.appVisible.userName)
		console.log("App - Current Article on Queue: ", this.state.articleScrnVisible );
		console.log("App - Current Article List Title: ", this.state.articleListVisible.title );
		return(
			<div>
				<LoginForm  visible={this.state.loginVisible} name={this.state.app[0]} password={this.state.app[1]} admin={this.state.app[2]} users={this.state.users}/>
				<MyApp visible={this.state.appVisible.visible} userID={this.state.appVisible.userID} name={this.state.appVisible.userName}
					users = {this.state.users}
					articles={this.state.articles}
					queries={this.state.queries}
					mainScrnVisible={this.state.mainScrnVisible}
					articleListVisible={this.state.articleListVisible.visible}
					articleListTitle={this.state.articleListVisible.title}
					infoOneVisible={this.state.infoOneVisible}
					infoTwoVisible={this.state.infoTwoVisible}
					newQueryVisible={this.state.newQueryVisible}
					dashboardVisible={this.state.dashboardVisible}
					queryListVisible={this.state.queryListVisible}
					articleScrnVisible={this.state.articleScrnVisible.visible}
					articleNo={this.state.articleScrnVisible.articleNo}
					article={this.state.articleScrnVisible.article}
					settingsVisible={this.state.settingsVisible}
				  />
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		console.log("A change has occured....")
		this.setState(getAppState());
	}
});

module.exports = App;
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
		data: AppStore.getArticles(),
		queries: AppStore.getQueries(),
		users: AppStore.getUsers(),
		loginVisible: AppStore.getLoginVisible(),
		appVisible: AppStore.getAppVisible(),
		oneVisible: AppStore.getOneVisible(),
		twoVisible: AppStore.getTwoVisible(),
		settingsVisible: AppStore.getSettingsVisible(),
		listVisible: AppStore.getListVisible(),
		articleVisible: AppStore.getArticleVisible(),
		articleNo: AppStore.getArticleNo()
	}
}

var App = React.createClass({

	getInitialState: function(){
		return getAppState();

	},
	componentWillMount : function () {
		
			console.log("component will mount");
			this.state.data = {
				"txt": [
					"loading article"
				],
				"src":[
					"loading source"
				],
				"query": "loading query"
			} //end default article data
			
			this.state.users = [{
				"name": "John Doe",
				"password":"Doe"
			}] //end default query data  

		},	
	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},
	render: function(){
		console.log("Current State state: ", this.state.app );
		console.log("Current list of users: ", this.state.users );

		console.log("Current UserID: ", this.state.appVisible  );
		console.log("App ArticleList state: ", this.state.listVisible);
		console.log("App QueryList state: ", this.state.oneVisible);
		return(
			<div>
				<LoginForm  visible={this.state.loginVisible} name={this.state.app[0]} password={this.state.app[1]} admin={this.state.app[2]} users={this.state.users}/>
				<MyApp  visible={this.state.appVisible.visible} userID={this.state.appVisible.userID} data={this.state.data} queries={this.state.queries} 
					 listVisible={this.state.listVisible} queriesVisible={this.state.oneVisible} articleVisible={this.state.articleVisible} />
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
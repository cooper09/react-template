var React = require('react');
var AppAPI = require('../utils/appAPI.js');
var AppActions = require('../actions/AppActions');

//start off with as many components as you think you need. In this case, I need 10
//Components
var MainScrn = require('./MainScrn.js');
var ArticleList= require('./ArticleList.js');
var InfoOne = require('./InfoOne.js');
var InfoTwo = require('./InfoTwo.js');
var NewQuery = require('./NewQuery.js');
var Dashboard = require('./Dashboard.js');
var QueryList = require('./QueryList.js');
var ArticleScrn = require('./ArticleScrn.js');
var Settings = require('./Settings.js');
//
// Other Goodies...


var MyApp = React.createClass({
	
	
	getInitialState: function() {
		return { 
				};
	  },
	showDashboard: function() {
		AppActions.showDashboard("Show Dashboard");
	},
	showNewQuery: function() {
		AppActions.showNewQuery("Show Queries");
	},
	showSettings: function() {
		AppActions.showSettings("Show Settings");
	},
    logout() {
        AppActions.showLogin();
	},
	
	render: function() {
		 if (!this.props.visible) {
		 	console.log("MyApp Form is off");
          return false; 
	} 
	
		console.log('MyApp - current top25 Articles: ',  this.props.articles );
		console.log('MyApp - current article: ',  this.props.article);

		var title = this.props.articleListTitle;
		var url = this.props.articles.src[this.props.articleNo];
		console.log("MyApp - current article url: ", url );

	return (
			<div>
				<h1>mPoint HeadLiner</h1>
                 User: {this.props.userID}
					<p> {this.props.name}, you have been officially authorized</p>
				<div className="navBar">
					<span className="navBtn" onClick={this.logout}><img src='img/error.svg'/></span>
					<span className="navBtn" onClick={this.showSettings}><img src='img/settings.svg'/></span>
					<span className="navBtn" onClick={this.showNewQuery}><img src='img/network.svg'/></span>
					<span className="navBtn" onClick={this.showDashboard}><img src='img/magnifying-glass.svg'/></span>
				</div>
				<MainScrn visible={this.props.mainScrnVisible} articles={this.props.articles }/>
				<ArticleList visible={this.props.articleListVisible} articles={this.props.articles} title={title}/>
				<InfoOne visible={this.props.infoOneVisible} />
				<InfoTwo visible={this.props.infoTwoVisible} />
				<NewQuery visible={this.props.newQueryVisible} />
				<Dashboard visible={this.props.dashboardVisible} />
				<QueryList visible={this.props.queryListVisible} queries={this.props.queries } />
				<ArticleScrn visible={this.props.articleScrnVisible} articleNo={this.props.articleNo}
					article={this.props.article }
					query={this.props.articles.query} 
					url={url}
					articles={this.props.articles}
					/>
				<Settings visible={this.props.settingsVisible} />
				<br/><br/>
				<button onClick={this.logout}>Log Out</button>
			</div>
			);
	}//end render
});//end MyApp

module.exports = MyApp;
var React = require('react');
var AppAPI = require('../utils/appAPI.js');

var AppActions = require('../actions/AppActions');

//For AutoContents lets concentrate on the full focus
var QueryList = require('./QueryList.js');
var EnterQuery = require('./EnterQuery.js');
var ArticleList = require('./ArticleList.js');
var Settings = require('./Settings.js');
var ArticleScrn = require('./screens/ArticleScrn.js');

var MyApp = React.createClass({

	getInitialState: function() {
		return { 
				};
	  },
    logout() {
        AppActions.showLogin();
    },
    handleBtnClick: function() {
        console.log('APP - Handle my button click: ');
        AppActions.showQueries('Button One click');
      //  AppActions.removeArticle('remove Article List');
      },
      handleBtnClick2: function() {
        console.log('APP - Handle my button click: ');
        AppActions.showSelected('Button Two click');
      },
      handleBtnClick3: function() {
          console.log('APP - Handle my button click: ');
          AppActions.showSettings('Button Settings click');
        },
	render: function() {
		 if (!this.props.visible) {
		 	console.log("MyApp Form is off");
          return false; 
        } // end if visible
        
    var listArticles = this.props.data;
    var listQueries = this.props.queries;
    
    console.log("MyApp.listArticles: ", listArticles );
    console.log("MyApp.listQueries: ", listQueries );

	return (
			<div>
                <h1>mPoint AutoContent Manager </h1>
                 User: {this.props.userID}
					<p> You have been officially authorized</p>
				<span className="leftPanel" >
				 	<button onClick={this.handleBtnClick} className="btn">My Queries</button>
				 	<button onClick={this.handleBtnClick2} className="btn">Enter New Query</button>
					<br/><br/>
					<br/><br/>
					<button onClick={this.handleBtnClick3} className="btn">Settings</button>
				</span>
				<span className="rightPanel" >
					<div className="listArticles">
						<ArticleList visible={true} data={listArticles}/>
					</div>
					<br/><br/>
					<QueryList visible={true} data={listQueries}/>
					<EnterQuery  visible={this.state.twoVisible} data={this.state.data }/>
					<Settings  visible={this.state.settingsVisible} data={this.state.data} value={"test"}/>
					<ArticleScrn visible={this.state.articleVisible} data={this.state.data} article={this.state.articleNo} text={this.state.article} />
				</span>

            <br/><br/>
				<button onClick={this.logout}>Log Out</button>
			</div>
			);
	}//end render
});//end MyApp

module.exports = MyApp;
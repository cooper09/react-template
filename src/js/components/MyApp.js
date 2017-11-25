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
    console.log('MyApp - ArticleList visible list state - props: ' + this.props.listVisible );
    console.log('MyApp - ArticleList visible queries state: ' + this.props.queriesVisible );
    var listArticles = this.props.data;
    var listQueries = this.props.queries;
    
    console.log("MyApp.listArticles: ", listArticles );
	console.log("MyApp.listQueries: ", listQueries );
	console.log("MyApp article Number: "+ this.props.articleNo);

	return (
			<div>
                <h1>mPoint AutoContent Manager 1</h1>
                 User: {this.props.userID}
					<p> You have been officially authorized</p>
				<span className="leftPanel" >
				 	<button onClick={this.handleBtnClick} className="btn">My Queries</button>
				 	<button onClick={this.handleBtnClick2} className="btn">Enter New Query</button>
					<br/><br/>
					<br/><br/>
					<button onClick={this.handleBtnClick3} className="btn">Settings</button>
                    <button onClick={this.logout} className="btn">Log Out</button>
				</span>
				<span className="rightPanel" >
					<div className="listArticles">
						<ArticleList visible={this.props.listVisible } data={listArticles}/>
					</div>
					<br/><br/>
					<QueryList visible={this.props.queriesVisible} data={listQueries}/>
					<EnterQuery visible={this.props.twoVisible} data={this.state.data }/>
					<Settings visible={this.props.settingsVisible} data={this.state.data} value={"test"}/>
					<ArticleScrn visible={this.props.articleVisible} data={this.props.data} articleNo={this.props.articleNo} text={this.props.article} />
				</span>

			</div>
			);
	}//end render
});//end MyApp

module.exports = MyApp;
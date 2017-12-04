var React = require('react');

var AppActions = require('../actions/AppActions');
var ArticleLink = require('./ArticleLink.js');

var ArticleList = React.createClass({

	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("ArticleList is off");
          return false;
        }
		console.log('AriticleList - our current list of articles: ', this.props.articles );
		var articles = [];
		articles = this.props.articles;
		var num = 0;

		return (
			<div>
				
				<div className='mainScrn center option animated fadeIn'>
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
					<div>
						<center><b><i>{this.props.title}: "{articles.query}"</i></b></center>
						<br/><br/>
						<div className='articles'>
							<ArticleLink num={num} key={articles.query} text={articles.txt} url={articles.src} className="article"/> 
						</div>
					</div>
				</div>
			</div>
			);
	}//end render
});//end ArticleList

module.exports = ArticleList;
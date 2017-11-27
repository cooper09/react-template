var React = require('react');
var AppActions = require('../../actions/AppActions');

var RightScrn = require('./RightScrn.js');
var MidScrn = require('./MidScrn.js');
var LeftScrn = require('./LeftScrn.js');

var ArticleScrn = React.createClass({
	handleBtnClick: function() {
		AppActions.showArticleList(this.props.userID);
		//AppActions.showArticleList();
		//AppActions.removeArticle();
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("ArticleScrn is off");
          return false;
        }
	console.log('ArticleScrn - props userID: ', this.props.userID );
	console.log('ArticleScrn - props data: ', this.props.data );

		console.log('ArticleScrn - article to show: ', this.props.articleNo );
		console.log("ArticleScrn - And this is our data: ", this.props.data.txt[this.props.articleNo]);
		console.log("Article Title: ", this.props.data.query );
		console.log('Article URL: ', this.props.data.src[this.props.articleNo] );

		var title = this.props.data.query;
		var image = "img/articleOne.jpg";

		return (
			<div>
				<p>ArticleScrn.js</p>
				<div className='mainScrn center option animated fadeIn'>
					<button onClick={this.handleBtnClick} className="closeBtn">Return to Articles</button>
					<h1>{title}</h1>

					<LeftScrn visible={true} title="test" text={this.props.data.txt[this.props.articleNo]}/>
					<MidScrn visible={true} title="test" text={this.props.data.src[this.props.articleNo]} />
					<RightScrn visible={true} title="text" image={image} />
					
				</div>
			</div>
			);
	}//end render
});//end Articles

module.exports = ArticleScrn;
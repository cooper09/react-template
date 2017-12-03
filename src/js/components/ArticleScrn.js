var React = require('react');
var AppActions = require('../actions/AppActions');

var ArticleScrn = React.createClass({
	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("ArticleScrn is off");
          return false;
        }

		console.log("ArticleScrn - our article: ", this.props.article );
		var articleNo = this.props.articleNo;
		var article = this.props.article;

		return (
			<div>
				<div className='mainScrn center option animated zoomInUp'>ArticleScrn
					<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
					<div>
						Selected article: {articleNo}<br/>
						{article}
					</div>
				</div>
			</div>
			);
	}//end render
});//end ArticleScrn

module.exports = ArticleScrn;
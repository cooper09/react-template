var React = require('react');

var AppActions = require('../actions/AppActions');

var ArticleList = React.createClass({

	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("ArticleList is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>ArticleList
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
				</div>
			</div>
			);
	}//end render
});//end ArticleList

module.exports = ArticleList;
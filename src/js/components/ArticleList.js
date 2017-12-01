var React = require('react');

var ArticleList = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("ArticleList is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>ArticleList
				</div>
			</div>
			);
	}//end render
});//end ArticleList

module.exports = ArticleList;
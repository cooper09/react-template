var React = require('react');

var ArticleScrn = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("ArticleScrn is off");
          return false;
        }

		return (
			<div>
				<div className='mainScrn center option animated zoomInUp'>ArticleScrn
				</div>
			</div>
			);
	}//end render
});//end ArticleScrn

module.exports = ArticleScrn;
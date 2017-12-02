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
					<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
				</div>
			</div>
			);
	}//end render
});//end ArticleScrn

module.exports = ArticleScrn;
var React = require('react');

var InfoOne = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("InfoOne is off");
          return false;
        }
		return (
			<div>
				<div className='mainScrn center option animated zoomInUp'>InfoOne
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
				</div>
			</div>
			);
	}//end render
});//end InfoOne

module.exports = InfoOne;
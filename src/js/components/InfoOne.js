var React = require('react');

var AppActions = require('../actions/AppActions');

var InfoOne = React.createClass({

	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	partTwo: function() {
		AppActions.showInfoTwo('Show InfoTwo Screen');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("InfoOne is off");
          return false;
        }
		return (
			<div>
				<div className='mainScrn center option animated zoomInUp'>InfoOne.js
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
					<div>	
						<h3>User Instructions Go Here...</h3>
						<button onClick={this.partTwo} className="homeBtn">Next</button>
					</div>
				</div>
			</div>
			);
	}//end render
});//end InfoOne

module.exports = InfoOne;
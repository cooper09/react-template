var React = require('react');

var AppActions = require('../actions/AppActions');

var InfoOne = React.createClass({

	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},

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
var React = require('react');

var AppActions = require('../actions/AppActions');

var Settings = React.createClass({
	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("Settings is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated fadeIn'>Settings
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
				</div>
			</div>
			);
	}//end render
});//end Settings

module.exports = Settings;
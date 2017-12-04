var React = require('react');

var AppActions = require('../actions/AppActions');

var Dashboard = React.createClass({
	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("Dashboard is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated fadeIn'>Dashboard
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
				</div>
			</div>
			);
	}//end render
});//end Dashboard

module.exports = Dashboard;
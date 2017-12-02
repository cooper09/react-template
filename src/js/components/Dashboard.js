var React = require('react');

var Dashboard = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("Dashboard is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>Dashboard
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
				</div>
			</div>
			);
	}//end render
});//end Dashboard

module.exports = Dashboard;
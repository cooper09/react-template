var React = require('react');

var Settings = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("Settings is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>Settings
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
				</div>
			</div>
			);
	}//end render
});//end Settings

module.exports = Settings;
var React = require('react');

var AppActions = require('../actions/AppActions');

var QueryList = React.createClass({

	
	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},

	render: function() {
		 if (!this.props.visible) {
		 	console.log("QueryList is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>QueryList
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
				</div>
			</div>
			);
	}//end render
});//end QueryList

module.exports = QueryList;
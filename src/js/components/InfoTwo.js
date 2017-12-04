var React = require('react');

var AppActions = require('../actions/AppActions');

var InfoTwo = React.createClass({

	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	handleNewQuery: function() {
		AppActions.showNewQuery('Show New Query Screen');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("InfoTwo is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated fadeIn'>InfoTwo
					<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
					<br/>
					More Instructions if Necessary...
					<br/><br/>
					<button onClick={this.handleNewQuery} className="homeBtn">New Query</button>
				</div>
			</div>
			);
	}//end render
});//end InfoTwo

module.exports = InfoTwo;
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

		console.log('QueryList - queries: ', this.props.queries );
		var queryArr = [];
		var len = this.props.queries.length;
		queryArr = this.props.queries;

		var num=0;

		var style = {
			padding: '0.25em',
			cursor: 'pointer', 
			margin: '1em'
		}
		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>QueryList
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
					<div>
						
					</div>
				</div>
			</div>
			);
	}//end render
});//end QueryList

module.exports = QueryList;
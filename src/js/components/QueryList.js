var React = require('react');

var QueryList = React.createClass({

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
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
				</div>
			</div>
			);
	}//end render
});//end QueryList

module.exports = QueryList;
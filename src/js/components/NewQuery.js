var React = require('react');

var NewQuery = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("NewQuery is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>NewQuery
				</div>
			</div>
			);
	}//end render
});//end NewQuery

module.exports = NewQuery;
var React = require('react');

var ComponentOne = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>ComponentOne
				</div>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;
var React = require('react');

var MainScrn = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>MainScrn
				</div>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = MainScrn;
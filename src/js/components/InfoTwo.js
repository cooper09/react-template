var React = require('react');

var InfoTwo = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("InfoTwo is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>InfoTwo
				</div>
			</div>
			);
	}//end render
});//end InfoTwo

module.exports = InfoTwo;
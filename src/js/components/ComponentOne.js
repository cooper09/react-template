var React = require('react');

var ComponentOne = React.createClass({

	render: function() {
	/*	 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false; 
	} */
		
		return (
			<div>
				<h1> Simple functional Component</h1>

			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;
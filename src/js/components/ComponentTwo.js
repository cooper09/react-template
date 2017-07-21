var React = require('react');

var ComponentTwo = React.createClass({

	doSomething: function (){
		console.log("Do Something!!!");
	},
	render: function() {
	/*	 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false; 
	} */

    console.log("ComponentTwo text: ", this.props.text );
		
		return (
			<div className = "item">
				<h3> Simple List Item</h3>
				{this.props.text}
			</div>
			);
	}//end render
});//end ComponentTwo

module.exports = ComponentTwo;
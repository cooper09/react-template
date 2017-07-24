var React = require('react');

var ComponentTwo = React.createClass({

	componentDidMount: function () {
		console.log("component mounted...");
		var node = this.getDOMNode();
		console.log('our Dom node: ', node );
		//TweenMax.to(node, 5, {x: 200})
		// container click handler
		console.log('our container click handler: ', this.props);
	},

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
			<div className = "item" onClick={this.doSomething}>
				<h3 className = "header-font"> Simple List Item</h3>
				{this.props.text}
			</div>
			);
	}//end render
});//end ComponentTwo

module.exports = ComponentTwo;
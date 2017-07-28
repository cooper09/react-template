var React = require('react');

var Gsap = require('gsap');
var TweenMax = Gsap.TweenMax;

var ComponentTwo = React.createClass({

	componentDidMount: function () {
		console.log("component mounted...");
		var node = this.getDOMNode();
		console.log('our Dom node: ', node );
		//TweenMax.to(node, 5, {x: 200})
		// container click handler
		console.log('our container click handler: ', this.props);
		//manipulate item

		//TweenMax.to(e.target)
	},

	doSomething: function () {
		console.log("Do Something!!!");
		//console.log('our click target: ', e.target );
		TweenMax(this, 1.5, {x: 100});
	},
	render: function() {

    console.log("ComponentTwo text: ", this.props.text );
		
		return (
			<div className = "item" onClick={this.props.clickHandler}>
				<h3 className = "header-font"> Simple List Item</h3>
				{this.props.text}
				<div className = "content">Content Goes here...</div>
			</div>
			)
	}//end render

});//end ComponentTwo

module.exports = ComponentTwo;
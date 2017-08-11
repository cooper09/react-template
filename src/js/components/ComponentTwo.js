var React = require('react');

var Gsap = require('gsap');
var TweenMax = Gsap.TweenMax;

var ComponentTwo = React.createClass({

	componentDidMount: function () {
		console.log("component mounted: ", this.props.num );
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

	var contentNum = "content" + this.props.num;
	console.log("current Content No: ", contentNum );

	// because each content item is created on the fly, each one's class name
	// is unique. To handle this a "universal styling is applied here..."
	var style = {
		background: '#ccc',
		padding: '0.5em',
		margin: '0.5em'
	}

	var open = false;

		return (
			<div className = "item" onClick={ handleItemClick.bind(this)}>
				<h3 className = "header-font"> Simple List Item</h3>
				{this.props.text}
				<div className = {contentNum} style={style}>Content Goes here...</div>
			</div>
			)

			function handleItemClick (){
			//cooper s - use jquery to open/close each items content....

				var myItem = $('.content'+ this.props.num );
				
				if ( open === false ) {
					TweenMax.to( myItem, 1, { height: 100 });
					open = true;
				} else {
					TweenMax.to( myItem, 1, { height: 35 });
					open = false;
				}

			}
	}//end render


});//end ComponentTwo

module.exports = ComponentTwo;
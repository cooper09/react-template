var React = require('react');

var ComponentTwo = require('./ComponentTwo.js');

var ComponentOne = React.createClass({
	

	doSomething: function (){
		console.log("Do Something!!!");
	},
	render: function() {
	/*	 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false; 
	} */

	console.log("list of items: ", this.props.items);
	var items = this.props.items;
	console.log("number of items: "+ items.length );
		
		return (
			<div>
				<h1> Simple ListView</h1>
				{ items.map(function(items) {
					console.log("Are we in business!\n\n")
					return <ComponentTwo key={items.id} text={items.text}/>
				}) }
				
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;
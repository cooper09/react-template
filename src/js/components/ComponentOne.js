var React = require('react');

var ComponentTwo = require('./ComponentTwo.js');

var ComponentOne = React.createClass({
	

	handleClick: function (){
		console.log("Component One's Clickhandler");
	},
	render: function() {

		console.log("list of items: ", this.props.items);
		var items = this.props.items;
		console.log("number of items: "+ items.length );
		
		return (
			<div>
				<h1 className="header-font"> Simple ListView</h1>
				{ items.map(function(items) {
					console.log("Are we in business!\n\n")
					return <ComponentTwo key={items.id} text={items.text} clickHandler={ this.handleClick } />
				}) }
				
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;
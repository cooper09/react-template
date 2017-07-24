var React = require('react');

var ComponentTwo = require('./ComponentTwo.js');

var ComponentOne = React.createClass({

	render: function() {

		console.log("list of items: ", this.props.items);
		var items = this.props.items;
		console.log("number of items: "+ items.length );
		
		return (
			<div>
				<h1 className="header-font"> Simple ListView</h1>
				{ items.map(function(items) {
					console.log("Are we in business!\n\n")
					return <ComponentTwo key={items.id} text={items.text} clickHandler={ handleItemClick.bind(this) } className="item"/>
				}) }
				
			</div>
			);

			function handleItemClick (){
				var myItem = document.getElementsByClassName('item');

				console.log("Component One's Clickhandler: ", myItem[0].style.background='aqua'  );

				console.log('The magic element: ', myItem[0]);
				TweenMax.to(myItem[0], 1, {scaleY:1.5});
			}
	}//end render
});//end ComponentOne

module.exports = ComponentOne;
var React = require('react');

var ComponentTwo = require('./ComponentTwo.js');

var ComponentOne = React.createClass({

	render: function() {

		console.log(" ComponentOne - list of items: ", this.props.items);
		var items = this.props.items;
		var num = 0;
		
		return (
			<div>
				<h1 className="header-font">TyrionHT Products Sold</h1>
				{ items.map(function(items) {
					console.log("ComponentOne - Item no: ", num );
					++num;
					return <ComponentTwo num={num} key={items.id} prodName={items.item} desc={items.description} time={items.timestamp}  clickHandler={ handleItemClick.bind(this) } className="item"/>
				}) }
				
			</div>
			);

			function handleItemClick (){
				var myItem = document.getElementsByClassName('item');

			/*	console.log("Component One's Clickhandler: ", myItem[0].style.background='aqua'  );

				console.log('The magic element: ', myItem[0]);
				TweenMax.to( myItem[0], 1, { opacity:0, scale:0.5 });
				//TweenMax.staggerTo(myItem[0], 1, {y:0, opacity:0, scale:0.5}, 0.1); */

			}
	}//end render
});//end ComponentOne

module.exports = ComponentOne;
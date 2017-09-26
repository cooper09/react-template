var React = require('react');

var ComponentTwo = require('./ComponentTwo.js');

var ComponentOne = React.createClass({

	render: function() {

		console.log("list of items: ", this.props.items);
		var items = this.props.items;
		var num = 0;
		
		return (
			<div>
				<h1 className="header-font">TyrionHT Product Page</h1>
				<div className="intro">Tyrion products are here to give you a step up in the tech race by providing access to easy to use tools and technology to make your life better. Following are some example products for business, finance, and health that will allow anyone to hit the ground running. Take your pick!</div>
				<br/><br/>
				{ items.map(function(items) {
					console.log("Item no: ", num );
					++num;
					return <ComponentTwo num={num} key={items.id} prodName={items.prodName} text={items.text} thumb={items.thumb} desc={items.desc} clickHandler={ handleItemClick.bind(this) } className="item"/>
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
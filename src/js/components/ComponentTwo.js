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
	var thumbNum = "thumbimg" + this.props.num;
	
	TweenMax.to( thumbNum, 1, { display: "none"  });

	console.log("current Content No: ", contentNum );

	// because each content item is created on the fly, each one's class name
	// is unique. To handle this a "universal styling is applied here..."
	var style = {
		padding: '0.5em',
		margin: '0.5em'
	}

	var open = false;

		return (
			<div className = "item">
				<h3 className = "header-font">{this.props.text}</h3>
				{this.props.prodName}
				<div className = {contentNum} style={style} onClick={ handleItemClick.bind(this)}>
					<img src={this.props.thumb}  className={thumbNum}/>
					<div className="desc">{this.props.desc}</div>
					<div className = "buyBtn" onClick={ buyItem.bind(this)}><center>Buy Me</center></div>
				</div>
			</div>
			)

			function handleItemClick (){
			//cooper s - use jquery to open/close each items content....
				console.log("Here we go...");
			/*	var myItem = $('.content'+ this.props.num );
				var myThumb = $('.thumbimg' + this.props.num );
				
				if ( open === false ) {
					TweenMax.to( myItem, 1, { height: 100 });
					TweenMax.to( myThumb, 1, { opacity: 1 });
					open = true;
				} else {
					TweenMax.to( myItem, 1, { height: 35 });
					TweenMax.to( myThumb, 0.3, { opacity: 0 });
					open = false;
				} */
			}// end handleClick

			function buyItem() {
				console.log("We have a buyer!!!");
				alert("Bring it on!!");
			}
	}//end render


});//end ComponentTwo

module.exports = ComponentTwo;
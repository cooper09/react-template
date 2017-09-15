var React = require('react');

var Gsap = require('gsap');
var TweenMax = Gsap.TweenMax;

//Tyrion API
var AppAPI = require('../utils/tyrionAPI');

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
				<div className= "productName">{this.props.prodName}</div>
				<div className = {contentNum} style={style} onClick={ handleItemClick.bind(this)}>
					<img src={this.props.thumb}  className={thumbNum}/>
					<div className="desc">{this.props.desc}</div>
					<div className = "buyBtn" onClick={ buyItem.bind(this)}><center>Buy Me</center></div>
				</div>
			</div>
			)

			function handleItemClick (){
			//cooper s - use jquery to open/close each items content....
				console.log("item handleClick...");
			}// end handleClick


			function PostInfo(saleData) 
			{
				console.log('WriteInfo is Live!! Add data to DB: ', saleData );
				AppAPI.postData(saleData);

				var url;

				switch(saleData.item) {
					case "How to Buy Cars at Auctions":
					   url = "http://www.theauctionbook.com/?hop=krockny";
					   break;
					case "Bitcoin is the Future":
					   url = "http://www.bitcoinmiracleguide.com/?hop=krockny";
					   break;  
					case "Wake Up Lean":
					   url = "http://digijunction.com/health/krockny/catalog/18";
					   break; 
				}
			
				console.log('Open new window: ', url );
				var win = window.open(url, '_blank');
				win.focus();
			}

			function buyItem() {
				console.log("We have a buyer for: ", this.props.prodName );

				console.log("add custom FB conversion")
				// cooper s - add facebook conversion code
				fbq('trackCustom', 'InterestedBuyer', {
					value: 1.00,
					currency: 'USD'
				});  
				
				//capture our Google conversion here...
				console.log("Log Google Click Event");
				ga('send', 'event', {
					eventCategory: 'Tyrion Buy Me Link',
					eventAction: 'click',
					eventLabel: 'TyrionHT Buy Button'
				  }); 

				  //log this bad boy...

		var timeStamp = Date();

		var saleData = {
			"item":this.props.prodName,
			"description":this.props.desc,
			"timestamp": timeStamp
		}

		PostInfo(saleData);
				
		}//end buy item
	}//end render

});//end ComponentTwo

module.exports = ComponentTwo;
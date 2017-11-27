var React = require('react');
var AppActions = require('../actions/AppActions');

var ArticleLink = React.createClass({

	componentDidMount: function () {
		console.log("component mounted: ", this.props.num );
		//var node = this.getDOMNode();
	},
	render: function() {

	var num = "content" + this.props.num;
	console.log("current Content No: ", num );

	console.log("ArticleLink - articles: ", this.props.text );
	var len = this.props.text.length;
	//console.log("length: ", len );

	var textArr = [];
	
	//this.props.url;
	for (var i=1; i < len ; i++ ) {
		//textArr.push(this.props.text[i]);
		textArr[i] = this.props.text[i];
		//console.log("urlArr: ", textArr[i] );
	}  

	//console.log("textArr: ", textArr );

	// because each content item is created on the fly, each one's class name
	// is unique. To handle this a "universal styling is applied here..."
	var style = {
		padding: '0.25em',
		cursor: 'pointer', 
		margin: '1em'
	}

	var open = false;
	var num = 0;
	var test = "hello";

		return (
			
			<div className = "articleLink">
				{

					textArr.map((value, num) => {
							return (
								<div key={num} style={style} onClick={handleItemClick.bind(this, num )} >{value}</div>
							);
						})
				 } 
			</div>
			)

			function handleItemClick (num, textArr ){
				//cooper s - use jquery to open/close each items content....

				//console.log("Article clicked: ", num )
				
				console.log("Article Clicked 2: "+ num);
					//alert("Article Clicked: " + e.target.className + " contentNum: " + this.props.num );
					
					var articleNo = num;

					AppActions.showSelected(num);
					//AppActions.showArticle(num);
					//AppActions.removeArticleList();
			}
	}//end render


});//end ComponentTwo

module.exports = ArticleLink;
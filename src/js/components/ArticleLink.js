var React = require('react');
var AppActions = require('../actions/AppActions');

var ArticleLink = React.createClass({

	componentDidMount: function () {
		console.log("component mounted: ", this.props.num );
	},
	render: function() {

	var num = "content" + this.props.num;
	console.log("current Content No: ", num );
	var len = this.props.text.length;

	var textArr = [];

	for (var i=1; i < len ; i++ ) {
		textArr[i] = this.props.text[i];
	}  

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
								<div key={num} style={style} onClick={handleItemClick.bind(this, num, value )} >{value}</div>
							);
						})
				 } 
			</div>
			)

			function handleItemClick (num, textArr ){
				//cooper s - use jquery to open/close each items content....
                console.log("Article Clicked 2: "+ num);
                console.log("Article Content: ", textArr );
					//alert("Article Clicked: " + e.target.className + " contentNum: " + this.props.num );
                    
                    var articleObj = {
                        articleNo : num,
                        text : textArr
                    }
					var articleNo = num;

					AppActions.showArticleScrn(articleObj);
			}
	}//end render


});//end ComponentTwo

module.exports = ArticleLink;
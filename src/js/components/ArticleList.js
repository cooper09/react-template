var React = require('react');

var ArticleLink = require('./ArticleLink.js');

var ArticleList = React.createClass({

	render: function() {
		
		console.log("ArticleList - our data: ", this.props.data);

		if (!this.props.visible) {
		 	console.log("ArticleList is off");
          return false;
        }

		var articles = [];
		articles = this.props.data;
		var num = 0;

		var test = "hello";

		return (
			<div className='mainScrn center option animated fadeIn'>
				<p>ArticleList.js</p>
				<div className='queryTitle'><b><i>Top 25 Article Results for Today's Query: "{articles.query}"</i></b>
				<br/><br/>
					<div className=''>
						<ArticleLink num={num} key={articles.query} text={articles.txt} url={articles.src} className="article"/> 
					</div>
				</div>
			</div>
			);

			function handleItemClick (e, test){
				//var myItem = document.getElementsByClassName('item');

			}

	}//end render
});//end Tags

module.exports = ArticleList;
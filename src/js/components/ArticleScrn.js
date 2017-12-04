var React = require('react');
var AppActions = require('../actions/AppActions');

var ArticleScrn = React.createClass({
	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	articleBtnClick: function() {
		AppActions.showArticleList(this.props.articles,"Top 25 Articles for Headline ");
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("ArticleScrn is off");
          return false;
        }

		console.log("ArticleScrn - our article: ", this.props.article );
		var articleNo = this.props.articleNo;
		var article = this.props.article;
		var query = this.props.query;
		var url = this.props.url;
		var image = "img/articleOne.jpg";

		return (
			<div>
				<div className='mainScrn center option animated fadeIn'>ArticleScrn
					<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
					<button onClick={this.articleBtnClick} className="homeBtn">Top Headlines</button>
					<div>
						Selected article: {articleNo}<br/>
						Query: {query}<br/>
						Article: <form>
									<textarea name="body" rows="10" className="textArea"
											//onChange={this.handleChange({copy})}
											defaultValue={article}/>
								</form>
						<button onClick={handleDelBtnClick.bind(this)} className="scrnBtn">Delete</button>
						<button onClick={handleSaveBtnClick.bind(this, {article} )} className="scrnBtn">Save</button>
					</div>
					<div>
						<i>Original Article</i><br/>
						<a href={url} target="_blank" className="link">{url}</a>
					</div>
					<div>
					<i>Original Graphic</i>
						<br/><br/>
						<img src={image} />
					</div>
				</div>
			</div>
			);

			function handleSaveBtnClick (copy ){
				alert("Saving Article");
			}//end handle SaveBtnClick
			function handleDelBtnClick (copy ){
				alert("Deleting Article");
			}//end handle SaveBtnClick
			
	}//end render
});//end ArticleScrn

module.exports = ArticleScrn;
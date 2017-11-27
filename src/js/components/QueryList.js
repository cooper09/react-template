var React = require('react');
var axios = require('axios');

var AppActions = require('../actions/AppActions');

var AppAPI = require('../utils/appApi.js');
var ArticleList = require('./ArticleList.js');

var QueryList = React.createClass({

	handleBtnClick: function() {
		console.log('QueryList.handleBtnClick ', this.props.userID );
		AppActions.showQueryArticleList(this.props.data);
		//AppActions.showSelected('Button Two click');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("QueryList is off");
          return false;
        }

		console.log("Querylist Data: ", this.props.data );
		console.log("QueryList userID: ", this.props.userID );

		var queryArr = [];
        var len = this.props.data.length;
		queryArr = this.props.data;

        console.log("Querylist- queryArr: ", queryArr );
		var style = {
			padding: '0.25em',
			cursor: 'pointer', 
			margin: '1em'
		}

		var num = 0;

		return (
			<div>
				
				<div className='mainScrn center option animated fadeIn'>Internet Queries
					<button onClick={this.handleBtnClick} className="closeBtn">Return to Articles</button>
					{ 
						queryArr.map(function(queryArr) {
						//queryArr.map((value, num) => {
							++num;
							return  <div style={style} key={num} onClick={handleItemClick.bind(this, num, queryArr )}>  
									<b>Id</b>: {queryArr.query_id} Query: {queryArr.query} <button className="deleteBtn" onClick={deleteItemClick.bind(this, queryArr.query_id )}>Delete</button>
									<br/> Result endpoint: {queryArr.result_endpoint}
							</div>
						
						}) 

					} 

					<button onClick={this.handleBtnClick} className="bottomBtn">New Query</button>
				</div>

			</div>
			);

			function handleItemClick (num, arr){
				//cooper s - use jquery to open/close each items content....
				console.log("nandleItemClick: ", arr );
				//window.open(arr.result_endpoint, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
				
				AppAPI.findQuery(arr.result_endpoint );

			}//end handleItemClick

			function deleteItemClick(id) {
				console.log("Delete this little goody: ", id);
				AppAPI.deleteQuery(id);
				alert("Query id: " + id +" will be deleted!");
				AppActions.showQueries('Show Queries Screen');
			}//end deleteItemClick

		}//end render
});//end ComponentOne

module.exports = QueryList;
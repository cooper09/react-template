var React = require('react');

var AppActions = require('../actions/AppActions');
var AppAPI = require('../utils/appApi.js');
var ArticleList = require('./ArticleList.js');


var QueryList = React.createClass({

	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	handleNewQuery: function() {
		AppActions.showNewQuery('Show New Query Screen');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("QueryList is off");
          return false;
        }

		console.log('QueryList - queries: ', this.props.queries );
		var queryArr = [];
		var len = this.props.queries.length;
		queryArr = this.props.queries;

		var num=0;

		var style = {
			padding: '0.25em',
			cursor: 'pointer', 
			margin: '1em'
		}
		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>QueryList
				<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
					<div>
					{ 
						queryArr.map(function(queryArr) {
							++num;
							return  <div style={style} key={num} onClick={handleQueryClick.bind(this, num, queryArr )}>  
									<b>Id</b>: {queryArr.query_id} Query: {queryArr.query} <button className="deleteBtn" onClick={deleteQueryClick.bind(this, queryArr.query_id )}>Delete</button>
									<br/> Result endpoint: {queryArr.result_endpoint}
							</div>
						}) 

					}
					</div>
					<button onClick={this.handleNewQuery} className="bottomBtn">New Query</button>
				</div>
			</div>
			);
		
			function handleQueryClick (num, arr){
				//cooper s - use jquery to open/close each items content....
				console.log("nandleQueryClick: ", arr );
				AppAPI.findQuery(arr.result_endpoint );
			}//end handleItemClick

			function deleteQueryClick(id) {
				console.log("Delete this little goody: ", id);
				AppAPI.deleteQuery(id);
				alert("Query id: " + id +" will be deleted!");
				AppActions.showQueries('Show Queries Screen');
			}//end deleteItemClick

	}//end render
});//end QueryList

module.exports = QueryList;
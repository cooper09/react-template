var AppActions = require('../actions/AppActions');
var axios = require('axios');

module.exports = {

	 // Load mock product data from localStorage into ProductStore via Action
  getUsers: function () {
  	console.log("appAPI.getData: " );
  	// Performing a GET request

		axios.get('https://mpoint-users.herokuapp.com/users' )
	  .then(function(response){
	    console.log("appAPI.getUsers: " ,response.data); // ex.: { user: 'Your User'}
			console.log(response.status); // ex.: 200
			
			var data = response.data;
			console.log("getuser response: ", data );
			data.map(function(data) {
				console.log(data.name);
			})
		
			AppActions.loadUsers(data);
	  });//end response
  },//end getUsers

	// AI-Writer API calls
getArticles: function () {
	console.log("appAPI.getArticles...");
	// Performing a GET request
// cooper s - may want to use promise in the future. Don't need one now...		
//			let prom = new Promise( function(resolve, reject){
				//alert("Lets go get them article rascals...");
			axios.get('http://ai-writer.com/mpnt_json_endpoint.php?id=3796&pass=kqPvuQmdab')
			//	axios.get('http://localhost:8080/')
			.then(function(response){
					console.log("appAPI.getArticles: " ,response.data); // ex.: { user: 'Your User'}
					console.log("response data: ", response.status); // ex.: 200
					var data = response.data;
					AppActions.loadArticles(data);
				});//end axios get
//				});// end promise


},//end function getPageData

	// getQueryData - pulls all current query data
	//	tbd - create different query groups for individual users

getQueryData: function(query) {
		//alert("appAPI.postQuery: ", query );

		axios.get('http://ai-writer.com/mpnt_json_endpoint.php?list_queries=1')
		.then(function(response) {
			console.log("listQuery Response: ", response.data );
			var data = response.data;
			AppActions.loadQueries(data);
		});  
	},//end getQuery
//end function getPageData

// cooper s - post a new query
postQuery: function(query) {
	//alert("appAPI.postQuery: ", query );
	axios.get('http://ai-writer.com/mpnt_json_endpoint.php?add_query='+query+'&word_count=500')
	.then(function(response) {
		console.log("postQuery Response: ", response );
	});  
},//end postQuery

// delete a query using its query id
deleteQuery: function(query) {
		console.log("appAPI.deleteQuery Response: ", query );
		axios.get('http://ai-writer.com/mpnt_json_endpoint.php?delete_query=1&query_id='+query )
		.then(function(response) {
			console.log("deleteQuery Response: ", response );
	});  

},
// locate a particlar query using its link
findQuery: function(url) {
	console.log("findQuery Response: ", url );
	axios.get(url)
	.then(function(response){
			console.log("findQuery: " ,response.data); // ex.: { user: 'Your User'}

			var data = response.data;
			//AppActions.loadArticles(data);
			AppActions.showArticleList(data);
			returnMe(data);
		});//end axios get

				
		function returnMe(data){
			console.log('ReturnMe - Lets return some data: ', data );
			return data;
		}//end returnMe	
	},	

// AutoContent-MongoDB API calls

checkUser: function(user) {
	alert("appAPI.Check user: ", user );
	axios.get('http://localhost:8080/user' )
	.then(function(response) {
		alert("checkUser response - Hold it!");
		console.log("checkUser Response: ", response );
		return response;
	});  

}

}; //end exports
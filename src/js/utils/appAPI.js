var AppActions = require('../actions/AppActions');
var axios = require('axios');

//	var data = JSON.parse(localStorage.getItem('data'));
//	AppActions.loadArticles(data);


module.exports = {
  // Load Mock Product Data Into localStorage

	 // Load mock product data from localStorage into ProductStore via Action
  getUsers: function () {
  	console.log("appAPI.getData: " );
  	// Performing a GET request
		axios.get('https://mpoint-users.herokuapp.com/users' )
	  .then(function(response){
	    console.log("appAPI.getUsers: " ,response.data); // ex.: { user: 'Your User'}
			console.log(response.status); // ex.: 200
			
			var data = response.data;
			console.log("getdata response: ", data );
			data.map(function(data) {
				console.log(data.name);
			});
		
			AppActions.loadUsers(data);
	  });
  },//end getUsers */

  getArticles: function () {
		console.log("appAPI.getArticles " );
		axios.get('http://ai-writer.com/mpnt_json_endpoint.php?id=3796&pass=kqPvuQmdab')
		.then(function(response){
				console.log("appAPI.getArticles: " ,response.data); // ex.: { user: 'Your User'}
				console.log("response data: ", response.status); // ex.: 200

				var data = response.data;
				AppActions.loadArticles(data);
			});//end axios get
	},
	getQueries: function() {
		console.log("appAPI.getData: " );
		axios.get('http://ai-writer.com/mpnt_json_endpoint.php?list_queries=1')
		.then(function(response) {
			console.log("getQueries Response: ", response.data );
			var data = response.data;
			AppActions.loadQueries(data);
		});  
	},
	// locate a particlar query using its link
	findQuery: function(url) {
		console.log("findQuery Response: ", url );
			axios.get(url)
			.then(function(response){
					console.log("findQuery: " ,response.data); // ex.: { user: 'Your User'}
	
					var data = response.data;
					AppActions.showArticleList(data,"query");
				});//end axios get
	}
	
}; //end exports
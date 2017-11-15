//var AppActions = require('../actions/AppActions');
var axios = require('axios');

module.exports = {

	 // Load mock product data from localStorage into ProductStore via Action
  getData: function (user) {
  	console.log("appAPI.getData: ", user );
  	// Performing a GET request

		axios.get('http://localhost:8080/users' )
	  .then(function(response){
	    console.log("appAPI.getData: " ,response.data); // ex.: { user: 'Your User'}
			console.log(response.status); // ex.: 200
			
			var data = response.data;
			console.log("data: ", data );
			data.map(function(data) {
				console.log(data.name);
				if (data.name == user ) {
					console.log('Eureka!!');
					foundIt;
				} 
			})
		//	AppActions.loadPages(data);
		
		 function foundIt() {
			return true;
		}

	  });
  }//end getData

}; //end exports
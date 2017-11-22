var AppActions = require('../actions/AppActions');
var axios = require('axios');

module.exports = {

	 // Load mock product data from localStorage into ProductStore via Action
  getData: function () {
  	console.log("appAPI.getData: " );
  	// Performing a GET request

		axios.get('https://mpoint-users.herokuapp.com/users' )
	  .then(function(response){
	    console.log("appAPI.getData: " ,response.data); // ex.: { user: 'Your User'}
			console.log(response.status); // ex.: 200
			
			var data = response.data;
			console.log("getdata response: ", data );
			data.map(function(data) {
				console.log(data.name);
			})
		
			AppActions.loadUsers(data);
		
		 function foundIt() {
			return true;
		}

	  });
  }//end getData

}; //end exports
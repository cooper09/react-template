//var AppActions = require('../actions/AppActions');
var axios = require('axios');

module.exports = {

	 // Load mock product data from localStorage into ProductStore via Action
  postData: function (saleData) {
  	console.log("tyrionAPI.postData: ", saleData );
      // Performing a GET request
      axios.post('http://localhost:8080/sale', saleData )
	  .then(function(response){
	    console.log("tyrionAPI.postData: " ,response.data[0]); // ex.: { user: 'Your User'}
	    console.log(response.status); // ex.: 200

			//Lets taka good look at our data:

			console.log("appAPI - our id: ", response.data );
	  });

  }//end postData

}; //end exports
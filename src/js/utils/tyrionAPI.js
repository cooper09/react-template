//var AppActions = require('../actions/AppActions');
var axios = require('axios');

module.exports = {

	 // Load mock product data from localStorage into ProductStore via Action
  getData: function (saleData) {
  	console.log("tyrionAPI.getData: ", saleData );
  // Performing a GET request
	//axios.post('http://localhost:8080/sale', saleData )
		axios.get('https://tyrionapi.herokuapp.com/sales' )
	  .then(function(response){
	    console.log("tyrionAPI.gettData: " ,response.data); // ex.: { user: 'Your User'}
	    console.log(response.status); // ex.: 200

			//Lets taka good look at our data:

			console.log("tyrionAPI - our current sales data: ", response.data );

			return response.data;
	  });

  }//end postData

}; //end exports
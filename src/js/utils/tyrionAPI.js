//var AppActions = require('../actions/AppActions');
var axios = require('axios');

module.exports = {

	 // Load mock product data from localStorage into ProductStore via Action
  getData: function () {
  	console.log("tyrionAPI.getData: 2 ");
  // Performing a GET request
	//axios.post('http://localhost:8080/sale', saleData )
		axios.get('https://tyrionapi.herokuapp.com/sales' )
	  .then(function(response){
	    console.log("tyrionAPI.getData - received our data: " ,response.data); // ex.: { user: 'Your User'}
	    console.log("tyrion.getData" , response.status); // ex.: 200

			//Lets taka good look at our data:

			console.log("tyrionAPI - our current sales data: ", response.data );

			return response.data;
	  }).catch(error => {
			console.log("STOP THE SHOW!!!!", error.response)
	});

  }//end postData

}; //end exports
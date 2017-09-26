var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');

	axios.get('https://tyrionapi.herokuapp.com/sales' )
		.then(function(response){
		console.log("tyrionAPI.getData - received our data: " ,response.data); // ex.: { user: 'Your User'}
		console.log("tyrion.getData" , response.status); // ex.: 200

			//Lets taka good look at our data:

			console.log("tyrionAPI - our current sales data: ", response.data );

			ReactDOM.render(
				<App data={response.data} />,
				document.getElementById('app')
			);
			//return response.data;
		}).catch(error => {
			console.log("STOP THE SHOW!!!!", error.response)
		});

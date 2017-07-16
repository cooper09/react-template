var React = require('react');

var ComponentOne = React.createClass({

	onSubmit: function (e){
		e.preventDefault();
		console.log("test: ", document.getElementById("name").value);
		//console.log("Submit me, baby: ", e );
		var name = document.getElementById("name").value;
	    var email = document.getElementById("email").value;
		var phone = document.getElementById("phone").value;

		var validEmail = validateEmail(email);
	    console.log("validate email: "+ validEmail );

		var validPhone = validatePhone(phone);
	    console.log("validate phone: "+ validPhone );

		if ((validEmail === true) && (validPhone === true)) {
			alert("Data has been successfully submitted...");
		} else {
			alert("You must enter valid email and phone number to continue.")
		}

//Validation code for Email and phone number
		function validateEmail (email) {
			console.log("Validate email: ", email );

			var x = email;
			var atpos = x.indexOf("@");
			var dotpos = x.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
				alert("You must enter a valid e-mail address!");
				return false;
			} else {
				return true;
			}
		}//validate email 
	//Phone Number validation
		function validatePhone (phone) {
			console.log("Validate phone number: ", phone );
			var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
			console.log("phoneno: ", phone.match(phoneno));	
			var ok = phone.match(phoneno);
			console.log("validatePhone - Are we OK: ", ok )
			if ((ok))  { 
				return true;  
			}  else  {  
				alert("You must enter a valid phone number!");  
				return false;   
			}   

		}//validate phone
	},//end onSubmit
	render: function() {
		
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<h1> Simple Form with email validation</h1>

					<span className="label">Name: </span><input type='text' id='name' name="fname" className="formfld" width="60" required></input><br/>
				    <span className="label">Email: </span><input type='text' id='email' name="email" className="formfld" width="60" required></input><br/>
					<span className="label">Contact Number: </span><input type='text' id='phone' className="formfld"></input><br/>
					<br/><br/>
					<button type="submit" >Submit</button>
			   </form>
			   <br/><br/>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;
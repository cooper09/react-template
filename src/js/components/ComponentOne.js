var React = require('react');

var ComponentOne = React.createClass({

	onSubmit: function (e){
		e.preventDefault();
		console.log("test: ", document.getElementById("name").value);
		//console.log("Submit me, baby: ", e );
		var name = document.getElementById("name").value;
	    var email = document.getElementById("email").value;

		var validEmail = validateEmail(email);
	    console.log("validate email: "+ validEmail );

		if (validEmail === true) {
			alert("Data has been successfully submitted...");
		}

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
	},
	render: function() {
		
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<h1> Simple Form with email validation</h1>

					<span className="label">Name: </span><input type='text' id='name' name="fname" className="formfld" width="60" required></input><br/>
				    <span className="label">Email: </span><input type='text' id='email' name="email" className="formfld" width="60" required></input><br/>
					<br/><br/>
					<button type="submit" >Submit</button>
			   </form>
			   <br/><br/>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;
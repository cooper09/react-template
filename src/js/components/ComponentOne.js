var React = require('react');

var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

var ComponentOne = React.createClass({
	mixins:[ReactScriptLoaderMixin ],
	getInitialState: function() {
		return {
		stripeLoading: true,
		stripeLoadingError: false,
		submitDisabled: false,
		paymentError: null,
		paymentComplete: false,
		token: null
		};
	},
	getScriptURL: function() {
		return 'https://js.stripe.com/v2/';
	},
	onScriptLoaded: function() {
		if (!ComponentOne.getStripeToken) {
		// Put your publishable key here
		Stripe.setPublishableKey('pk_test_xxxx');

		this.setState({ stripeLoading: false, stripeLoadingError: false });
		}
	},

	onScriptError: function() {
		this.setState({ stripeLoading: false, stripeLoadingError: true });
	},
	onSubmit: function(event) {
		var self = this;
		event.preventDefault();
		this.setState({ submitDisabled: true, paymentError: null });
		// send form here
		Stripe.createToken(event.target, function(status, response) {
		if (response.error) {
			self.setState({ paymentError: response.error.message, submitDisabled: false });
		}
		else {
			self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
			// make request to your server here!
		}
		});
	},
	doSomething: function (){
		console.log("Do Something!!!");
	},
	render: function() {
	if (this.state.stripeLoading) {
      return <div>Loading</div>;
    }
    else if (this.state.stripeLoadingError) {
      return <div>Error</div>;
    }
    else if (this.state.paymentComplete) {
      return <div>Payment Complete!</div>;
    }
    else {

		
		return (
			<div>
				<h1> Simple Cart Component</h1>

			<form onSubmit={this.onSubmit} >
				<span>{ this.state.paymentError }</span><br />
				<input type='text' data-stripe='number' placeholder='credit card number' /><br />
				<input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
				<input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
				<input type='text' data-stripe='cvc' placeholder='cvc' /><br />
				<input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
			</form>
			

			</div>
			);
	  }
	}//end render
});//end ComponentOne

module.exports = ComponentOne;
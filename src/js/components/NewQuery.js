var React = require('react');
var AppActions = require('../actions/AppActions');
var appAPI = require('../utils/appAPI.js');

var NewQuery = React.createClass({
	getInitialState: function() {	
		return { value: ''};
	},
	handleBtnClick: function() {
		AppActions.showMainScrn('Show Main Screen');
	},
	handleChange: function (evt) {
		//console.log("This is where: ", evt.target.value);
		this.setState({value: evt.target.value});
	  },
	  handleSearchBtnClick: function() {
		console.log("SelectedSite- query: ", this.state.value );
		appAPI.postQuery(this.state.value );
		// cooper s - do we add jquery here or stay "reactified..."
		//$('#query').val('');
		this.setState({value: ""});
		alert("Your query has been submitted. Please wait for your email notification for the results to appear in your Query list.\n\nThank you.")
		this.setState({value: ''});
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("NewQuery is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated fadeIn'>
					<button onClick={this.handleBtnClick} className="homeBtn">Home</button>
					<label>Enter New Headline Search: </label>
					<textarea name="body" cols="30" rows="10" id="query" className="textArea"
										onChange={this.handleChange}
										value={this.state.value}/><br/>
					<button onClick={this.handleSearchBtnClick} className="bottomBtn">Start Query</button>
				</div>
			</div>
			);
	}//end render
});//end NewQuery

module.exports = NewQuery;
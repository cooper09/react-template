var React = require('react');
var AppActions = require('../actions/AppActions');
var appAPI = require('../utils/appAPI.js');

var EnterQuery = React.createClass({

	getInitialState: function() {
		
				return { value: ''};
			},
			componentDidMount: function(){
			
			},
			handleChange: function (evt) {
				console.log("This is where: ", evt.target.value);
				this.setState({value: evt.target.value});
				//this.setState({ value: evt.target.value.substr(0, 100) });
			  },
			handleCloseBtn: function() {
						AppActions.removeSelected('remove Selected Search Screen');
						AppActions.showArticleList('show article list');
					},
			handleSearchBtnClick: function() {
					console.log("SelectedSite- query: ", this.state.value );

					appAPI.postQuery(this.state.value );
					$('#query').val('');
					alert("Your query has been submitted. Please wait for your email notification for the results to appear in your Query list.\n\n.Thank you.")
				},
			render: function() {
				 if (!this.props.visible) {
					 console.log("SelectedSite is off");
				  return false;
				}
		
				return (
					<div>
						EnterQuery.js
						<div className='mainScrn center option animated fadeIn'>Enter Article Query
						<button onClick={this.handleCloseBtn} className="closeBtn">Return to Articles</button>
							<h3>{this.props.articles}</h3>
		
							<textarea name="body" cols="30" rows="10" id="query"
										onChange={this.handleChange}
										defaultValue={this.state.value}/>
										
							<br/><br/>
							<button onClick={this.handleSearchBtnClick} className="bottomBtn">Start Query</button>
							<div className="sideBar right">
											<div><button onClick={this.handleSaveBtnClick} className="sideBtn">Save Query</button></div>
											<div><button onClick={this.handleDeleteBtnClick} className="sideBtn">Clear Query</button></div>
										</div>
						</div>
						
					</div>
					);
	}//end render
});//end EnterQuery

module.exports = EnterQuery;
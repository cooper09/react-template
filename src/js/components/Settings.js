var React = require('react');
var AppActions = require('../actions/AppActions');

var Settings = React.createClass({

	handleCloseBtn: function() {
		AppActions.removeSettings('remove Settings Screen');
		AppActions.showArticleList('show article list');
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("SelectedSite is off");
          return false;
        }

		return (
			<div>
				<p>Settings.js</p>
				<div className='mainScrn center option animated fadeIn'>Settings
					<button onClick={this.handleCloseBtn} className="closeBtn">Return to Articles</button>
					<h3>{this.props.articles }</h3>
					<form onSubmit={this.handleSubmit}>
						Article Retrival
						<label>
							<input type="checkbox"
							//checked={this.state.isChecked}
							onChange={this.toggleChange}
							/>
							10
						</label><br />
						<label>
							<input type="checkbox"
							//checked={this.state.isChecked}
							onChange={this.toggleChange}
							/>
							20
						</label><br/>
						<label>
							<input type="checkbox"
							//checked={this.state.isChecked}
							onChange={this.toggleChange}
							/>
							30
						</label>
						<br/><br/>
						<label>
						Keywords:
						<select value={this.props.value} onChange={this.handleChange}>
							<option value="grapefruit">Red</option>
							<option value="lime">Yellow</option>
							<option value="coconut">Blue</option>
							<option value="mango">Red</option>
						</select>
						</label>
						<br/><br/>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = Settings;
var React = require('react');

var LeftScrn = React.createClass({
	getInitialState: function() {
		return {
				};
	  },

	handleSaveBtnClick: function(copy) {
		alert("current state of copy 1: ", copy );

	},

	render: function() {
		 if (!this.props.visible) {
		 	console.log("LeftScrn is off");
          return false;
        }

		var copy = this.props.text;
		console.log("LeftScrn - current copy: ", this.props.text );
		
		return (
			<div>
				<div className="leftScrn">
					<div className='smallScrn center option animated fadeIn'>
					<button onClick={handleDelBtnClick.bind(this)} className="scrnBtn">Delete</button>
					<button onClick={handleSaveBtnClick.bind(this, {copy} )} className="scrnBtn">Save</button>
					<br/><br/>
					<br/>
						<form>
							<textarea name="body" rows="10" className="textArea"
									//onChange={this.handleChange({copy})}
									defaultValue={copy}/>
						</form>


					</div>
					<button onClick={this.handleBtnClick} className="bottomBtn">Create Tag</button>
					<button onClick={this.handleBtnClick} className="bottomBtn right">Social Post</button>
				</div>
			</div>
			);

			function handleSaveBtnClick (copy ){
				alert("Saving Article");
			}//end handle SaveBtnClick
			function handleDelBtnClick (copy ){
				alert("Deleting Article");
			}//end handle SaveBtnClick
	}//end render
});//end Articles

module.exports = LeftScrn;
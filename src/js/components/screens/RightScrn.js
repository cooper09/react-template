var React = require('react');

var RightScrn = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("ArticleScrn is off");
          return false;
        }

		return (
			<div>
				<div className="rightScrn">
					<div className='smallScrn center option animated fadeIn'>
						<i>Original Graphic</i>
						<br/><br/>
						<img src={this.props.image} />
					</div>

					<center><button onClick={this.handleBtnClick} className="bottomBtn middle">Open Excel</button></center>

				</div>
			</div>
			);
	}//end render
});//end Articles

module.exports = RightScrn;
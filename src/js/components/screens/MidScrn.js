var React = require('react');

var MidScrn = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("ArticleScrn is off");
          return false;
        }

		return (
			<div>
				<div className="midScrn">
					<div className='smallScrn center option animated fadeIn'>
						<i>Original Article</i><br/>
						<a href={this.props.text} target="_blank" className="link">{this.props.text }</a>
					</div>
				</div>
			</div>
			);
	}//end render
});//end Articles

module.exports = MidScrn;
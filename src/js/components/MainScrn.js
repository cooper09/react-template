var React = require('react');

var MainScrn = React.createClass({

	render: function() {
		 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false;
        }

		return (
			<div>
				
				<div className='mainScrn center option animated zoomInUp'>MainScrn
                    <br/><br/>
                    <div className="centerPiece">
                        <button className="mainBtn">Top 25 Articles</button><br/>
                        <button className="mainBtn">My Queries</button><br/>
                        <button className="mainBtn">Get Started</button>
                    </div>
				</div>
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = MainScrn;
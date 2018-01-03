import React, { Component,Stylesheet } from 'react';

export default class GradientBG extends Component {
	render() {
		return (
			<div style={Styles.mainDiv}>
				<svg  xmlns="http://www.w3.org/2000/svg" style={{minWidth:this.props.width,minHeight: this.props.height}} >
					<defs> 
						<linearGradient id="lgrad" x1="55%" y1="100%" x2="45%" y2="0%" > 
							<stop offset="0%" style={{stopColor:'rgb(38,255,96)',stopOpacity:1}} />
							<stop offset="55%" style={{stopColor:'rgb(17,185,110)',stopOpacity:1}} />

							<stop offset="100%" style={{stopColor:'rgb(1,128,123)',stopOpacity:1}} />
					 
						</linearGradient> 
					</defs>
					<rect  x="0" y="0" width="100%" height="100%" fill="url(#lgrad)"/>
				</svg>
			</div>
		);
	}
}
const Styles = {
	mainDiv:{
		position:'absolute',
		top:-4,
		left:0,
		zIndex: -1,
		bottom:0,
		minHeight:'100%'
	}
};

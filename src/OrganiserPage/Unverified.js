import React, { Component } from 'react';
import GradientBG from './../gradient'
import AppBar from 'material-ui/AppBar'; 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Animated} from "react-animated-css";

export default class Unverified extends Component {
	render() {
		return (
			<div>
				<AppBar titleStyle={Styles.titleStyle} style={Styles.AppBar} zDepth={3} title="Organisers Authorisation "    iconClassNameRight="muidocs-icon-navigation-expand-more"  />
			 	<Animated animationInDelay={0} animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
						<GradientBG width={'100vw'} height={'120vh'}/>
				</Animated>
				<Animated animationInDelay={0.5} animationIn="fadeInLeft" animationOut="fadeOutRight" isVisible={true}>
					<center>
					<div style={Styles.formStyle}>
						<center>

							<h4 style={Styles.h4Style}>Please Enter the Authorisation Password, Provided by your mentor</h4>
							<img src={'./assets/lock.png'} style={Styles.imgStyle} />
							<br/>
							<TextField floatingLabelStyle={Styles.floatingLabelStyle} floatingLabelText="Enter Password"  hintText="Please Enter Password"    hintStyle={Styles.TextFieldStyle}  />
							<br/><br/>
							<RaisedButton onClick={()=>this.props.changeAuthorisationState(true)} labelColor={'#fff'} backgroundColor={'#01807B'} label="Verify" fullWidth={true} />
						</center>
					</div>
				</center>
				</Animated>
			</div>
				
		);
	}
}

const Styles ={
	TextFieldStyle:{
		color:'#a1a3a2',
		textAlign:'center'
	},
	floatingLabelStyle:{
		color: '#01807B',
	},
	h4Style:{
		color: '#01807B',
		fontSize: '1.3em'
	},
	formStyle:{
		maxWidth:500,
		margin:35,
		backgroundColor:'#ffffff',
		boxShadow: "1px 2px 12px #035E4F",
		fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',		
		borderRadius: 10,
		minHeight: '70vh',
		paddingTop: 40,
		paddingLeft: 15,
		paddingRight:15	,
		paddingBottom: 30	

	},
	imgStyle:{
		width:'40%'
	},
	AppBar:{
		backgroundColor: '#fff',
		height:50,
		width:'100vw',
		textAlign:  'center'
	},
	titleStyle:{
		color: '#01807B',
		position:'relative',
		top:'-1.2vh',
		fontSize: '1.6em',
		fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif'
		
	}
}

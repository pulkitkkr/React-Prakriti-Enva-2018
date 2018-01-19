import React, { Component } from 'react';
import GradientBG from './../gradient';
import AppBar from 'material-ui/AppBar';
import {isMobile} from 'react-device-detect';
import { Link,BrowserRouter,withRouter } from 'react-router-dom'
import {Animated} from "react-animated-css";


export default class LoginPage extends Component {
	OpenOrganiser = ()=>{
		 document.location.href = '/organiser';
	};
	OpenAttendee = ()=>{
		 document.location.href = '/attendee';
	}
	render() {
		return (
			<div>
				 <AppBar titleStyle={Styles.titleStyle} style={Styles.AppBar} zDepth={3} title="Enva 2k18"    iconClassNameRight="muidocs-icon-navigation-expand-more"  />
				 <GradientBG width={'100vw'} height={window.innerHeight}/>
				 <Animated animationInDelay={0.30} animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
 
				 <center >
				 	 <img  style={Styles.imgStyle} src='./assets/prakriti_logo.png' width={'50%'}/><br/>
				 	 <img  style={Styles.imgStyle} src='./assets/zebLogo.png' width={'50%'}/>
				 	 <h3 style={Styles.h3Style}>Are you an ?</h3>
				 	 <div style={Styles.selectionDiv}>
				 	 	  
				 	 	 	<div onClick={this.OpenOrganiser} style={Styles.innerDiv}>
				 	 	 			<h4 style={Styles.h4Style}>Organiser</h4>
					 	 		
					 	 	</div>
					 	 
				 	 	<div  onClick={this.OpenAttendee} style={Styles.innerDiv}>
				 	 		<h4 style={Styles.h4Style}>Attendee</h4>
				 	 	</div>
				 	 </div>
				 </center>
				 </Animated>
			</div>
		);
	}
}
const Styles={
	titleStyle:{
		color: '#01807B',
		position:'relative',
		top:'-1.2vh',
		fontSize: '1.8em',
		fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif'
		
	},
	selectionDiv:{
		marginLeft: 30,
		marginRight: 30,
		display: 'flex',
		justifyContent:  'center',
		alignItems: 'center'
	},
	innerDiv:{
		backgroundColor:'#ffffff',
		boxShadow: "1px 3px 12px #035E4F",
		flex: 1,
		borderRadius: 10,
		minHeight: 50,
		margin:10,
		maxWidth:160,
		alignContent:  'center',
		justifyContent:'center',
		cursor:'pointer'

	},
	h4Style:{
		color: '#01807B',
	},
	AppBar:{
		backgroundColor: '#fff',
		height:50,
		width:'100vw',
		textAlign:  'center'
	},
	imgStyle:{ 
		marginTop: 45,
		maxWidth: 150
	},
	h3Style:{
		color:'#fff',
		fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
		fontSize: '1.6em',
	}
}
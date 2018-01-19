import React, { Component } from 'react';
import BottomTabs from './BottomTabs';
import Unverified from './Unverified';
import AppBar from 'material-ui/AppBar';
import GridEventList from './GridEventList';
import {Animated} from "react-animated-css";
import EventsData from './../IndividualEvent/eventData'
export default class OrganiserPage extends Component {
	constructor(props){
		super(props);
		this.state ={
			authorised:false,
			selectedIndex:0,
			eventKey:'showdown',
			selectedEvent:EventsData['showdown']
		};
	}

	changeSelectedIndex=(index)=>{
		this.setState({selectedIndex:index});
	}
	authorisationStateChange=(data,selectedEvent={},eventKey='m')=>{
		console.log(eventKey);
		if(eventKey=='sportsrumble'){
			selectedEvent = {...EventsData['sportssquad'], EventName:'Sports Rumble'};
			eventKey = 'sportsrumble';
		}

		this.setState({authorised:data,selectedEvent:selectedEvent,eventKey:eventKey})
	}
	bookFunc=()=>{
		 
		
			window.location.href="organiserBook/"+this.state.eventKey;
	}
	render() {
		if(this.state.authorised){
			console.log(this.state.selectedEvent);
			return (
				<div>
					 <Animated animationInDelay={0.1} animationIn="bounceIn" animationOut="fadeOut" isVisible={this.state.selectedIndex===0 ? true:false}>
 					 	<div style={{display:this.state.selectedIndex===0 ? '':'none'}}>
 					 	<AppBar iconStyleLeft={{display:'none'}} iconStyleRight={{display:'none'}} titleStyle={Styles.titleStyle} style={{...Styles.AppBar}} zDepth={3} title="Sell Tickets"   />
				 		<GridEventList bookFunc={this.bookFunc.bind(this)} selectedEvent={this.state.selectedEvent} />
				 		</div>
				 	 </Animated>
					 <Animated animationInDelay={0.1} animationIn="bounceIn" animationOut="fadeOut" isVisible={this.state.selectedIndex===1 ? true:false}>
 					 	<div>
 					 		<AppBar iconStyleLeft={{display:'none'}} iconStyleRight={{display:'none'}}  titleStyle={Styles.titleStyle} style={{...Styles.AppBar,display:this.state.selectedIndex===1 ? '':'none'}} zDepth={3} title="Sale Charts"  />
				 	 	</div>
				 	 </Animated>
					 <Animated animationInDelay={0.1} animationIn="bounceIn" animationOut="fadeOut" isVisible={this.state.selectedIndex===2 ? true:false}>
 						<AppBar iconStyleLeft={{display:'none'}} iconStyleRight={{display:'none'}}  titleStyle={Styles.titleStyle} style={{...Styles.AppBar,display:this.state.selectedIndex===2 ? '':'none'}} zDepth={3} title="Important Informations"   />
				 	 </Animated>
					
					<BottomTabs selectedIndex={this.state.selectedIndex} selectedIndexChange={this.changeSelectedIndex}/>

				</div>
			);	
		}
		else{
			return(
				<Unverified changeAuthorisationState={this.authorisationStateChange}/>				 
			)
		}
		
	}
}
const Styles={
	titleStyle:{
		color: '#fff',
		position:'relative',
		top:'-1.2vh',
		fontSize: '1.8em',
		fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif'
		
	},
	AppBar:{
		backgroundColor: '#079875',
		height:50,
		width:'100vw',
		textAlign:  'center'
	},
}
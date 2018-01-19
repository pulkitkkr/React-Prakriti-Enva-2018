import React, { Component } from 'react';
import EventData from './eventData';
import GradientBG from './../gradient';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Bullet from 'material-ui/svg-icons/content/send';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import firebase from './../IndividualEvent/firebaseConfig.js'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import scrollToComponent from 'react-scroll-to-component';
export default class OrganiserIndividualEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {showReset:false,code:'',mode:'cash',amt:'',Tid:'',showQr:false,PaymentText:'Please Fill The above details', phone:'',email:'',name:'',width: '0', height: '0',Attendee:EventData[this.props.match.params.event].min };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }
    componentDidMount() {
        this.updateWindowDimensions();
        //alert('QR Payment Code Found!! Deployment Team Shall verify and reach you for confirmation within 12hrs');
        window.addEventListener('resize', this.updateWindowDimensions);
        window.setTimeout(() => {
            scrollToComponent(this.sc, {
                offset: 0,
                align: 'top',
            });
        }, 50);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    renderRules = (CurrentEvent) => {
        const data = CurrentEvent.Rules.map((individualRule, index) => {
            return (

                <ListItem secondaryTextLines={4} secondaryText={individualRule} leftIcon={<Bullet />} />
            )
        })
        return (
            data
        )
    };
    handleChangeNumberAttendee = (event, index, value) => {this.setState({Attendee:value},()=> this.verifyData(EventData[this.props.match.params.event]))}
    handleChangeMode = (event, index, value) => {this.setState({mode:value})};
    
    renderNonLinear = (CurrentEvent) => {
        var Imin = CurrentEvent.min;
        var Imax = CurrentEvent.max;

        var data = '';
        while (Imin <= Imax) {
            data = data + '\n' + 'Price for ' + Imin + ': ' + CurrentEvent.PriceData[Imin.toString()] + '/-';
            Imin++;
            
        }
        return data;
    }
    renderSelection =(CurrentEvent)=>{
      var Imin = CurrentEvent.min;
      var Imax = CurrentEvent.max;

      if(Imin===Imax && Imin==1){
        return(
           <MenuItem value={1} primaryText="1" />
        )
      }
      else if(Imin===Imax && Imin!=1){
        return(
           <MenuItem value={Imin} primaryText={""+Imin} />
        )
      }
      else{
        var data =[];
        while(Imin<=Imax){
          data.push(<MenuItem value={Imin} primaryText={Imin} />);
          Imin++;
        }
        return(data);
      }
    }
    verifyData=(CurrentEvent)=>{
      if(this.state.name.length>3){
        if(this.state.phone.length==10){
          if(this.state.email.includes('@') && this.state.email.includes('.')){
            var Text ='';
            var amt;
            if(CurrentEvent.linearPrice){
              amt = (CurrentEvent.linerMultiplier*this.state.Attendee);
              Text='Please Collect '+(CurrentEvent.linerMultiplier*this.state.Attendee)+'/-'
            }
            else{
              amt=(CurrentEvent.PriceData[this.state.Attendee.toString()]);
              Text='Please Paytm '+(CurrentEvent.PriceData[this.state.Attendee.toString()])+'/-'
            }
            this.setState({PaymentText:Text,showQr:true,amt:amt})
          }
          else{
            this.setState({PaymentText:'Please Enter Correct Email Address',showQr:false});
          }
        }
        else{
          this.setState({PaymentText:'Please Enter Correct Phone Number',showQr:false});
        }
      }
      else{
        this.setState({PaymentText:'Please Enter Correct Name',showQr:false});
      }
    }
    submitFirebase=()=>{
      var UID = Math.random();
      UID = UID *999999;
      UID = parseInt(UID);
      let data = {
        Name: this.state.name,
        Email: this.state.email,
        Phone: this.state.phone,
        Attendee: this.state.Attendee,
        Amount: this.state.amt,
        Event: EventData[this.props.match.params.event].EventName,
        mode:this.state.mode,
        UID:UID
      };
        firebase.database().ref('Desk/'+EventData[this.props.match.params.event].EventName).push({data:data }).then(()=>{
                    alert("Submission Recorded,Please Write the UID available on next screen on stamped ticket");
                    this.setState({code:UID,showReset:true});
                });
      
    }
    resetFunc=()=>{
      this.setState({showReset:false,code:'',mode:'cash',amt:'',Tid:'',showQr:false,PaymentText:'Please Fill The above details', phone:'',email:'',name:'',width: '0', height: '0',Attendee:EventData[this.props.match.params.event].min });
    }
    renderThings =()=>{
      return(<center>
            <h3>Please Select Mode Of Payment, If Paytm, Registration Desk Head is requested to take paytm amount in his / her wallet, which shall be transferred at the time of money submission in the evening</h3>
            <SelectField onChange={this.handleChangeMode} floatingLabelText="Payment Mode" value={this.state.mode}>
              <MenuItem value={"cash"} primaryText="cash" />
              <MenuItem value={"paytm"} primaryText="paytm" />
            </SelectField>   
            <RaisedButton onClick={this.state.showReset ? this.resetFunc: this.submitFirebase} labelColor={'#ffffff'} backgroundColor={this.state.showReset ? "#ff0000" :'#0BA472'} style={{marginLeft:30,marginRight:30}} label={this.state.showReset ? "Reset" : "Submit"} />
            <h2>Unique Code: {this.state.code}</h2>
            
          </center>
        )
    }
    render() {
        const CurrentEvent = EventData[this.props.match.params.event];
        return (
            <div>
              <AppBar ref={(element)=>{this.sc=element}} titleStyle={Styles.titleStyle} style={Styles.AppBar} zDepth={3} title={"Organisers: "+CurrentEvent.EventName}   iconClassNameRight="muidocs-icon-navigation-expand-more"  />
         <GradientBG width={this.state.width} height={this.state.height*2}/>
          <Card style={{margin:15,padding:10,paddingLeft: 20}}>
             <CardTitle title="Payment"/>
              <TextField onChange={(event)=>{ this.setState({name:event.target.value},()=>this.verifyData(CurrentEvent))}} floatingLabelText="Head Name" hintText="Full Name / Team Lead"  /><br />
              <TextField type='tel' onChange={(event)=>{this.setState({phone:event.target.value},()=>this.verifyData(CurrentEvent))}} floatingLabelText="Mobile" hintText="eg. 9877765123"  /><br />
              <TextField type='email' onChange={(event)=>{this.setState({email:event.target.value},()=>this.verifyData(CurrentEvent))}} floatingLabelText="Email" hintText="Joe@gmail.com"  /><br />
             
              <SelectField onChange={this.handleChangeNumberAttendee} floatingLabelText="Number Of Attendees" value={this.state.Attendee}>
                 {
                  this.renderSelection(CurrentEvent)
                 }
                
               </SelectField>
               <h4 style={{paddingTop:0}}>
                {this.state.PaymentText ? this.state.PaymentText : '' }
                  </h4>
                  {
                    this.state.showQr ? this.renderThings() : ''
                  }

               <br />

          </Card>
          <Card style={{margin:15}}>
              <CardTitle title="What are we bringing for you ?" subtitle="" />
            <CardText style={{paddingTop:0}}>
                {CurrentEvent.EventDescription}
               </CardText>
               {
                 CurrentEvent.Rounds.length>0 ? <CardTitle subtitle="Rounds Description" /> : ""  
               }
               
                <List>
                  {
                    CurrentEvent.Rounds.map((individualRound,index)=>{
                      return(
                        <ListItem key={index+individualRound.RoundName} secondaryTextLines={4} secondaryText={individualRound.Description} primaryText={individualRound.RoundName} leftIcon={<Bullet />} />
                      )
                      
                    })
                  }
            
              
             </List>
          </Card>
          {
            CurrentEvent.Rules ? <Card style={{margin:15}}> <List>{(this.renderRules(CurrentEvent))}</List></Card> :""
          }
          <Card style={{margin:15}}>
              <CardTitle title="Team Details" subtitle="" />
              {
                (CurrentEvent.min==1 && CurrentEvent.max==1) ? <CardText style={{paddingTop:0}}>{'Single Person Event'}</CardText>:""
              }
              {
                (CurrentEvent.min===CurrentEvent.max && CurrentEvent.min!=1 && CurrentEvent.max!=1) ? <CardText style={{paddingTop:0}}>{ CurrentEvent.min+' Persons Team Event'}</CardText>:""
              }
              {
                (CurrentEvent.min!=CurrentEvent.max) ? <CardText>{'Min Team Size :'+CurrentEvent.min+'\n\tMax Team Size:'+CurrentEvent.max}</CardText>:""
              }
              {
                (CurrentEvent.linearPrice) ? <CardText style={{paddingTop:0}}>{"Rs: "+CurrentEvent.linerMultiplier+ "/- Per Person"}</CardText>
                  :
                  <CardText style={{paddingTop:0}}>{(this.renderNonLinear(CurrentEvent))}</CardText>
              }
          </Card>
         


      </div>
        );
    }
}

const Styles = {
    titleStyle: {
        color: '#01807B',
        position: 'relative',
        top: '-1.2vh',
        fontSize: '1.8em',
        fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif'

    },
    AppBar: {
        backgroundColor: '#fff',
        height: 50,
        width: '100vw',
        textAlign: 'center'
    },
}
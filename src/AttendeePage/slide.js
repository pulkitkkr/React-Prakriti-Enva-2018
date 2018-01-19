import React, { Component } from 'react';
import GradientBG from './../gradient';
import './slide.css';
import AppBar from 'material-ui/AppBar';
import YouTube from 'react-youtube';
import { Animated } from "react-animated-css";
import Location from 'material-ui/svg-icons/communication/location-on';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Time from 'material-ui/svg-icons/device/access-time';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import { List, ListItem } from 'material-ui/List';
import IndividualCard from './IndividualCard';
import scrollToComponent from 'react-scroll-to-component';
import Chip from 'material-ui/Chip';
import {withRouter} from "react-router-dom";
import { isMobile } from 'react-device-detect';
class slide extends Component {
    constructor(props) {
        super(props);
        this.state = { width: '0', height: '0' };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        if (this.props.match.params.name && this[this.props.match.params.name]) {
            console.log('scrolling to '+this.props.match.params.name)
            window.setTimeout(()=>{
                scrollToComponent(this[this.props.match.params.name], {
                offset:0,
                align: 'top',
                });   
            },1000)
        }


    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    render() {
        const opts = {
            width: this.state.width - 100,
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: false
            }
        };

        return (
            <div className='mainBack'>
              <Animated animationInDelay={0} animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
               <AppBar titleStyle={Styles.titleStyle} style={Styles.AppBar} zDepth={3} title={"Prakriti MSIT"}   />
              </Animated>               
                <div  width={parseInt(this.state.width)}  height={parseInt(this.state.height)}>
                <Animated animationInDelay={0} animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                   <img width={parseInt(this.state.width)} height={parseInt(this.state.height/1.3)} className='mainImage' src={'./../'+this.props.imgLink}></img>
                   <center>
                        <h1 style={{position:'relative',top:-this.state.height/1.80,color:'#ffffff', fontWeight:'300' }}>Enva2k18<br/>Be The Root of Change</h1>
                    </center>
                </Animated>
                <Animated animationInDelay={0.35} animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              
                    <div style={{minHeight:(this.state.height-100), position:'relative',top:-this.state.height/3}} className='mainDiv'>
                     <center>
                     <div className='circleDark'  style={{position:'relative',top:-this.state.width/12,borderRadius:this.state.height/1.2,backgroundColor:'#000000',display:'inline-block',  boxShadow: "1px 0.2px 15px #232323"}}>
                         <img width={parseInt(this.state.width/5)}  src={'./../assets/logo.png'}></img>
                        
                     </div>
                      <YouTube videoId="IT2_956xrjU"    opts={opts}    onReady={this._onReady} />
                      </center>
                       <List style={{marginLeft:this.state.width/10,alignItems:'flex-start'}}>
                          <ListItem nestedListStyle={{alignItems:'flex-start'}} primaryText="MSIT, C-4 Janakpuri" leftIcon={<Location />} />
                          <ListItem primaryText="Jan 10th-11th, 2018 " leftIcon={<DateRange />} />
                          <ListItem primaryText="10:00 AM to 6:00 PM " leftIcon={<Time />} />
                       </List>
                       <center>
                         <Chip>Scroll Below to Book Tickets</Chip>
                         <br/>
                       </center>
                    

                    </div>
              </Animated>
                </div> 
                <IndividualCard ref={(element)=>this.showdown=element} ClickFunc={()=>{this.props.history.push("/event/showdown");}} imgLink={'./../assets/showdown.jpg'} EventName={'The ShowDown'} description={'Pop Culture Quiz Event on Various Popular Sitcom and Anime like F.R.I.E.N.D.S, G.O.T, Naruto etc. '} />
                <IndividualCard ref={(element)=>this.wordyrinth=element} ClickFunc={()=>{this.props.history.push("/event/wordyrinth")}} imgLink={'./../assets/wordyrinth.jpg'} EventName={'Wordyrinth'} description={'If you are infatuated with the magical world of language and words, come put your best skills to test and get lost in the labyrinth of words'} />
                <IndividualCard ref={(element)=>this.greenwizard=element} ClickFunc={()=>{this.props.history.push("/event/greenwizard");}} imgLink={'./../assets/greenwizard.jpg'} EventName={'GreenWizard'} description={'Use your mind, eyes and motor skills to bring out your creativity with waste material and stand at the top '} />
                <IndividualCard ref={(element)=>this.mysteryroom=element} ClickFunc={()=>{this.props.history.push("/event/mysteryroom");}} imgLink={'./../assets/mysteryroom.jpg'} EventName={'Mystery Room'} description={"What would you do to get out of a dark room if you're locked in one that too full of mysterious objects.Solve the clues one by one. Beat the clock to get through all the clues by finding the objects related to them. Finding the objects is the only route to escape. But once all the objects are found, it still ain't over. A final clue, the toughest and the trickiest of them all, awaits you. So come one come all and have a peep inside Sherlock Holmes's mind. Beat the clock and win exciting prizes."} />
                <IndividualCard ref={(element)=>this.feetofire=element} ClickFunc={()=>{this.props.history.push("/event/feetofire");}} imgLink={'./..//assets/feetofire.jpg'} EventName={'Feet-O-Fire'} description={"If you think you are born to dance here we present a opportunity to show your best skills. Stage is all set and missing piece is your revolutionary dance performance. "} />
                <IndividualCard ref={(element)=>this.foodieAkhaada=element} ClickFunc={()=>{this.props.history.push("/event/foodieAkhaada");}} imgLink={'./../assets/foodieakhaada.jpg'} EventName={'Foodie Akhaada'} description={"Are you a foodie? Come and brace your hunger. Let the world know the secret behind the fat under your skin. "} />
                <IndividualCard ref={(element)=>this.GunNRoses=element} ClickFunc={()=>{this.props.history.push("/event/GunNRoses");}} imgLink={'./..//assets/gunnroses.jpg'} EventName={'Guns And Roses'} description={"A perfect blind date event for couples filled with fun activities"} />
                <IndividualCard ref={(element)=>this.MinuteToWinIt=element} ClickFunc={()=>{this.props.history.push("/event/MinuteToWinIt");}} imgLink={'./../assets/minutetowin.jpg'} EventName={'Minute To Win It'} description={" Do you possess the endurance and brains?.... So here comes the survival of the fittest and wittiest minute to win it. Complete the funny and difficult tasks within a specific time and get rewarded."} />
                <IndividualCard ref={(element)=>this.SportsRumble=element} ClickFunc={()=>{this.props.history.push("/event/SportsRumble");}} imgLink={'./../assets/sportsrumble.jpg'} EventName={'Sports Rumble'} description={"Fun, entertainment, strength and team spirit is what Sports Rumble is all about! A two day event which celebrates the spirit of sports!"} />
                <IndividualCard ref={(element)=>this.BattleOfBands=element} ClickFunc={()=>{this.props.history.push("/event/BattleOfBands");}} imgLink={'./../assets/battleofbands.jpg'} EventName={'Battle Of Bands'} description={"The Most Awaited Musical Extravaganza is here. Enva 2018 presents Battle of Bands, the Ultimate Musical Experience. If you think you have what it takes to rock the audience, tune up your Guitars and gather your Band Members for the Battle of the Bands."} />
                <IndividualCard ref={(element)=>this.TreasureHunt=element} ClickFunc={()=>{this.props.history.push("/event/TreasureHunt");}} imgLink={'./../assets/treasurehunt.jpg'} EventName={'Treasure Hunt'} description={"'Not all treasure's silver and gold, mate.'- Jack Sparrow\n Presenting you TREASURE HUNT - AN AMAZING RACE "} />
                <IndividualCard ref={(element)=>this.Navras=element} ClickFunc={()=>{window.location.href="https://goo.gl/forms/58T82BfeSwuId5sr2"}} imgLink={'./../assets/navras.jpg'} EventName={'Navras'} description={"Acting is magical . Change your look and attitude and you can be ​anyone​! \nTo make your expressions into your words and to let the hidden actor in you come into action, we present to you the most awaited and one of the flagship events of ENVA, in collaboration with SIFAR - The street play society of MSI"} />
                <IndividualCard ref={(element)=>this.Spartacus=element} ClickFunc={()=>{this.props.history.push("/event/Spartacus");}} imgLink={'./../assets/spartacus.jpg'} EventName={'Spartacus'} description={"You can be the greatest Counter Strike Go Player.\nyou can be the best.\nDedicate yourself and you're gonna find yourself Standing in the hall of fame.Put yourself to the test and prove you are the best out there."} />
                <IndividualCard ref={(element)=>this.LivePawn=element} ClickFunc={()=>{this.props.history.push("/event/LivePawn");}} imgLink={'./../assets/livepawn.jpg'} EventName={'Live Pawn'} description={"Ever imagined your board games turning into reality? Well, ENVA 2k18 presents an amazing unique board game event."} />
                
            </div>
        );

        return (
            <div>Please open on Mobile</div>
        )
    }
}
export default withRouter(slide);
const Styles = {
    titleStyle: {
        color: '#ffffff',
        position: 'relative',
        top: '-1.2vh',
        fontSize: '1.8em',
        fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif'

    },
    AppBar: {
        backgroundColor: '#000000',
        height: 50,
        width: '100vw',
        textAlign: 'center',
        boxShadow: "1px 0.2px 15px #232323"
    },
}
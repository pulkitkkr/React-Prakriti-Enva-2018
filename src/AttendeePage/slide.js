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

import Chip from 'material-ui/Chip';
export default class slide extends Component {
    constructor(props) {
        super(props);
        this.state = { width: '0', height: '0' };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
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
               <AppBar titleStyle={Styles.titleStyle} style={Styles.AppBar} zDepth={3} title="Prakriti MSIT"   />
              </Animated>               
                <div  width={parseInt(this.state.width)}  height={parseInt(this.state.height)}>
                <Animated animationInDelay={0} animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                   <img width={parseInt(this.state.width)} height={parseInt(this.state.height/1.3)} className='mainImage' src={this.props.imgLink}></img>
                   <center>
                        <h1 style={{position:'relative',top:-this.state.height/1.80,color:'#ffffff', fontWeight:'300' }}>Enva2k18<br/>Be The Root of Change</h1>
                    </center>
                </Animated>
                <Animated animationInDelay={0.35} animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              
                    <div style={{minHeight:(this.state.height-100), position:'relative',top:-this.state.height/3}} className='mainDiv'>
                     <center>
                     <div className='circleDark'  style={{position:'relative',top:-this.state.width/12,borderRadius:this.state.height/1.2,backgroundColor:'#000000',display:'inline-block',  boxShadow: "1px 0.2px 15px #232323"}}>
                         <img width={parseInt(this.state.width/5)}  src={'./assets/logo.png'}></img>
                        
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
                <IndividualCard ClickFunc={()=>{alert('hj')}} imgLink={'./assets/showdown.jpg'} EventName={'The ShowDown'} description={'Pop Culture Quiz Event on Various Popular Sitcom and Anime like F.R.I.E.N.D.S, G.O.T, Naruto etc. '} />
                 <IndividualCard ClickFunc={()=>{alert('hj')}} imgLink={'./assets/wordyrinth.jpg'} EventName={'Wordyrinth'} description={'If you are infatuated with the magic world of language and words, come put your best skills to test and get lost in the labyrinth of words'} />
                  <IndividualCard ClickFunc={()=>{alert('hj')}} imgLink={'./assets/greenwizard.jpg'} EventName={'GreenWizard'} description={'Use your mind, eyes and motor skills to bring out your creativity with waste material and stand at the top '} />
            </div>
        );
    }
}
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
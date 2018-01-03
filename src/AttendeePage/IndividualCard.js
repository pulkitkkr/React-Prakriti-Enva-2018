import React, { Component } from 'react';
import './slide.css';
import RaisedButton from 'material-ui/RaisedButton';

export default class IndividualCard extends Component {
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
    	var widPercent = (Math.abs(this.state.width-window.innerWidth)/this.state.width)*100;
    	var hPercent = (Math.abs(this.state.height-window.innerHeight)/this.state.height)*100;
    	if(widPercent>=16 || hPercent>16){
    	      	
    	        this.setState({ width: window.innerWidth, height: window.innerHeight });
    	    }
    }
	render() {
		return (
			  <div style={{marginBottom:(this.state.width/12)+14,minHeight:(this.state.height-100), position:'relative',top:-(this.state.height/3)+(this.state.width/12)+40}} className='mainDiv'>
                     <center>
                     <div className='circleDark'  style={{position:'relative',top:-this.state.width/12,borderRadius:this.state.height/1.2,backgroundColor:'#000000',display:'inline-block',  boxShadow: "1px 0.2px 15px #232323"}}>
                         <img width={parseInt(this.state.width/5)}  src={'./assets/logo.png'}></img>
                      </div>
                    </center>
                    <h2 style={{textAlign:'center',fontWeight:'300', zIndex: 2,position:'relative',top:-this.state.width/12}}>
                    	{this.props.EventName}
                    </h2>
                    <h4 style={{margin:15,textAlign:'center',fontWeight:'300', zIndex: 2,position:'relative',top:-this.state.width/12}}>
                    	{this.props.description}
                    </h4>
                    <center>
                    <img width={this.state.width-150} style={{maxWidth:350,position:'relative',top:-(this.state.width/12)+15}} src={this.props.imgLink}>
                    </img>
                    <RaisedButton backgroundColor='#ffc700' style={{ width:'80%', position:'relative',top:-(this.state.width/12)+30}} label="Know More" onClick={()=>this.props.ClickFunc()} />
                    </center>
                    
               </div>
		);
	}
}

import React, { Component } from 'react';

import GradientBG from './../gradient';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Bullet from 'material-ui/svg-icons/content/send';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
 
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import scrollToComponent from 'react-scroll-to-component';
export default class SportsRumbleOrganiser extends Component {
    constructor(props) {
        super(props);
        this.state={width:0,height:0}
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

    render() {
        return (
            <div>
				<AppBar ref={(element)=>{this.sc=element}} titleStyle={Styles.titleStyle} style={Styles.AppBar} zDepth={3} title={'SportsRumble'}   iconClassNameRight="muidocs-icon-navigation-expand-more"  />
				<GradientBG width={this.state.width} height={this.state.height*2}/>
				<Card style={{margin:15}}>
   				    <CardTitle title="Select Game" subtitle="" />
    				<CardText style={{paddingTop:0}}>
      			   Please Select Game, you want to book for !!
            </CardText>
      			    <List>
      			        <ListItem onClick={()=> this.props.history.push("/organiserBook/sportssquad")}  secondaryTextLines={4} secondaryText={''} primaryText={"Sports Squad"} leftIcon={<Bullet />} />
      			        <ListItem onClick={()=> this.props.history.push("/organiserBook/herculeshaven")}   secondaryTextLines={4} secondaryText={''} primaryText={"Herculean Haven"} leftIcon={<Bullet />} />
      			        <ListItem onClick={()=> this.props.history.push("/organiserBook/legerityleague")}   secondaryTextLines={4} secondaryText={''} primaryText={"Legerity League"} leftIcon={<Bullet />} />
      			   </List>
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
import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Slide from './slide'


export default class AttendeePage extends Component {
	render() {
		 const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
		return (
			 <div>
                <Slide imgLink={'./assets/slide1.jpg'}/>
             </div>
             
		);
	}
}

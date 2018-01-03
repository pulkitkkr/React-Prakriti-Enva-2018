import React, { Component } from 'react';
 
export default class Error404 extends Component {
	render() {
		return (
			<div onClick={()=>window.navigator.vibrate(200)}>Error 404: Page Not Found</div>
		);
	}
}

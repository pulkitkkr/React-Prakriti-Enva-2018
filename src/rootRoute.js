import React from 'react';
import LoginPage from './LoginPage';
import ErrorPage from './ErrorPage';
import OrganiserPage from './OrganiserPage';
import AttendeePage from './AttendeePage';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
const rootRoutes  = ()=>{
	return(
		<MuiThemeProvider>
	    	<Router basename='/'>
	    		<Switch>
	    			<Route exact path='/' component={LoginPage}></Route>
	    			<Route exact  path='/organiser' component={OrganiserPage}></Route>
	    			<Route exact path='/attendee' component={AttendeePage}></Route>
					<Route  component={ErrorPage}></Route>
				</Switch>
			</Router>
		</MuiThemeProvider>	
	)
}

export default rootRoutes;
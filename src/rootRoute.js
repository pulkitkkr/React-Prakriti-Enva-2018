import React from 'react';
import LoginPage from './LoginPage';
import ErrorPage from './ErrorPage';
import OrganiserPage from './OrganiserPage';

import OrganiserPageSportsRumble from './SportsRumble/indexOrganiser';
import OrganiserBook from './OrganiserBook';
import AttendeePage from './AttendeePage';
import individualEvent from './IndividualEvent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import unique from './SportsRumble'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
const rootRoutes  = ()=>{
	return(
		<MuiThemeProvider>
	    	<Router>
	    		<Switch>
	    			<Route exact path='/' component={LoginPage}></Route>
	    			<Route exact path='/organiserBook/sportsrumble' component={OrganiserPageSportsRumble}></Route>

	    			<Route exact path='/organiser' component={OrganiserPage}></Route>
	    			<Route exact path='/event/SportsRumble' component={unique}></Route>
	    			<Route exact path='/attendee/:name' component={AttendeePage}></Route>
	    			<Route exact path='/organiserBook/:event' component={OrganiserBook}></Route>
	    			<Route exact path='/attendee' component={AttendeePage}></Route>
					<Route path='/event/:event' component={individualEvent}/>
					<Route  component={ErrorPage}></Route>
				</Switch>
			</Router>
		</MuiThemeProvider>	
	)
}

export default rootRoutes;
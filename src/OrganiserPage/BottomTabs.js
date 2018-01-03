import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import SvgIcon from 'material-ui/SvgIcon';
import GiftCard from 'material-ui/svg-icons/action/card-giftcard'
import Announcement from 'material-ui/svg-icons/action/announcement'
import Chart from 'material-ui/svg-icons/editor/insert-chart'
const recentsIcon = <GiftCard/>
const favoritesIcon = <Chart/>
const nearbyIcon = <Announcement />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
   

  render() {
    return (
      <div style={{position: 'absolute',bottom: '0',width:'100%' }}>
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.props.selectedIndex}>
          <BottomNavigationItem
            label="Sell Tickets"
            icon={recentsIcon}
            onClick={() => this.props.selectedIndexChange(0)}
          />
          <BottomNavigationItem
            label="Sale Charts"
            icon={favoritesIcon}
            onClick={() => this.props.selectedIndexChange(1)}
          />
          <BottomNavigationItem
            label="Informations"
            icon={nearbyIcon}
            onClick={() => this.props.selectedIndexChange(2)}
          />
        </BottomNavigation>
      </Paper>
      </div>
    );
  }
}

export default BottomNavigationExampleSimple;
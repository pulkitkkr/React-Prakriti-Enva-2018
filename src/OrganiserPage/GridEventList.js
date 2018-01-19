import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 500,
        overflowY: 'auto',
    },
};

const tilesData = [{
        img: './../assets/showdown.jpg',
        title: 'The ShowDown',
        featured: true,
    },
    {
        img: './../assets/wordyrinth.jpg',
        title: 'Wordyrinth'
    },
    {
        img: './../assets/greenwizard.jpg',
        title: 'GreenWizard'
    },
    {
        img: './../assets/mysteryroom.jpg',
        title: 'Mystery Room'
    },

    {
        img: './../assets/feetofire.jpg',
        title: 'Feet-O-Fire'
    },

    {
        img: './../assets/foodieakhaada.jpg',
        title: 'FOODIE AKHAADA'
    },
    {
        img: './../assets/minutetowin.jpg',
        title: 'MINUTE TO WIN IT'
    },
    {
        img: './../assets/gunnroses.jpg',
        title: 'Guns And Roses',
        featured: true,
    },
    {
        img: './../assets/sportsrumble.jpg',
        title: 'Sports Rumble'
    },
    {
        img: './../assets/battleofbands.jpg',
        title: 'BattleOfBands'
    },
    {
        img: './../assets/treasurehunt.jpg',
        title: 'TREASURE HUNT',
        featured: true,
    },
    {
        img: './../assets/spartacus.jpg',
        title: 'Spartacus'
    },
    {
        img: './../assets/livepawn.jpg',
        title: 'Live Pawn'
    },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
class GridEventList extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        selectedEvent:{}
      }
      console.log('grid',this.props)
    }
    ticketBooking = (title) => {
      console.log(title.title,this.props.selectedEvent)
    };
    componentWillReceiveProps(nextState){
      console.log(nextState);
      this.setState({selectedEvent:nextState.selectedEvent});
    }
    render() {
        return (
            <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
        >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleStyle={{color:'#fff',fontSize: '1.23em'}}
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
              onClick={(TData=tile.title,propData=this.props.selectedEvent,bookFunc= this.props.bookFunc)=>tile.title==propData.EventName ? bookFunc() : bookFunc()}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
        )
    }
}

export default GridEventList;
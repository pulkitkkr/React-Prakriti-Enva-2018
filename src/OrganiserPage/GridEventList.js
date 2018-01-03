import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
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
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://s.hswstatic.com/gif/how-choco-works-1.jpg',
    title: 'Food Event',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'https://www.proflowers.com/blog/wp-content/uploads/2012/08/roses2.jpg',
    title: 'Gun and Roses',
    author: 'pashminu',
  },
  {
    img: 'https://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_large/public/2013/07/ARTSPIX_Streetdance_2380.jpg?itok=nv3N-CYO',
    title: 'Street Dance',
    author: 'Danson67',
  },
  {
    img: 'http://1.bp.blogspot.com/-jANLfUXrVAg/UykIUBkhBfI/AAAAAAAAB0M/qgy64E_XARw/s1600/DSC01710.JPG',
    title: 'Street Play',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GridEventList = () => (
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
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridEventList;
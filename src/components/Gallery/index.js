import React from 'react';
import styles from "./index.module.css"
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: "visible",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "70vw",
    height: 'auto',
    // maxHeight: 500,
    overflow: "auto"
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function TitlebarGridList({tileData, cols, changeRentable}) {
  const classes = useStyles();

  return (
    <div className={classes.root} id={styles.gallery}>
      <GridList cellHeight={180} cols={cols}  className={classes.gridList}>
        <GridListTile key="Subheader" style={{ height: 'auto', width: "60vw"}}>
        <div className={styles.headingBox}>
           <h2 className={styles.heading}>Local Rentables™</h2></div>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <Link className={styles.link} 
             to="/checkout">
            <GridListTileBar
              onClick={()=>{
                console.log(tile.title);
                changeRentable(tile.title,tile.img)
                }}
              className={styles.gridTile}
              title={tile.title}
              subtitle={<><span>By {tile.author}</span><p> </p><span>{tile.distance} away</span></>}
             
          /> </Link>

          </GridListTile>
         
        ) )}
      </GridList>
    </div>
  );
}
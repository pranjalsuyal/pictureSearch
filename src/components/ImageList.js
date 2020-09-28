import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  pic: {
    // transition: `transform 1.2s`,
    // overflow: "hidden",
    // "&:hover": {
    //   // transform: `scale(1.2)`,
    //   transform: `scale(1.2)`,
    //   zIndex: 1,
    // },
  },
  grid: {
    // overflow: "hidden",
  },
}));

export default function ImageList(props) {
  console.log(props, "props in imgList");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={165} cols={4}>
        {props.images.map((image) => (
          <GridListTile key={image.id} cols={1} className={classes.grid}>
            {/* <div> */}
            <img
              src={image.urls.regular}
              alt={image.description}
              key={image.id}
              className={classes.pic}
            />
            {/* </div> */}
          </GridListTile>
        ))}
      </GridList>
      {console.log(props, "props")}
    </div>
  );
}
/*
.meal-photo img {
  opacity: 0.7;
  width: 100%;
  height: auto;
  -webkit-transform: scale(1.15);
  -ms-transform: scale(1.15);
  transform: scale(1.15);
  -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
  transition: transform 0.5s, opacity 0.5s;
}

.meal-photo img:hover {
  opacity: 1;
  -webkit-transform: scale(1.03);
  -ms-transform: scale(1.03);
  transform: scale(1.03);
}
*/

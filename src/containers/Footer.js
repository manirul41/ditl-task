import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    color: "white",
    padding: "20px 0",
    backgroundColor: "#2E3094",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        direction="row"
        className={classes.item}
        justifyContent="center"
      >
        <Grid item>
          <Typography>
            Daffodil International University | BSc in Software Engineering |
            2017
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

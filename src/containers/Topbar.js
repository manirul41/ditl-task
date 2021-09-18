import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    color: "white",
    padding: "10px 0",
    backgroundColor: "#2E3094",
  },
}));

const Topbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={0}
        className={classes.item}
        justifyContent="center"
      >
        {/* <Grid item xs={8}>
               
        </Grid>
        <Grid item xs={4}>
              <Typography>Md. Manirul Islam</Typography>
              <Typography> Address: Dhaka</Typography>
              <Typography>Contact: 01749869827</Typography> 
        </Grid> */}
        <Grid item xs={5}></Grid>
        {/* <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item xs={6}>
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText>Md. Manirul Islam</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText>Md. Manirul Islam</ListItemText>
            </ListItem>
          </Grid>
        </Grid> */}
        <Grid
          container
          direction="row"
          spacing={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item>
            <PersonIcon />
          </Grid>
          <Grid item>
            <Typography> Md. Manirul Islam</Typography>
          </Grid>
          <Grid item>
            <HomeIcon />
          </Grid>
          <Grid item>
            <Typography>Adabor, Mohammadpur, Dhaka.</Typography>
          </Grid>
          <Grid item>
            <PhoneIcon />
          </Grid>
          <Grid item>
            <Typography>01749869827</Typography>
          </Grid>
        </Grid>

        {/* <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item>
            <HomeIcon />
          </Grid>
          <Grid item>
            <Typography>Adabor, Mohammadpur, Dhaka.</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item>
            <PhoneIcon />
          </Grid>
          <Grid item>
            <Typography>01749869827</Typography>
          </Grid>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Topbar;

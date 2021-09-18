import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "../redux/actions/counterAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}));

const Counter = () => {
  //const [count, setCount] = useState(0);
  const classes = useStyles();
  const counterValue = useSelector((state) => state.counter);
  const { value } = counterValue;
  const dispatch = useDispatch();

  function handleCounter() {
    dispatch(setCounter(value + 1));
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1">{value}</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleCounter}>
            Increment
          </Button>
          {/* <Button
            variant="contained"
            onClick={() => {
              setCount(count + 1);
            }}
            color="secondary"
          >
            Increment
          </Button> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Counter;

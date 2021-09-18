import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/formAction";
import TableShow from "./TableShow";

const List = () => {
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const response = await axios
      .get("https://randomuser.me/api/?results=20")
      .catch((err) => {
        console.log("error", err);
      });
    //console.log('results',response);
    response.data.results.forEach((user) => {
      return dispatch(
        setUser({
          name: user.name.title + " " + user.name.first + " " + user.name.last,
          email: user.email,
          gender: user.gender,
          phone: user.phone,
        })
      );
    });
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <h1>User Table</h1>
        </Grid>
        <Grid item>
          <TableShow />
        </Grid>
      </Grid>
    </div>
  );
};

export default List;

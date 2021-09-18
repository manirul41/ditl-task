import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/actions/formAction";

const selectData = [
  { id: "1", title: "Male", value: "male" },
  { id: "2", title: "Female", value: "female" },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "& > *": {
      marginTop: theme.spacing(1),
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      gender: "",
      phone: "",
    },
  });

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const { user } = allUsers;

  function createUser(data) {
    const hasUser = user.filter(function (usr) {
      return usr.email === JSON.parse(data).email;
    });

    if (hasUser.length > 0) {
      alert("Email Invalid!");
    } else {
      dispatch(setUser(JSON.parse(data)));
      alert("User Created");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create User
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit((data) => createUser(JSON.stringify(data)))}
        >
          <Controller
            control={control}
            error={Boolean(errors.name)}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                autoComplete="name"
                autoFocus
                error={!!error}
                helperText={errors.name?.message}
              />
            )}
            rules={{
              required: "Required",
            }}
          />

          <Controller
            control={control}
            error={Boolean(errors.email)}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                error={!!error}
                helperText={errors.email?.message}
              />
            )}
            rules={{
              required: "Required",
            }}
          />

          <FormControl
            fullWidth
            variant="outlined"
            error={Boolean(errors.gender)}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Select Gender
            </InputLabel>

            <Controller
              render={({ field: { value, onChange } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Select Gender"
                >
                  <MenuItem value="">Choose Gender</MenuItem>
                  {selectData.map((data) => (
                    <MenuItem key={data.id} value={data.value}>
                      {data.title}
                    </MenuItem>
                  ))}
                </Select>
              )}
              name="gender"
              control={control}
              rules={{ required: "please select genter" }}
            />
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl>

          <Controller
            control={control}
            error={Boolean(errors.phone)}
            name="phone"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                autoComplete="phone"
                error={!!error}
                helperText={errors.phone?.message}
              />
            )}
            rules={{
              required: "Required",
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create User
          </Button>
        </form>
      </div>
    </Container>
  );
}

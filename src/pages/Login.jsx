import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const paperstyle = {
    padding: 20,
    height: "420px",
    width: "300px",
    margin: "20px auto",
  };

  const avtarstyle = { backgroundColor: "green" };
  const btnstyle = { margin: "8px 0px" };

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Grid style={{ marginTop: "100px", marginBottom: "70px" }}>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <Avatar style={avtarstyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              type="text"
              label="Username"
              variant="standard"
              fullWidth
              {...register("username", {
                required: "Username is required",
                maxLength: {
                  value: 30,
                  message: "Username must be at most 30 characters",
                },
              })}
            />
            {errors.username && (
              <span style={{ color: "red" }}>{errors.username.message}</span>
            )}
          </div>
          <div>
            <TextField
              type="password"
              label="Password"
              placeholder="Enter Password"
              variant="standard"
              {...register("password", {
                required: "Password is required",
              })}
              fullWidth
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>
          <div>
            <FormControlLabel
              control={<Checkbox color="primary" defaultChecked />}
              label="Remember Me"
            />
          </div>
          <div>
            <Button
              type="submit"
              color="primary"
              style={btnstyle}
              fullWidth
              variant="contained"
            >
              Login
            </Button>
          </div>
        </form>
        <Typography mt={1}>
          <Link href="#">Forget Password</Link>
        </Typography>
        <Typography mt={1}>
          Do you have an account? <Link to="/register">Register</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;

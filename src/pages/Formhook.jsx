import React from "react";
import { useForm } from "react-hook-form";
import {
  Paper,
  Grid,
  TextField,
  NativeSelect,
  FormControlLabel,
  Checkbox,
  Button,
  InputLabel,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Formhook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const btnstyle = { margin: "8px 0" };
  const paperstyle = {
    padding: 30,
    height: "auto",
    width: "90%",
    maxWidth: "800px",
    margin: "50px auto",
  };

  const validateFile = (value) => {
    if (value.length === 0) {
      return "File is required";
    }
    const file = value[0];
    const validFormats = ["image/jpeg", "image/jpg", "application/pdf"];
    if (file.size > 1000000) {
      // 1MB limit
      return "File size should be less than 1MB";
    }
    if (!validFormats.includes(file.type)) {
      return "Only .jpg, .jpeg, or .pdf formats are allowed";
    }
    return true;
  };

  function onsubmit(data) {
    console.log(data);
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <Paper elevation={10} style={paperstyle}>
        <div align="center">
          <h2>Registration Form</h2>
        </div>
        <hr color="green"></hr>
        <form onSubmit={handleSubmit(onsubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5} mt={3}>
              <TextField
                type="text"
                id="standard-basic"
                label="Username *"
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
            </Grid>
            <Grid item xs={false} sm={false} md={2}></Grid>
            <Grid item xs={12} sm={6} md={5} mt={3}>
              <TextField
                id="standard-basic"
                type="email"
                label="E-mail *"
                variant="standard"
                fullWidth
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </Grid>

            <Grid item xs={12} sm={6} md={5} mt={3}>
              <TextField
                id="standard-basic"
                type="Number"
                label="Mobile Number *"
                variant="standard"
                fullWidth
                {...register("mobilenumber", {
                  required: "Mobile Number is required",
                  maxLength: {
                    value: 10,
                    message: "Mobile Number must be at most 10 characters",
                  },
                  minLength: {
                    value: 10,
                    message: "Mobile Number must be at least 10 characters",
                  },
                })}
              />
              {errors.mobilenumber && (
                <span style={{ color: "red " }}>
                  {errors.mobilenumber.message}
                </span>
              )}
            </Grid>
            <Grid item xs={false} sm={false} md={2}></Grid>
            <Grid item xs={12} sm={6} md={5} mt={3}>
              <InputLabel>Birth date</InputLabel>
              <TextField
                id="standard-basic"
                type="date"
                variant="standard"
                fullWidth
                {...register("birthdate")}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={5} mt={3}>
              <TextField
                id="standard-basic"
                type="Number"
                label="Age"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={false} sm={false} md={2}></Grid>
            <Grid item xs={12} sm={6} md={5} mt={3}>
              <InputLabel>Select Gender</InputLabel>
              <NativeSelect fullWidth>
                <option value={""}>Select Gender</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Other"}>Other</option>
              </NativeSelect>
            </Grid>

            <Grid item xs={12} sm={6} md={5} mt={3}>
              <TextField
                id="standard-basic"
                type="Text"
                label="Qualification"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={false} sm={false} md={2}></Grid>
            <Grid item xs={12} sm={6} md={5} mt={3}>
              <InputLabel style={{ marginBottom: "5px" }}>
                Upload Image and Sign *
              </InputLabel>

              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload Image And Sign
                <VisuallyHiddenInput
                  type="file"
                  {...register("upload", {
                    validate: validateFile,
                  })}
                />
              </Button>
              {errors.upload && (
                <span style={{ color: "red", marginTop: "5px" }}>
                  {errors.upload.message}
                </span>
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={12} mt={2}>
              <TextField
                type="text"
                id="standard-basic"
                label="Address"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} mt={3}>
              <label>
                <b> Language Spoken </b> -: &nbsp;
              </label>

              <FormControlLabel
                control={<Checkbox size="small" color="success" />}
                label="Marathi"
              />
              <FormControlLabel
                control={<Checkbox size="small" color="success" />}
                label="Hindi"
              />
              <FormControlLabel
                control={<Checkbox size="small" color="success" />}
                label="English"
              />
              <FormControlLabel
                control={<Checkbox size="small" color="success" />}
                label="Urdu"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <FormControlLabel
                control={<Checkbox color="primary" defaultChecked />}
                label="Remember Me"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} mt={3} mb={1}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={btnstyle}
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Formhook;

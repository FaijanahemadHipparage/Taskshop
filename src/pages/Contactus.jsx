import React from "react";
import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const paperstyle = {
    padding: 20,
    height: "auto",
    width: "400px",
    margin: "20px auto",
  };

  const avatarstyle = { backgroundColor: "blue" };
  const btnstyle = { margin: "16px 0" };

  function onSubmit(data) {
    console.log(data);
    reset(); // Reset the form after submission
  }

  return (
    <Grid style={{ marginTop: "100px", marginBottom: "30px" }}>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <Avatar style={avatarstyle}>
            <MailOutlineIcon />
          </Avatar>
          <h2>Contact Us</h2>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div>
            <TextField
              type="text"
              label="Name"
              variant="standard"
              fullWidth
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 50,
                  message: "Name must be at most 50 characters",
                },
              })}
            />
            {errors.name && (
              <span style={{ color: "red" }}>{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div>
            <TextField
              type="email"
              label="Email"
              variant="standard"
              fullWidth
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              style={{ marginTop: "16px" }}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <TextField
              type="text"
              label="Subject"
              variant="standard"
              fullWidth
              {...register("subject", {
                required: "Subject is required",
                maxLength: {
                  value: 100,
                  message: "Subject must be at most 100 characters",
                },
              })}
              style={{ marginTop: "16px" }}
            />
            {errors.subject && (
              <span style={{ color: "red" }}>{errors.subject.message}</span>
            )}
          </div>

          {/* Message Field */}
          <div>
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="standard"
              fullWidth
              {...register("message", {
                required: "Message is required",
              })}
              style={{ marginTop: "16px" }}
            />
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              color="primary"
              style={btnstyle}
              fullWidth
              variant="contained"
            >
              Send Message
            </Button>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default ContactUs;

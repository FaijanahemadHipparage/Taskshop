import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";

const AboutUs = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      {/* Title Section */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ fontWeight: "bold", marginBottom: "40px" }}
      >
        About NWS Web Store
      </Typography>

      {/* Mission and Values Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BusinessIcon style={{ marginRight: "10px" }} /> Our Mission
              </Typography>
              <Typography variant="body1" color="textSecondary">
                At NWS Web Store, our mission is to provide high-quality
                products and exceptional customer service. We aim to build a
                platform where customers can find everything they need in one
                place while enjoying a seamless shopping experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GroupIcon style={{ marginRight: "10px" }} /> Our Values
              </Typography>
              <Typography variant="body1" color="textSecondary">
                We believe in integrity, innovation, and customer satisfaction.
                Our values guide us in every decision we make and help us
                maintain the highest standards of business ethics.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Team Section */}
      <Box mt={8}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Meet Our Team
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          paragraph
        >
          Our team is composed of experienced professionals passionate about
          technology, innovation, and customer service.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {["Dinesh Sir", "Shivam Gupta", "Faijan Hipparage"].map(
            (name, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card elevation={3}>
                  <CardContent style={{ textAlign: "center" }}>
                    <Avatar
                      style={{
                        backgroundColor: "#063970",
                        width: "80px",
                        height: "80px",
                        margin: "0 auto 20px auto",
                      }}
                    >
                      {name.charAt(0)}
                    </Avatar>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {index === 0
                        ? "CEO & Founder"
                        : index === 1
                        ? "Team Lead"
                        : "Software Engineer"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      {/* Our Story Section */}
      <Box mt={8}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Our Story
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          paragraph
        >
          NWS Web Store started with a vision to simplify online shopping. Over
          the years, we've grown into a trusted name in the industry, thanks to
          our commitment to quality, innovation, and our customers.
        </Typography>
      </Box>

      {/* Footer Section */}
      <Box mt={8} style={{ textAlign: "center", marginTop: "40px" }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} NWS Soft Consultancy Pvt Ltd. All rights
          reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;

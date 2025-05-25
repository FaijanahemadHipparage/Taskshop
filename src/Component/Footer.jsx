import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

function Footer() {
  return (
    <AppBar
      component="footer"
      position="static"
      sx={{
        backgroundColor: "#063970",

        marginTop: "auto", // Ensures the footer stays at the bottom
        boxShadow: "none", // Removes shadow for a flat look
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Vertically centers the content
            height: "100%", // Takes full height of the AppBar
            paddingX: 2, // Horizontal padding for spacing
            minHeight: "40px", // Ensures Toolbar height does not exceed AppBar
          }}
        >
          {/* Copyright Text */}
          <Typography variant="body2" color="inherit" sx={{ fontSize: "14px" }}>
            © {new Date().getFullYear()} NWS Soft Consultancy Pvt Ltd. All
            rights reserved.
          </Typography>

          {/* Links Section with Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                cursor: "pointer",
                "&:hover": { color: "#FFDD57" }, // Hover effect
                fontSize: "14px",
              }}
            >
              <PrivacyTipOutlinedIcon sx={{ fontSize: "16px" }} /> Privacy
              Policy
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                cursor: "pointer",
                "&:hover": { color: "#FFDD57" }, // Hover effect
                fontSize: "14px",
              }}
            >
              <GavelOutlinedIcon sx={{ fontSize: "16px" }} /> Terms of Service
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;

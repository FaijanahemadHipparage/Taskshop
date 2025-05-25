import DrawerComp from "./DrawerComp";
import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import {
  Tabs,
  Tab,
  Toolbar,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";

import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const storeData = useSelector((state) => state.cart.productData);

  const [value, setValue] = useState();
  const [anchorEl, setAnchorEl] = useState(null); // Main menu anchor
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null); // Submenu anchor
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Active submenu state
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const handleMainMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSubmenuAnchorEl(null); // Close any open submenu when main menu is opened
    setActiveSubmenu(null); // Reset active submenu
  };

  const handleMainMenuClose = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
    setActiveSubmenu(null);
  };

  const handleSubmenuOpen = (event, menuName) => {
    setSubmenuAnchorEl(event.currentTarget);
    setActiveSubmenu(menuName);
  };

  const handleSubmenuClose = () => {
    setSubmenuAnchorEl(null);
    setActiveSubmenu(null);
  };

  return (
    <>
      <AppBar style={{ backgroundColor: "#063970" }}>
        <Toolbar>
          <Typography style={{ position: "relative", display: "inline-block" }}>
            <Link
              to="/cart"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ShoppingCartCheckoutOutlinedIcon />
            </Link>
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 1px",
                fontSize: "0.75rem",
                fontWeight: "bold",
                lineHeight: "1",
                minWidth: "20px",
                textAlign: "center",
              }}
            >
              {storeData.length}
            </span>
          </Typography>
          {/* <Typography>
            <span>{storeData.length}</span>
            <Link
              to="/cart"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ShoppingCartCheckoutOutlinedIcon />
            </Link>
          </Typography> */}

          {isMatch ? (
            <>
              <Typography style={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                SHOPEE
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                <Tab
                  label="Home"
                  component={Link}
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                />
                <Tab
                  label="About Us"
                  component={Link}
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "white" }}
                />
                <Tab
                  label="Products"
                  component={Link}
                  to="/product"
                  style={{ textDecoration: "none", color: "white" }}
                />
                <Tab
                  label="Contact Us"
                  component={Link}
                  to="/contactus"
                  style={{ textDecoration: "none", color: "white" }}
                />
                <Tab
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      Services
                    </Box>
                  }
                  onClick={handleMainMenuClick}
                  style={{ textDecoration: "none", color: "white" }}
                />

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMainMenuClose}
                >
                  <MenuItem
                    onClick={(event) => handleSubmenuOpen(event, "migration")}
                  >
                    Ecommerce Migration
                  </MenuItem>

                  <Menu
                    anchorEl={submenuAnchorEl}
                    open={
                      Boolean(submenuAnchorEl) && activeSubmenu === "migration"
                    }
                    onClose={handleSubmenuClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem
                      onClick={handleMainMenuClose}
                      component={Link}
                      to="/services"
                    >
                      Data Migration
                    </MenuItem>
                    <MenuItem
                      onClick={handleMainMenuClose}
                      component={Link}
                      to="/services"
                    >
                      Web Migration
                    </MenuItem>
                  </Menu>

                  <MenuItem
                    onClick={(event) => handleSubmenuOpen(event, "consulting")}
                  >
                    Ecommerce Consulting
                  </MenuItem>

                  <Menu
                    anchorEl={submenuAnchorEl}
                    open={
                      Boolean(submenuAnchorEl) && activeSubmenu === "consulting"
                    }
                    onClose={handleSubmenuClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem
                      onClick={handleMainMenuClose}
                      component={Link}
                      to="/services"
                    >
                      Data Consulting
                    </MenuItem>
                    <MenuItem
                      onClick={handleMainMenuClose}
                      component={Link}
                      to="/services"
                    >
                      Web Consulting
                    </MenuItem>
                  </Menu>
                </Menu>
              </Tabs>

              <Button
                style={{ marginLeft: "auto", backgroundColor: "green" }}
                variant="Contained"
              >
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Login
                </Link>
              </Button>
              {/* <Button
                style={{ marginLeft: "10px", backgroundColor: "green" }}
                variant="Contained"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/register"
                >
                  Register
                </Link>
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

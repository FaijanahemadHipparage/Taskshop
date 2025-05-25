import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const PAGES = [
  "Products",
  "Services",
  "ContactUs",
  "AboutUs",
  "Login",
  "Register",
];

const DrawerComp = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>
                  <Link to="/`${PAGES.lowercase()`}">{page}</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          {/* <ListItemButton>
            <ListItemIcon>
              <ListItemText></ListItemText>
            </ListItemIcon>
          </ListItemButton> */}
        </List>
      </Drawer>
      <IconButton
        style={{ color: "White", marginLeft: "auto" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;

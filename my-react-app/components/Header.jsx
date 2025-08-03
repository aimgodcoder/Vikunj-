import { BiAlignMiddle } from "react-icons/bi";
import { CgProfile, CgSpaceBetween } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Context } from "../src/main";
import { useEffect, useContext, createContext, useState } from "react";

const Header = () => {
  //sidebar functionality
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Dummy authentication state (replace with real auth logic)
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleProfileClick = () => {
    if (isAuthenticated) {
      setMenuOpen((open) => !open);
    } else {
      // Redirect to login or show login modal
      alert("Please login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        position: "relative",
        backgroundColor:'LightBlue',
        opacity: 0.8,
      }}
    >
      <button style={{ padding: "0rem" }} onClick={toggleDrawer(true)}>
        <BiAlignMiddle style={{ fontSize: "40px", backgroundColor: "black" }} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div
        style={{ display: "flex", alignItems: "center", position: "relative" }}
      >
        <AiOutlineBell style={{ marginRight: "1rem", fontSize: "30px" ,backgroundColor:'black',borderRadius:4}} />
        <div style={{ position: "relative" }}>
          <CgProfile
            style={{ fontSize: "30px", cursor: "pointer",opacity: 1 }}
            onClick={handleProfileClick}
          />
          {isAuthenticated && menuOpen && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: 0,
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                borderRadius: "4px",
                minWidth: "120px",
                zIndex: 10,
              }}
            >
              <div style={{ padding: "10px", cursor: "pointer" }}>Profile</div>
              <div style={{ padding: "10px", cursor: "pointer" }}>Settings</div>
              <div
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => setIsAuthenticated(false)}
              >
                Logout
              </div>
            </div>
          )}
          {!isAuthenticated && menuOpen && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: 0,
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                borderRadius: "4px",
                minWidth: "120px",
                zIndex: 10,
              }}
            >
              <div
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => setIsAuthenticated(true)}
              >
                Login
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

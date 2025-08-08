import { BiAlignMiddle } from "react-icons/bi";
import { CgProfile, CgSpaceBetween } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Context } from "../src/main";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { useEffect, useContext, createContext, useState } from "react";

const Header = () => {
  //sidebar functionality
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const drawerItems = [
    { text: "Home", icon: <HomeIcon />, url: "/" },
    { text: "Overview", icon: <MenuIcon />, url: "/overview" },
    { text: "Projects", icon: <FavoriteIcon />, url: "/projects" },
    { text: "Inbox", icon: <PersonIcon />, url: "/inbox" },
    { text: "Teams", icon: <SettingsIcon />, url: "/teams" },
    { text: "Logout", icon: <LogoutIcon />, url: "/logout" },
  ];

  const handleDrawerItemClick = (url) => {
    window.location.href = url;
    setOpen(false);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "calc(100vh - 72px)",
        marginTop: "72px",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingY: 2,
      }}
      role="presentation"
    >
      <List
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: 1,
        }}
      >
        <ListItem disablePadding>
          <ListItemButton disabled>
            <ListItemText
              primary="Big Logo"
              sx={{
                fontSize: "1.5em",
                textAlign: "center",
                padding: "10px 0",
              }}
            />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: "#fff", marginY: 1 }} />
        {drawerItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: item.selected ? "#FFC107" : "#fff2",
                color: item.selected ? "#000" : "#fff",
                "&:hover": {
                  backgroundColor: item.selected ? "#FFC107" : "#fff4",
                },
                marginY: 0.5,
              }}
              onClick={() => handleDrawerItemClick(item.url)}
            >
              <ListItemIcon sx={{ color: item.selected ? "#000" : "#fff" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
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
        backgroundColor: "LightBlue",
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
        <AiOutlineBell
          style={{
            marginRight: "1rem",
            fontSize: "30px",
            backgroundColor: "black",
            borderRadius: 4,
          }}
        />
        <div style={{ position: "relative" }}>
          <CgProfile
            style={{ fontSize: "30px", cursor: "pointer", opacity: 1 }}
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

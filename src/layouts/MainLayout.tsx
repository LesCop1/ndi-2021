import React, { useState } from "react";
import { AppBar, Box, Container, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./MainLayout.scss";
import Search from "components/SearchBar";
import logo from "../images/logo.png";
import DefaultLayout from "./DefaultLayout";

const MainLayout: React.FC = ({ children }) => {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (): void => {
    setDrawerState(!drawerState);
  };

  return (
    <DefaultLayout>
      <AppBar className="MainLayout">
        <Toolbar>
          <IconButton onClick={() => toggleDrawer()}>
            <MenuIcon />
          </IconButton>
          <Box className="title">
            <img src={logo} alt="logo" className="logo" />
            <Box className="title-text">
              <Typography variant="h5" component="div">
                Sauveteur du dunkerquois
              </Typography>
              <Typography variant="subtitle1" component="div">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                270 ans d'histoire
              </Typography>
            </Box>
          </Box>
          <Search />
        </Toolbar>
      </AppBar>
      <div className="toolbar-offset" />
      {children}
      <Container className="footer">footer</Container>
      <Drawer anchor="left" open={drawerState} onClose={() => toggleDrawer()}>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </Drawer>
    </DefaultLayout>
  );
};

export default MainLayout;

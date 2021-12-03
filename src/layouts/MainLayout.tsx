import React, { useState } from "react";
import { AppBar, Box, Container, Divider, Drawer, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./MainLayout.scss";
import Search from "components/SearchBar";
import logo from "../images/logo.png";

const MainLayout: React.FC = ({ children }) => {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (): void => {
    setDrawerState(!drawerState);
  };

  return (
    <>
      <AppBar className="MainLayout">
        <Toolbar>
          <IconButton onClick={() => toggleDrawer()}>
            <MenuIcon />
          </IconButton>
          <Box className="title">
            <Link href="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
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
      <div className="content">{children}</div>
      <Container className="footer">footer</Container>
      <Drawer className="Drawer" anchor="left" open={drawerState} onClose={() => toggleDrawer()}>
        <Container>
          <img className="drawer-logo" src={logo} alt="logo" />
          <Divider />
          <div className="drawer-item">
            <Link href="/">
              <Typography variant="h6">Accueil</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/rescuers">
              <Typography variant="h6">Sauveteurs</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/sea-trips">
              <Typography variant="h6">Sorties en mer</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/missions">
              <Typography variant="h6">Sauvetages</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/harbor-services">
              <Typography variant="h6">Services du port</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/maritime-savings">
              <Typography variant="h6">Moyen maritimes</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/technics">
              <Typography variant="h6">Techniques</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/history">
              <Typography variant="h6">Historique</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/additional">
              <Typography variant="h6">Compléments</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/estaminet">
              <Typography variant="h6">Estaminet</Typography>
            </Link>
          </div>
        </Container>
      </Drawer>
    </>
  );
};

export default MainLayout;

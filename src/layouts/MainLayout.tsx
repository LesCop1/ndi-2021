import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./MainLayout.scss";
import Search from "components/SearchBar";
import logo from "../images/logo.png";
import twitterLogo from "../images/twitter-logo.png";
import facebookLogo from "../images/facebook-logo.png";
import gmailLogo from "../images/gmail-logo.png";

const MainLayout: React.FC = ({ children }) => {
  const [drawerState, setDrawerState] = useState(false);
  const [dialogState, setDialogState] = useState(false);

  const handleClickOpen = (): void => {
    setDialogState(true);
  };

  const handleClose = (): void => {
    setDialogState(false);
  };

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
      <Paper elevation={8} className="footer">
        <Box className="holder">
          <Link href="/about-us">
            <Typography>Qui sommes nous ?</Typography>
          </Link>
          <Divider />
          <Link href="/dev-ndi">
            <Typography>Dev Nuit de l&apos;Info</Typography>
          </Link>
          <Divider />
          <img className="logos" src={twitterLogo} alt="twitter logo" />
          <img className="logos" src={facebookLogo} alt="facebook logo" />
          <img className="logos" src={gmailLogo} alt="gmail logo" />
        </Box>
        <Typography onClick={handleClickOpen} sx={{ marginLeft: "auto" }}>
          Connexion Admin
        </Typography>
      </Paper>
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
            <Link href="/missions">
              <Typography variant="h6">Sauvetages</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/sea-trips">
              <Typography variant="h6">Sorties en mer</Typography>
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
      <Dialog open={dialogState} onClose={handleClose}>
        <DialogTitle>Connexion Admin</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="Nom" fullWidth variant="standard" />
          <TextField margin="dense" id="password" label="Mot de passe" type="password" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose}>Se connecter</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MainLayout;

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
  FormControl,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./MainLayout.scss";
import Search from "components/SearchBar";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import logo from "../images/logo.png";
import twitterLogo from "../images/twitter-logo.png";
import facebookLogo from "../images/facebook-logo.png";
import gmailLogo from "../images/gmail-logo.png";

const MainLayout: React.FC = ({ children }) => {
  const [drawerState, setDrawerState] = useState(false);
  const [dialogState, setDialogState] = useState(false);
  const [language, setLanguage] = useState("fr");
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleLanguageChange = (event): void => {
    setLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
  };

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
                {t("mainLayout")}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {t("mainLayout-1")}
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
            <Typography> {t("AboutUs-1")}</Typography>
          </Link>
          <Divider />
          <Link href="/dev-ndi">
            <Typography>{t("dev-ndi")}</Typography>
          </Link>
          <Divider />
          <a href="https://twitter.com/boutelierphili1">
            <img className="logos" src={twitterLogo} alt="twitter logo" />
          </a>
          <a href="https://www.facebook.com/groups/938396409644949">
            <img className="logos" src={facebookLogo} alt="facebook logo" />
          </a>
          <a href="mailto:sauveteurdudunkerquois@gmail.com">
            <img className="logos" src={gmailLogo} alt="gmail logo" />
          </a>
        </Box>
        <FormControl>
          <InputLabel id="language-label">{t("mainLayout-2")}</InputLabel>
          <Select
            labelId="language-label"
            id="language-select"
            value={language}
            label="Language"
            onChange={handleLanguageChange}
          >
            <MenuItem value="fr">{t("mainLayout-3")}</MenuItem>
            <MenuItem value="en">{t("mainLayout-4")}</MenuItem>
            <MenuItem value="ar">{t("mainLayout-20")}</MenuItem>
          </Select>
        </FormControl>
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
              <Typography variant="h6">{t("home")}</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/rescuers">
              <Typography variant="h6">{t("mainLayout-5")}</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/missions">
              <Typography variant="h6">{t("mainLayout-6")}</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/sea-trips">
              <Typography variant="h6">{t("mainLayout-7")}</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/harbor-services">
              <Typography variant="h6">{t("mainLayout-8")}</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/maritime-savings">
              <Typography variant="h6">{t("mainLayout-9")}</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/technics">
              <Typography variant="h6">{t("mainLayout-10")}</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/history">
              <Typography variant="h6">{t("mainLayout-11")}</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/additional">
              <Typography variant="h6">{t("mainLayout-12")}</Typography>
            </Link>
          </div>
          <div className="drawer-item">
            <Link href="/estaminet">
              <Typography variant="h6">{t("mainLayout-13")}</Typography>
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

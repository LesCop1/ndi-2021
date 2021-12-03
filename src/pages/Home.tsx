import { Typography, Container, Link } from "@mui/material";
import MainLayout from "layouts/MainLayout";
import React from "react";
import "./Home.scss";
import { useTranslation } from "react-i18next";
import wave from "../images/waveLogo.png";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="homePage">
        <Container>
          <Typography className="title" variant="h1">
            {t("home")}
          </Typography>
          <br />
          <Typography>
            {t("home-1")}
          </Typography>
          <br />
          <Typography>
          {t("home-2")}
          </Typography>
        </Container>
        <br />
        <Container maxWidth="sm">
          <Typography className="quote" align="center">
          {t("home-3")}
          </Typography>
        </Container>
        <br />
        <Container className="center">
          <img src={wave} alt="Vague" className="waveLogo" />
        </Container>
        <Link className="center" href="https://sauveteurdudunkerquois.fr/bosa-0257h/">
          <Typography>Arsène Busso</Typography>
        </Link>
      </div>
    </MainLayout>
  );
};
export default Home;

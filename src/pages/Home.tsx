import { Typography, Container, Link } from "@mui/material";
import MainLayout from "layouts/MainLayout";
import React from "react";
import "./Home.scss";
import wave from "../images/waveLogo.png";

const Home: React.FC = () => (
  <MainLayout>
    <div className="homePage">
      <Container>
        <Typography className="title" variant="h1">
          Accueil
        </Typography>
        <br />
        <Typography>
          Bienvenue sur le site des sauveteurs du dunkerquois. Ce site rend hommage aux femmes, hommes et enfants qui
          ont réalisé des actes de sauvetages en milieu aquatique.
        </Typography>
        <br />
        <Typography>
          Ces sauveteurs, habitants du dunkerquois (de Bray-Dunes à Grand-Fort-Philippe), ont participé à plus de 900
          sauvetages en mer et plus de 1100 sauvetages individuels. Œuvrant avec courage, abnégation et souvent au
          mépris du risque ils méritent amplement que leurs actes soient pérennisés.
        </Typography>
      </Container>
      <br />
      <Container maxWidth="sm">
        <Typography className="quote" align="center">
          “Les sauvetages ? Mais tout le monde en fait … Si un homme tombe dans la « Baille » est ce qu’on ne va pas le
          chercher? Il n’y a à cela aucun mérite…”
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

export default Home;

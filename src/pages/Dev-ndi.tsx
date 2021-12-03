import { Typography, Container } from "@mui/material";
import MainLayout from "layouts/MainLayout";
import React from "react";
import "./Dev-ndi.scss";
import imageTeam from "../images/imageTeam.png";

const DevNDI: React.FC = () => (
  <MainLayout>
    <Container className="devNdiPage">
      <Typography variant="h1" className="title">
        Dev Nuit de l&apos;info
      </Typography>
      <img src={imageTeam} alt="Equipe dev nuit de l'info" className="image" />
    </Container>
  </MainLayout>
);

export default DevNDI;

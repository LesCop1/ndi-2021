import { Typography, Container } from "@mui/material";
import MainLayout from "layouts/MainLayout";
import React from "react";
import "./Dev-ndi.scss";
import { useTranslation } from "react-i18next";
import imageTeam from "../images/imageTeam.png";

const DevNDI: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Container className="devNdiPage">
        <Typography variant="h1" className="title">
          {t("dev-ndi")}
        </Typography>
        <img src={imageTeam} alt={t("dev-ndi-1")} className="image" />
      </Container>
    </MainLayout>
  );
};

export default DevNDI;

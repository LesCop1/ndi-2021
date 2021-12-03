import { Typography, Container } from "@mui/material";
import MainLayout from "layouts/MainLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import "./About-Us.scss";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="aboutUsPage">
        <Container>
          <Typography className="title" variant="h1">
            {t("AboutUs-1")}
          </Typography>
          <br />
          <Typography>
            {t("AboutUs-2")}
          </Typography>
          <br />
          <Typography>
            {t("AboutUs-3")}
            <br />
            {t("AboutUs-4")}
          </Typography>

          <Typography>
            {t("AboutUs-5")}
            <br />
            {t("AboutUs-6")}
          </Typography>
        </Container>
      </div>
    </MainLayout>
  );
};

export default AboutUs;

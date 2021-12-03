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
            {t("who-are-we")}
          </Typography>
          <br />
          <Typography>
            Ce site trouve ses origines dans les recherches généalogiques entreprises par Philippe Boutelier.
          </Typography>
          <br />
          <Typography>
            La généalogie n’est pas pour lui une course à l’arbre le plus gros , il préfère s’intéresser aux personnes
            et à leur vie. C’est ainsi que, en 2012, il se penche sur l’histoire de Joseph Taylor, sauveteur du
            Dunkerquois, grand-oncle préféré de son père. ll s’aperçoit alors, à travers la carrière de ce sauveteur que
            l’histoire de ces personnes d’exception (de Bray-Dunes à Grand-Fort-Philippe) dort dans les archives de la
            Bibliothèque Nationale de France.
            <br />
            Il décide de mettre en lumière le parcours de ces hommes guidés par l’abnégation, l’humanisme et le courage,
            avec un mépris indéniable pour les risques encourus.
          </Typography>

          <Typography>
            « Les Corsaires Dunkerquois » : l’association philanthropique dunkerquoise remarque ce travail de mémoire et
            passe une convention avec Philippe Boutelier de façon à couvrir les frais inhérents au site.
            <br />
            Par cette convention, où l’association devient propriétaire du site, la pérennité mémorielle de l’histoire
            des sauveteurs du dunkerquois est assurée.
          </Typography>
        </Container>
      </div>
    </MainLayout>
  );
};

export default AboutUs;

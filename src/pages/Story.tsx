import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./Story.scss";

import Rescuer from "components/Rescuer";
import Rescuee from "components/Rescuee";
import Waves from "components/Waves";
import MainLayout from "layouts/MainLayout";

const Story = (props: unknown): JSX.Element => {
  const params = useParams();
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="StoryLayout">
        <div className="HeaderLayout">
          <Typography className="HeaderTitle" variant="h1" align="center">
            {t("story")}
          </Typography>
          <Rescuer />
          <Rescuee />
          <Waves />
        </div>
        <Container className="BodyLayout">
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam aliquam quo illo suscipit.
            Vitae numquam, adipisci dolores soluta expedita explicabo optio libero, earum quae dolorum voluptate
            mollitia sint vel.
          </Typography>
          <Divider />
          <Box>EE</Box>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Story;

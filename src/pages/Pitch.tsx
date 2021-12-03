import { Container, Typography } from "@mui/material";
import MainLayout from "layouts/MainLayout";
import React from "react";

const Pitch: React.FC = () => (
  <MainLayout>
    <Container>
      <Typography variant="h3">Pitch</Typography>
      <Typography>
        <a href="https://youtu.be/4HlDei-EIqE">https://youtu.be/4HlDei-EIqE</a>
      </Typography>
    </Container>
  </MainLayout>
);

export default Pitch;

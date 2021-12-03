import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Divider } from "@mui/material";
import "./Story.scss";

import Rescuer from "components/Rescuer";
import Rescuee from "components/Rescuee";
import Waves from "components/Waves";
import MainLayout from "layouts/MainLayout";

const Story = (props: unknown): JSX.Element => {
  const params = useParams();
  return (
    <MainLayout>
      <div className="StoryLayout">
        <div className="HeaderLayout">
          {params.storyid}
          <Rescuer />
          <Rescuee />
          <Waves />
        </div>
        <Container className="BodyLayout">
          <Box>Texte du récit</Box>
          <Divider />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia
            accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto
            sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore
            in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci,
            provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi,
            doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias
            accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia
            accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto
            sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore
            in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci,
            provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi,
            doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias
            accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia
            accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto
            sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore
            in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci,
            provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi,
            doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias
            accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia
            accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto
            sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore
            in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci,
            provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi,
            doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias
            accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia
            accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto
            sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias inventore
            in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi, doloribus debitis adipisci,
            provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias accusantium repellat nisi,
            doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas alias inventore in, quidem mollitia accusantium. Iure molestias
            accusantium repellat nisi, doloribus debitis adipisci, provident, eos nemo iusto sequi voluptates deleniti!
          </p>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Story;

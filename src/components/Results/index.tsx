import React from "react";
import DogInfo from "./DogInfo";
import Images from "./Images";
import { Container } from "./styles";

interface Props {
  images: string[];
}

function Results({ images }: Props) {
  return (
    <Container>
      <h1>Gallery</h1>
      <DogInfo />
      <Images images={images} />
    </Container>
  );
}

export default Results;

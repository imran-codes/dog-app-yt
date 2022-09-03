import React from "react";
import { Container, ImageContainer } from "./styles";

interface Props {
  images: string[];
}

function Images({ images }: Props) {
  return (
    <Container>
      {images?.map((image, index) => (
        <ImageContainer key={index}>
          <img src={image} alt="Dog" loading="lazy" />
        </ImageContainer>
      ))}
    </Container>
  );
}

export default Images;

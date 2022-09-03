import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { Container } from "./styles";

function DogInfo() {
  const dogStore = useSelector((state: RootState) => state.app);

  const breedState = dogStore?.breed;
  const subBreedState = dogStore?.subBreed;
  const imageResultsState = dogStore?.imageResults;

  function capitalizeBreed(string: string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
  const renderTitle = () => {
    if (
      breedState !== "all" &&
      subBreedState !== "all" &&
      imageResultsState > 0
    )
      return (
        <span>
          {capitalizeBreed(breedState)} - {capitalizeBreed(subBreedState)}
        </span>
      );
    if (
      breedState !== "all" &&
      subBreedState === "all" &&
      imageResultsState > 0
    )
      return <span>{capitalizeBreed(breedState)}</span>;
    return null;
  };

  return (
    <Container>
      <>
        {renderTitle()}
        <p>{imageResultsState} results</p>
      </>
    </Container>
  );
}

export default DogInfo;

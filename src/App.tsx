import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import DogForm from "./components/DogForm";
import Loader from "./components/Loader";
import Results from "./components/Results";
import { fetchDogsData, fetchDogsSubBreed } from "./lib/api";
import { RootState } from "./reducers";
import { AppBody, Container, Description } from "./Styles/styled";

function App() {
  const [breedList, setBreedList] = useState(null);
  const [subBreedList, setSubBreedList] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dogStore = useSelector((state: RootState) => state.app);

  const breedState = dogStore?.breed;
  const imageResultState = dogStore?.imageResults;

  const fetchData = useCallback(async () => {
    await fetchDogsData()
      .then((data) => {
        setBreedList(data?.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
    if (breedState !== "all") {
      await fetchDogsSubBreed(breedState)
        .then((data) => {
          setSubBreedList(data?.message);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [breedState]);

  useEffect(() => {
    fetchData();
  }, [breedState, fetchData]);

  if (isLoading) return <Loader />;
  if (!breedList) return <p>No Dogs Found</p>;

  return (
    <Container>
      <Description>
        <ul>
          This is a Dog App built with React JS Using the Dog API. The app uses:
          <li>ReactJS & TypeScript</li>
          <li>Redux for State Management</li>
          <li>Axios for fetching Data</li>
          <li>Styled Components</li>
          <li> Unit Tests With Jest & React Testing Library</li>
        </ul>
        <br />
        <p>
          Created by{" "}
          <a href="https://imrancodes.com/" target="_blank" rel="noreferrer">
            Imran Codes{" "}
          </a>
        </p>
        <p>
          Youtube Video Build.{" "}
          <a
            href="https://www.youtube.com/watch?v=-nMQ4y74jHQ"
            target="_blank"
            rel="noreferrer"
          >
            Watch Now{" "}
          </a>
        </p>
      </Description>
      <AppBody>
        <DogForm
          breedList={breedList}
          subBreedList={subBreedList}
          setImages={setImages}
          setIsLoading={setIsLoading}
        />

        {imageResultState > 0 && <Results images={images} />}
      </AppBody>
    </Container>
  );
}

export default App;

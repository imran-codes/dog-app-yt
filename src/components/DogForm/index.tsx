import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { renderBreed, renderNumber, renderSubBreed } from "../../helpers";
import { RootState } from "../../reducers";
import { BreedsType } from "../../types/breed";
import Button from "../Button";
import Dropdown from "./Dropdown";
import { DogFormContainer } from "./styles";

interface Props {
  breedList: BreedsType;
  subBreedList: string[];
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function DogForm({ breedList, subBreedList, setImages, setIsLoading }: Props) {
  const dispatch = useDispatch();

  const dogStore = useSelector((state: RootState) => state.app);

  const breedState = dogStore?.breed;
  const subBreedState = dogStore?.subBreed;
  const numberState = dogStore?.number;
  const errorState = dogStore?.error;

  return (
    <DogFormContainer>
      <h1>Dogform</h1>
      <Dropdown title="Select a Breed" showError={errorState}>
        <select
          onChange={(e) => renderBreed(e.target.value, dispatch)}
          value={breedState}
        >
          <option value="all">Select Breeds</option>

          {breedList &&
            Object.keys(breedList)?.map((breed, index) => (
              <option value={breed} key={index}>
                {breed}
              </option>
            ))}
        </select>{" "}
      </Dropdown>

      {subBreedList?.length ? (
        <Dropdown title="Select a Sub Breed">
          <select
            onChange={(e) => renderSubBreed(e.target.value, dispatch)}
            value={subBreedState}
          >
            <option value="all">Select Sub Breed</option>
            {subBreedList?.length &&
              subBreedList?.map((subBreed: string, index: number) => (
                <option value={subBreed} key={index}>
                  {subBreed}
                </option>
              ))}
          </select>{" "}
        </Dropdown>
      ) : null}

      <Dropdown title="Number of Images">
        <select
          onChange={(e) => renderNumber(e.target.value, dispatch)}
          value={numberState}
        >
          <option value="all">Select Sub Breed</option>
          {Array.from({ length: 50 }, (_, index) => (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          ))}
        </select>{" "}
      </Dropdown>

      {/* Button */}
      <Button setImages={setImages} setIsLoading={setIsLoading} />
    </DogFormContainer>
  );
}

export default DogForm;

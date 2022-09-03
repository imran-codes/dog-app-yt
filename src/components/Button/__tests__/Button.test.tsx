import configureStore from "redux-mock-store";
// import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { GlobalStyle, theme } from "../../../lib/theme";
import { ThemeProvider } from "styled-components";
import Button from "..";
import { cleanup, render, screen } from "@testing-library/react";
import { ActionType, BreedAction, ResetAction } from "../../../types/reducer";
import store from "../../../reducers";
import userEvent from "@testing-library/user-event";
import app from "../../../reducers/app";

describe("Button render correctly using redux mock store", () => {
  const setImagesProp = jest.fn();
  const setIsLoadingProp = jest.fn();

  test("Reset Button renders correctly", () => {
    const initState = {
      breed: "all",
      subBreed: "all",
      number: "1",
      imageResults: 0,
      error: false,
    };
    const mockStore = configureStore();
    const dogStore = mockStore(initState);

    dogStore.clearActions();

    render(
      <Provider store={dogStore}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Button setImages={setImagesProp} setIsLoading={setIsLoadingProp} />
        </ThemeProvider>
      </Provider>
    );

    const expectedDispatch = {
      type: ActionType.RESET,
    };

    const resetButton = screen.getAllByRole("button")[1];
    expect(resetButton).toBeInTheDocument();

    // Dispatch the action
    dogStore.dispatch(expectedDispatch);

    // Test to see if the store dispatched the expected action
    const actions = dogStore.getActions();
    expect(actions).toEqual([
      {
        type: ActionType.RESET,
      },
    ]);
    expect(actions).not.toEqual([
      {
        type: ActionType.BREED,
        payload: "african",
      },
    ]);
  });
});

describe("Button renders correctly WITHOUT REDUX MOCK STORE", () => {
  afterEach(cleanup);

  test("Buttons work and are styled correctly", () => {
    const initState = {
      breed: "",
      subBreed: "all",
      number: "1",
      imageResults: 3,
      error: false,
    };

    const setImagesProp = jest.fn();
    const setIsLoadingProp = jest.fn();

    const expectedSearch: BreedAction = {
      type: ActionType.BREED,
      payload: "african",
    };

    const expectedReset: ResetAction = {
      type: ActionType.RESET,
      payload: {
        breed: "all",
        subBreed: "all",
        number: "1",
        imageResults: 0,
        error: false,
      },
    };

    render(
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Button setImages={setImagesProp} setIsLoading={setIsLoadingProp} />
        </ThemeProvider>
      </Provider>
    );
    // Search Button works correctly and redux is connected
    const SearchButton = screen.getAllByRole("button")[0];
    expect(SearchButton).toBeInTheDocument();
    expect(SearchButton).toHaveTextContent(/search dogs/i);
    expect(SearchButton).toHaveStyle("background-color: rgb(255, 54, 147)");
    expect(SearchButton).toHaveStyle("color: rgb(226, 226, 226)");

    userEvent.click(SearchButton);
    expect(app(initState, expectedSearch)).toEqual({
      breed: "african",
      subBreed: "all",
      number: "1",
      imageResults: 3,
      error: false,
    });

    // Reset Button works correctly and redux is connected
    const ResetButton = screen.getAllByRole("button")[1];
    expect(ResetButton).toBeInTheDocument();
    expect(ResetButton).toHaveTextContent(/reset search/i);
    expect(ResetButton).toHaveStyle("background-color: transparent");
    expect(ResetButton).toHaveStyle("color: rgb(251, 54, 64)");

    userEvent.click(ResetButton);
    expect(app(initState, expectedReset)).toEqual({
      breed: "all",
      subBreed: "all",
      number: "1",
      imageResults: 0,
      error: false,
    });
  });
});

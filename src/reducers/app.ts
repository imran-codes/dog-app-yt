import { Action, ActionType, ReducerState } from "../types/reducer";

const initState: ReducerState = {
  breed: "all",
  subBreed: "all",
  number: "1",
  imageResults: 0,
  error: false,
};

const app = (state = initState, action: Action): ReducerState => {
  switch (action.type) {
    case ActionType.BREED:
      return Object.assign({}, state, {
        breed: action.payload,
      });
    case ActionType.SUB_BREED:
      return Object.assign({}, state, {
        subBreed: action.payload,
      });
    case ActionType.NUMBER:
      return Object.assign({}, state, {
        number: action.payload,
      });
    case ActionType.IMAGE_RESULTS:
      return Object.assign({}, state, {
        imageResults: action.payload,
      });
    case ActionType.ERROR:
      return Object.assign({}, state, {
        error: action.payload,
      });
    case ActionType.RESET:
      return Object.assign({}, state, {
        breed: "all",
        subBreed: "all",
        number: "1",
        imageResults: 0,
        error: false,
      });
    default:
      return state;
  }
};

export default app;

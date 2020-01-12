import { ACTIVE_NOTE } from "../actions/types";

const initState = {
  index: 1,
  data: "Hello there!<br>Start by creating a new note!"
};

const ActiveNoteReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIVE_NOTE:
      let newState = {
        index: action.index,
        data: action.data
      };
      return newState;
    default:
      return state;
  }
};

export default ActiveNoteReducer;

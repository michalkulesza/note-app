import { UPDATE_EDITOR, NEW_NOTE, DELETE_NOTE } from "../actions/types";

const initState = [
  {
    id: 1,
    data: "<p>Hello there!<br>Start by creating a new note!</p>",
    done: false
  }
];

const UpdateReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_EDITOR:
      const newState = [...state];
      const index = newState.findIndex(note => note.id === action.id);
      newState[index].data = action.data;
      return newState;
    case NEW_NOTE:
      return [
        {
          id: action.id,
          data: action.data,
          done: false
        },
        ...state
      ];
    case DELETE_NOTE:
      const newArray = [...state];
      const indexToDelete = newArray.findIndex(note => note.id === action.id);
      newArray.splice(indexToDelete, 1);
      return newArray;
    default:
      return state;
  }
};

export default UpdateReducer;

import { combineReducers } from "redux";
import UpdateReducer from "./UpdateReducer";
import ActiveNoteReducer from "./ActiveNoteReducer";
import OptionsReducer from "./OptionsReducer";

export default combineReducers({
  UpdateReducer,
  ActiveNoteReducer,
  OptionsReducer
});

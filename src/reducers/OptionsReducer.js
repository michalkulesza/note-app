import { OPTION } from "../actions/types";

const initState = {
  sidePanelCollapsed: true,
  dummy: true
};

const OptionsReducer = (state = initState, action) => {
  switch (action.type) {
    case OPTION:
      const newState = { ...state };
      newState[action.option] = action.value;
      return newState;
    default:
      return state;
  }
};

export default OptionsReducer;

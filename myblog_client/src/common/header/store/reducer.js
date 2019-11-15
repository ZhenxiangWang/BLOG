import * as constants from "./constants";

const defaulState = {
  focused: false
};

export default (state = defaulState, action) => {
  if (action.type === constants.SEATCH_FOCUS) {
    return { focused: true };
  }

  if (action.type === constants.SEATCH_BLUR) {
    return { focused: false };
  }

  return state;
};

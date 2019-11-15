import * as constants from "./constants";
import { fromJS } from "immutable";

const defaulState = fromJS({
  focused: false
});

export default (state = defaulState, action) => {
  if (action.type === constants.SEATCH_FOCUS) {
    //immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set("focused", true);
  }

  if (action.type === constants.SEATCH_BLUR) {
    return state.set("focused", false);
  }

  return state;
};

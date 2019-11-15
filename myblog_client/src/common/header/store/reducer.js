import * as constants from "./constants";
import { fromJS } from "immutable";

//把js对象转化为immutable对象
const defaulState = fromJS({
  focused: false,
  //内层的数组也会变成immutable数组，所以list在未来变更时，也要变为immutable数组
  list: []
});

export default (state = defaulState, action) => {
  if (action.type === constants.SEATCH_FOCUS) {
    //immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set("focused", true);
  }

  if (action.type === constants.SEATCH_BLUR) {
    return state.set("focused", false);
  }

  if (action.type === constants.CHANGE_LIST) {
    //此时action.data已经在actionCreators中变为immutable数组了。
    return state.set("list", action.data);
  }

  return state;
};

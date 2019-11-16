import * as constants from "./constants";
import { fromJS } from "immutable";

//把js对象转化为immutable对象
const defaulState = fromJS({
  focused: false,
  mouseIn: false,
  //内层的数组也会变成immutable数组，所以list在未来变更时，也要变为immutable数组
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaulState, action) => {
  switch (action.type) {
    case constants.SEATCH_FOCUS:
      //immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set("focused", true);
    case constants.SEATCH_BLUR:
      return state.set("focused", false);
    case constants.CHANGE_LIST:
      return state.merge({
        //此时action.data已经在actionCreators中变为immutable数组了。
        list: action.data,
        totalPage: action.totalPage
      });

    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};

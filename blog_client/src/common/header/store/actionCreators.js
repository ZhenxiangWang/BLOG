import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = data => ({
  type: constants.CHANGE_LIST,
  //把data转成immutable数据
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEATCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEATCH_BLUR
});

export const getList = () => {
  //redux-thunk可以让actionCreator返回一个函数
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const changePage = page => ({
  type: constants.CHANGE_PAGE,
  page
});

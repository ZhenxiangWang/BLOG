import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => ({
  type: constants.SEATCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEATCH_BLUR
});

const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
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

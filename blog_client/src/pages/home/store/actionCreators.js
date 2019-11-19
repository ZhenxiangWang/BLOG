import axios from "axios";
import * as constants from "./constants.js";
import { fromJS } from "immutable";

const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});
const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  //把list转给immutable list
  list: fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = page => {
  return dispatch => {
    axios.get("/api/homeList.json?page=" + page).then(res => {
      const result = res.data.data;
      console.log(result);
      dispatch(addHomeList(result, page + 1));
    });
  };
};

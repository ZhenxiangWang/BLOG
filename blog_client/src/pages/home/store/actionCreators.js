import axios from "axios";
import * as constants from "./constants.js";

const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

export const getHomeInfo = () => {
  console.log("1");
  return dispatch => {
    console.log("2");
    axios.get("/api/home.json").then(res => {
      console.log("success");
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

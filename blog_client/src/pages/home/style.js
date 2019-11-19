import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 1080px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 10px;
  padding-left: 5px;
  padding-top: 30px;
  width: 680px;
  float: left;
  .banner-img {
    width: 680px;
    height: 266px;
    border-radius: 5px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  padding-right: 10px;
  margin-left: 18px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 18px;
  .topic-pic {
    display: block;
    margin-right: 10px;
    float: left;
    width: 32px;
    height: 32px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
    padding-top: 10px;
  }
`;

export const RecommendWrapper = styled.div`
  width: 320px;
  margin: 30px 0;
  margin-left: -60px;
`;

export const RecommendItem = styled.div`
  width: 320px;
  height: 56px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  margin-bottom: 14px;
  border-radius: 5px;
`;

export const WriterWrapper = styled.div`
  width: 320px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  margin-left: -60px;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  color: #fff;
  margin: 30px 0;
  border-radius: 20px;
  cursor: pointer;
`;

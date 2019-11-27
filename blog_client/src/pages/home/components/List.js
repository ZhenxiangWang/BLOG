import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <a href="/detail">
                <img className="pic" src={item.get("imgUrl")} alt="" />
              </a>
              <ListInfo>
                <a href="/detail">
                  <h3 className="title">{item.get("title")}</h3>
                </a>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>Load More</LoadMore>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
});

const mapDispatchToProps = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(List);

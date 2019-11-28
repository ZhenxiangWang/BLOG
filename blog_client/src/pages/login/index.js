import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="account"
              ref={input => {
                this.account = input;
              }}
            ></Input>
            <Input
              placeholder="password"
              type="password"
              ref={input => {
                this.password = input;
              }}
            ></Input>
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              Login
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }

  componentDidMount() {}
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

const mapDispatch = dispatch => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  }
});

export default connect(mapState, mapDispatch)(Login);

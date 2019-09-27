import React from "react";
import ReactDOM, { render } from "react-dom";
import CryptoJS from "crypto-js";
import { userService } from "../Backend/Backend";
import SocialLogin from "./SocialLogin";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // var strongPass = CryptoJS.MD5(this.state.password);
    // alert(strongPass);

    userService.loginUser(this.state.username, this.state.password);
    this.props.loginHandler();
    event.preventDefault();
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div classnames="loginbox">
        <form onSubmit={this.handleSubmit}>
          Login:
          <br />
          <label>
            Username:
            <input type="text" onChange={this.handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" onChange={this.handlePasswordChange} />
          </label>
          <br />
          Forgot password?
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;

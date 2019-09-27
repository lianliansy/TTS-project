import React, { useReducer } from "react";
import ReactDOM, { render } from "react-dom";
import CryptoJS from "crypto-js";
import { userService } from "../Backend/Backend";
import SocialLogin from "./SocialLogin";

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //var strongPass = CryptoJS.MD5(this.state.password);
    userService.CreateUser(
      this.state.username,
      this.state.password,
      this.state.Email
    );
    event.preventDefalut();
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div classnames="loginbox">
        <SocialLogin />
        <form onSubmit={this.handleSubmit}>
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
          <label>
            Email:
            <input type="text" onChange={this.handleEmailChange} />
          </label>
          <br />
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    );
  }
}

export default CreateUser;

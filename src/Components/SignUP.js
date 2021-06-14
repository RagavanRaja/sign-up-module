import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";


class SignUP extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      userName: "",
      email: "",
      password: "",
    };
  }

  fullNameHandler = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };
  userNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const Registered = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    Axios.post(" http://localhost:4000/app/sign-up", Registered);
    this.setState({
      fullName: "",
      userName: "",
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.fullNameHandler}
                value={this.state.fullName}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Username"
                onChange={this.userNameHandler}
                value={this.state.userName}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="E-Mail"
                onChange={this.emailHandler}
                value={this.state.email}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Password"
                onChange={this.passwordHandler}
                value={this.state.password}
                className="form-control form-group"
              />
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUP;

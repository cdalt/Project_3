import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props)
  this.state = {
    email: "",
    password: "",
  };
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
};
  handleInputChange(event) {
    const target = event.target.name;
    console.log(event.target.value)
    this.setState({
      [target]: event.target.value
    })
  };
  handleSubmit(event) {
    console.log("clicked");
    alert('submitted: ' + event.target.value);
    event.preventDefault();
  }
  render() {
    return (
      <form>
        <h3>Login</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            value={this.state.email}
            onChange={this.handleInputChange}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          onClick={this.handleSubmit}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )}


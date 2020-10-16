import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
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
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" value={this.state.firstname} onChange={this.handleInputChange} type="firstname" name="firstname" />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" value={this.state.lastname} onChange={this.handleInputChange} type="lastname" name="lastname" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} type="email" name="email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange} type="password" name="password" />
        </div>

        <div className="form-group">
          <a href="http://localhost:8080/auth/google">Sign up with Google</a>
          <button type="google" className="btn btn-success btn-block">Sign up with Google</button>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">Already registered <a href="">Login?</a></p>
        </div>
      </form>
    );
  }
}

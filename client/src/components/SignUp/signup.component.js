import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props)
  this.state = {
    firstname:"",
    lastname:"",
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
        <a href="http://localhost:8080/auth/google">Sign up with Google</a>
        <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">Login?</a>
        </p>
      </form>
    );
  }
}

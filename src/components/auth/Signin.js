import React, { Component } from "react";

class Signin extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    console.log(e);
  };
  onSubmit = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit()} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChange()} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.onChange()} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

import { createIdea } from "../../redux/actions/ideaActions";

class CreateIdea extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.createIdea(this.state);
    this.props.history.push("/home");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/home" />;
    return (
      <div className="landing">
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <h5 className="white-text">New Idea</h5>
            </div>

            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.onChange} />
            </div>

            <div className="input-field">
              <label htmlFor="body">Idea Details</label>
              <textarea
                type="text"
                id="body"
                className="materialize-textarea"
                onChange={this.onChange}
              />
            </div>

            <div className="input-field">
              <button className="border-button btn-large waves-effect waves-light white-text landing-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { createIdea }
)(withRouter(CreateIdea));

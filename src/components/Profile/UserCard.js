import React, { Component } from "react";
import { connect } from "react-redux";

class UserCard extends Component {
  render() {
    return <div>{JSON.stringify(this.props.user)}</div>;
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

const invokedConnect = connect(mapStateToProps);
export default invokedConnect(UserCard);

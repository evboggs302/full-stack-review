import React from "react";
// import { connect } from "react-redux";
// import { setUser } from "../../ducks/reducer";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
import UserCard from "./UserCard";

export default function ProfileContainer(props) {
  return (
    <div>
      <h1> User Profile</h1>
      <UserCard />
    </div>
  );
}

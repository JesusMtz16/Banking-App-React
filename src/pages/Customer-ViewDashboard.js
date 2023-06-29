import React from "react";
import logo from "../assets/istockphoto-1215256045-612x612.jpg";

const CustomerViewDashboard = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-text">
          <a href="/profile">Profile</a>
          <span> | </span>
          <a href="/logout">Logout</a>
          <span> | </span>
          <span>Welcome, John Doe!</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerViewDashboard;

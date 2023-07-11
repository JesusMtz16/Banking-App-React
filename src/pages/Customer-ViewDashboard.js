import React, { useState, useEffect } from "react";
import logo from "../assets/istockphoto-1215256045-612x612.jpg";
import CreateAccount from "./Customer-CreateAccount";
import AddBeneficiary from "./Customer-AddBeneficiary";
import RemoveBeneficiary from "./Customer-RemoveBeneficiary";
import TransferAmount from "./Customer-TranseferAmount";
import ViewStatement from "./Customer-ViewStatement";
import Dashboard from "../Components/Dashboard";



const CustomerViewDashboard = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [username, setUsername] = useState("");
  const [Id, setId] = useState("");

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const storedUsername = sessionStorage.getItem("username");
    const storedId = sessionStorage.getItem("userId");

    if (!isLoggedIn || !storedUsername) {
      // User is not logged in, redirect to homepage
      window.location.href = "/";
    } else {
      // User is logged in, update the username state
      setUsername(storedUsername);
      setId(storedId);
    }
  }, []);
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  const handleLogout = () => {
    // Clear the session
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("username");
    sessionStorage.setItem("isLoggedOut", false);
    // Redirect to homepage
    window.location.href = "/";
  };

  const renderContent = () => {
    switch (selectedLink) {
      case "createAccount":
        return <CreateAccount />;
      case "addBeneficiary":
        return <AddBeneficiary />;
      case "removeBeneficiary":
        return <RemoveBeneficiary />;
      case "transferMoney":
        return <TransferAmount />;
      case "viewStatement":
        return <ViewStatement />;
      default:
        return <Dashboard/>;
    }
  };

  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-text">
          <a href="/profile">Profile</a>
          <span> | </span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <span> | </span>
          <span>Welcome {username}</span>
        </div>
      </div>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>
              <button onClick={() => handleLinkClick("createAccount")}>
                Create Account
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("addBeneficiary")}>
                Add Beneficiary
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("removeBeneficiary")}>
                Remove Beneficiary
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("transferMoney")}>
                Transfer Money
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("viewStatement")}>
                View Statement
              </button>
            </li>
          </ul>
        </div>
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default CustomerViewDashboard;

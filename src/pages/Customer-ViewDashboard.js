import React, { useState } from "react";
import logo from "../assets/istockphoto-1215256045-612x612.jpg";
import CreateAccount from "../Components/Customer-CreateAccount";
import AddBeneficiary from "../Components/Customer-AddBeneficiary";
import RemoveBeneficiary from "../Components/Customer-RemoveBeneficiary";
import TransferAmount from "../Components/Customer-TransferAmount";
import ViewStatement from "../Components/Customer-ViewStatement";



import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const CustomerViewDashboard = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
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
        return null;
    }
  };

  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-text">
          <a href="/profile">Profile</a>
          <span> | </span>
          <a href="/logout">Logout</a>
          <span> | </span>
          <span>Welcome UserName</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerViewDashboard;

import React, { useState } from "react";
import { Button } from "react-bootstrap";

import StaffByAccountNumber from "./StaffByAccountNumber";
import StaffApproveBeneficiary from "./StaffApproveBeneficiary";
import StaffApproveAccount from "./StaffApproveAccount";
import StaffEnableBlockCustomer from "./StaffEnableBlockCustomer";

const StaffDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleShowComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="p-3 mb-2 bg-white">
      <div className="dashboard">
        <Button onClick={() => handleShowComponent("StaffByAccountNumber")}>
          By Account Number
        </Button>
        <Button onClick={() => handleShowComponent("StaffApproveBeneficiary")}>
          Approve Beneficiary
        </Button>
        <Button onClick={() => handleShowComponent("StaffApproveAccount")}>
          Approve Account
        </Button>
        <Button onClick={() => handleShowComponent("StaffEnableBlockCustomer")}>
          Enable/Block Customer
        </Button>
        {activeComponent === "StaffByAccountNumber" && <StaffByAccountNumber />}
        {activeComponent === "StaffApproveBeneficiary" && <StaffApproveBeneficiary />}
        {activeComponent === "StaffApproveAccount" && <StaffApproveAccount />}
        {activeComponent === "StaffEnableBlockCustomer" && <StaffEnableBlockCustomer />}
      </div>
    </div>
  );
};

export default StaffDashboard;
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import StaffByAccountNumber from "./StaffByAccountNumber";
import StaffApproveBeneficiary from "./StaffApproveBeneficiary";
import StaffApproveAccount from "./StaffApproveAccount";
import StaffEnableBlockCustomer from "./StaffEnableBlockCustomer";

const StaffDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="p-5 mb-5 bg-white">
      <div className="dashboard">
        <Button onClick={() => setActiveComponent("StaffByAccountNumber")}>
          By Account Number
        </Button>
        <Button onClick={() => setActiveComponent("StaffApproveBeneficiary")}>
          Approve Beneficiary
        </Button>
        <Button onClick={() => setActiveComponent("StaffApproveAccount")}>
          Approve Account
        </Button>
        <Button onClick={() => setActiveComponent("StaffEnableBlockCustomer")}>
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
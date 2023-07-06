import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import CustomerHomepage from './pages/Customer-Homepage';
import { CustomerRegistration } from './pages/Customer-Registration';
import CustomerLogin from './pages/Customer-Login';
import ForgotPassword from './pages/Customer-ForgotPassword';
import CustomerViewDashboard from './pages/Customer-ViewDashboard';
import CustomerCreateAccount from './pages/Customer-CreateAccount';
import CustomerAddBeneficiary from './pages/Customer-AddBeneficiary';
import CustomerRemoveBeneficiary from './pages/Customer-RemoveBeneficiary';
import CustomerTranseferAmount from './pages/Customer-TranseferAmount';
import CustomerViewStatement from './pages/Customer-ViewStatement';
import Dashboard from './Components/Dashboard';

import StaffViewDashboard from './pages/Staff-ViewDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerHomepage />} />
        <Route path="registration" element={<CustomerRegistration />} />
        <Route path="login" element={<CustomerLogin />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="dashboard" element={<CustomerViewDashboard />} />
        <Route path="createAccount" element={<CustomerCreateAccount />} />
        <Route path="addBeneficiary" element={<CustomerAddBeneficiary />} />
        <Route path="removeBeneficiary" element={<CustomerRemoveBeneficiary />} />
        <Route path="transferAmount" element={<CustomerTranseferAmount />} />
        <Route path="viewStatement" element={<CustomerViewStatement />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="staffDashboard" element={<StaffViewDashboard />} />
      </Routes>

      <footer className="footer">
        <p className="footer-text">© 2023 Cogent Banking App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

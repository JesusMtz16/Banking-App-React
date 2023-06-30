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
import StaffLogin from './pages/Staff-Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerHomepage />} />
<<<<<<< HEAD
        <Route path="registration" element={<CustomerRegistration />} />
        <Route path="login" element={<CustomerLogin />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="dashboard" element={<CustomerViewDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

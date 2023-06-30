import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import CustomerHomepage from './pages/Customer-Homepage';
import { CustomerRegistration } from './pages/Customer-Registration';
import CustomerLogin from './pages/Customer-Login';
import ForgotPassword from './pages/Customer-ForgotPassword';
import CustomerViewDashboard from './pages/Customer-ViewDashboard';
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
        <Route path="staffLogin" element={<StaffLogin />} />
=======
        <Route path="/registration" element={<CustomerRegistration />} />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<CustomerViewDashboard />} />
>>>>>>> 4a571c7 (Checked backend connection)
      </Routes>
    </div>
  );
}

export default App;

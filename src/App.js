import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CustomerHomepage from './pages/Customer-Homepage';
import { CustomerRegistration } from './pages/Customer-Registration';
import CustomerLogin from './pages/Customer-Login';
import ForgotPassword from './pages/Customer-ForgotPassword';
import CustomerViewDashboard from './pages/Customer-ViewDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerHomepage />} />
        <Route path="registration" element={<CustomerRegistration />} />
        <Route path="login" element={<CustomerLogin />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="viewDashboard" element={<CustomerViewDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

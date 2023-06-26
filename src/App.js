import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CustomerRegistration } from './pages/Customer-Registration';
import CustomerLogin from './pages/Customer-Login';
import ForgotPassword from './pages/Customer-ForgotPassword';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerRegistration />} />
        <Route path="login" element={<CustomerLogin />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;

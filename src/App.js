import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CustomerRegistration } from './Components/sites/Customer-Registration';
import CustomerLogin from './Components/sites/Customer-Login';


function App() {
  return (
    <div className="App">
      <Routes>wd
        <Route path="/" element={<CustomerRegistration/>}/>
        <Route path="login" element={<CustomerLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from '../assets/istockphoto-1215256045-612x612.jpg';
import Login from '../Components/Login/Login.js';
import { Link } from 'react-router-dom';

const StaffLogin = () => {
    return (
        <div >
            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <div className="header-text">
                    <h1>Login As Staff</h1>
                </div>
            </div>
            <Login />

            <div style={{ display: "block", alignItems: "center", justifyContent: "center", backgroundColor:"white", width:"100vh", padding:"30px",borderRadius:"5px" }}>
                <div>
                    <h1>Owing An account With us</h1>
                </div>
                
                <Link className="nav-link" to="/login" style={{ marginLeft: '10px', color: 'red' }}>
                    Log In Here
                </Link>
            </div>
        </div>
    )
}

export default StaffLogin;

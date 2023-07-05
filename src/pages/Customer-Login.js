import React from 'react';
import logo from '../assets/istockphoto-1215256045-612x612.jpg';
import Login from '../components/Login/Login';


const CustomerLogin = () => {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <div className="header-text">
                    <h1>Login</h1>
                </div>
            </div>
            <Login />
        </div>
        
    )
}

export default CustomerLogin;

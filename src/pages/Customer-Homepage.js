import React, { useState } from 'react';
import logo from '../assets/istockphoto-1215256045-612x612.jpg';
import Login from '../components/Login';
import { Link } from 'react-router-dom'

const CustomerHomepage = () => {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <div className="header-text">
                    <h1>Homepage</h1>
                </div>
            </div>
            
            <Login />
            <div className='Auth-form-container'>
                <div className='Auth-form'>
                Not a Customer?
                <Link class="nav-link" to="registration">Register in Here </Link>
                </div>
            </div>
        </div>
    )
}

export default CustomerHomepage;

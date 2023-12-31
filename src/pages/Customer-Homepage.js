import logo from '../assets/istockphoto-1215256045-612x612.jpg';
import Login from '../Components/Login/Login.js';
import { Link } from 'react-router-dom';
import React from 'react';


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
            <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <span>Not a Customer?</span>
                <Link className="nav-link" to="registration" style={{ marginLeft: '10px', color: 'red' }}>
                    Register in Here
                </Link>
                </div>
            </div>

            <div>
                <footer className="footer">
                    <p>© 2023 Cogent Banking App. All rights reserved.</p>
                </footer>
            </div>
        </div>


    )
}

export default CustomerHomepage;

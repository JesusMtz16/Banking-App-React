import React from 'react';

import logo from "../assets/istockphoto-1215256045-612x612.jpg";
import StaffDashboard from '../Components/StaffDashboard';

const StaffViewDashboard = () => {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <div className="header-text">
                    <a href="/profile">Profile</a>
                    <span> | </span>
                    <a href="/logout">Logout</a>
                    <span> | </span>
                    <span>Welcome UserName</span>
                </div>
            </div>

            <StaffDashboard />
        </div>
    )
}

export default StaffViewDashboard;

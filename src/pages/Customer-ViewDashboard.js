import React, { Component } from 'react';
import logo from '../assets/istockphoto-1215256045-612x612.jpg';
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Logout from '../components/Logout';


const CustomerViewDashboard = () => {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <div>
                    <h1>Profile</h1>
                </div>
                <div>
                    <Logout />
                </div>
                <div>
                    <h1>Welcome USER NAME</h1>
                </div>
            </div>


            <div>
                <Row className="Auth-form-container" >
                    <Col className='Auth-form'>
                        <nav>
                            <ul><a href="#">Create Account</a></ul>
                            <ul><a href="#">Add Beneficiary</a></ul>
                            <ul><a href="#">Remove Beneficiary</a></ul>
                            <ul><a href="#">Transfer Money</a></ul>
                            <ul><a href="#">View Statement</a></ul>
                        </nav>
                    </Col>

                    <Col style={{ backgroundColor: 'yellow' }}>
                        <Row>Account1 </Row>

                        <Row style={{ backgroundColor: 'green' }}>
                            Account2
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className='Auth-form-container'>
                <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                    <span>Not a Customer?</span>
                    <Link className="nav-link" to="/registration" style={{ marginLeft: '10px' }}>
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

export default CustomerViewDashboard;